/* alquimia.js — montador de sugestão da Alquimia Mágica (loteria diária 5 rounds × 8 slots).
   Réplica do modelo do GF Studio (renderAlchemy). Requer GFItems + html2canvas. */
(function () {
  var API = "https://api.gf-nexus.com/api/v1";
  var token = localStorage.getItem("gfnexus_token");
  if (!token) { location.replace("login.html"); return; }
  var AUTH = { "Authorization": "Bearer " + token };

  var ROUNDS = 5, SLOTS = 8;
  var DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
  var TYPES = { MAGIC: "Mágica", NORMAL: "Normal" };
  var cur = { type: "MAGIC", day: 1 };
  var store = {};                 // "TYPE|day" -> { "r_i": {item,qty,prob,jack} }
  var selected = null;            // {round, index}
  var pickCtx = null;             // {round, index, mode}

  var gridEl = document.getElementById("alcGrid");
  var propEl = document.getElementById("prop");
  var msgEl = document.getElementById("msg");
  var pk = document.getElementById("pk"), pkGrid = document.getElementById("pkGrid");
  var pkSearch = document.getElementById("pkSearch"), pkCount = document.getElementById("pkCount");

  function key() { return cur.type + "|" + cur.day; }
  function grid() { return store[key()] || (store[key()] = {}); }
  function dayLabel() { return DAYS[cur.day - 1]; }
  function typeLabel() { return TYPES[cur.type]; }

  // ── tabs ──
  function renderTabs() {
    var dt = document.getElementById("dayTabs"); dt.innerHTML = "";
    DAYS.forEach(function (d, i) {
      var t = document.createElement("span");
      t.className = "al-tab" + (cur.day === i + 1 ? " active" : "");
      t.textContent = d; t.addEventListener("click", function () { cur.day = i + 1; selected = null; refresh(); });
      dt.appendChild(t);
    });
    document.querySelectorAll("#typeTabs .al-tab").forEach(function (t) {
      t.classList.toggle("active", t.dataset.type === cur.type);
      t.onclick = function () { cur.type = t.dataset.type; selected = null; refresh(); };
    });
    document.getElementById("alcTitle").textContent = "Alquimia " + typeLabel();
    document.getElementById("alcSub").textContent = dayLabel() + " · GF Nexus";
  }

  // ── grid ──
  function roundTotal(r) {
    var g = grid(), s = 0;
    for (var i = 1; i <= SLOTS; i++) { var d = g[r + "_" + i]; if (d) s += parseFloat(d.prob || 0); }
    return s;
  }
  function renderGrid() {
    var g = grid(), html = "";
    for (var r = 1; r <= ROUNDS; r++) {
      html += '<div class="alc-round"><div class="alc-rlabel">Round ' + r +
        '<small>' + roundTotal(r).toFixed(2) + '%</small></div>';
      for (var i = 1; i <= SLOTS; i++) {
        var d = g[r + "_" + i];
        var sel = selected && selected.round === r && selected.index === i;
        if (d) {
          html += '<div class="alc-slot' + (sel ? ' sel' : '') + '" data-r="' + r + '" data-i="' + i + '">' +
            (d.item.ic ? '<img src="' + GFItems.iconUrl(d.item.ic) + '" alt="" onerror="this.style.visibility=\'hidden\'">' : '') +
            (d.jack == 1 ? '<span class="jk">★</span>' : '') +
            (parseFloat(d.prob) > 0 ? '<span class="pb">' + (+d.prob) + '%</span>' : '') +
            (d.qty > 1 ? '<span class="amt">' + d.qty + '</span>' : '') + '</div>';
        } else {
          html += '<div class="alc-slot empty" data-r="' + r + '" data-i="' + i + '">+</div>';
        }
      }
      html += '</div>';
    }
    gridEl.innerHTML = html;
    gridEl.querySelectorAll(".alc-slot").forEach(function (el) {
      var r = +el.dataset.r, i = +el.dataset.i;
      el.addEventListener("click", function () {
        if (grid()[r + "_" + i]) selectSlot(r, i); else openPicker(r, i, "new");
      });
    });
  }

  function selectSlot(r, i) {
    selected = { round: r, index: i };
    var d = grid()[r + "_" + i];
    document.getElementById("pName").textContent = d.item.n;
    document.getElementById("pId").textContent = "#" + d.item.id + " · Round " + r + " / Slot " + i;
    document.getElementById("pAmt").value = d.qty;
    document.getElementById("pProb").value = d.prob;
    document.getElementById("pJack").value = d.jack;
    propEl.classList.add("show");
    renderGrid();
  }
  function hideProp() { propEl.classList.remove("show"); selected = null; }

  // prop inputs
  function updSel(field, val) {
    if (!selected) return;
    var d = grid()[selected.round + "_" + selected.index]; if (!d) return;
    d[field] = val; renderGrid();
  }
  document.getElementById("pAmt").addEventListener("input", function () { updSel("qty", Math.max(1, parseInt(this.value || "1", 10))); });
  document.getElementById("pProb").addEventListener("input", function () { updSel("prob", Math.max(0, Math.min(100, parseFloat(this.value || "0")))); });
  document.getElementById("pJack").addEventListener("change", function () { updSel("jack", this.value); });
  document.getElementById("pRemove").addEventListener("click", function () {
    if (!selected) return; delete grid()[selected.round + "_" + selected.index]; hideProp(); renderGrid();
  });
  document.getElementById("pSwap").addEventListener("click", function () {
    if (selected) openPicker(selected.round, selected.index, "swap");
  });

  // ── picker ──
  function openPicker(r, i, mode) {
    pickCtx = { round: r, index: i, mode: mode };
    pk.classList.add("show"); pkSearch.value = ""; pkSearch.focus(); renderPick("");
  }
  function closePicker() { pk.classList.remove("show"); }
  function renderPick(q) {
    var res = GFItems.search(q, 300);
    pkCount.textContent = res.length + (res.length >= 300 ? "+ — refine a busca" : " resultado(s)");
    var frag = document.createDocumentFragment();
    res.forEach(function (it) {
      var d = document.createElement("div"); d.className = "pk-item";
      d.innerHTML = (it.ic ? '<img src="' + GFItems.iconUrl(it.ic) + '" alt="" onerror="this.style.visibility=\'hidden\'">' : '<img alt="">') +
        '<div><div class="nm">' + GFItems.esc(it.n) + '</div><div class="iid">#' + it.id + '</div></div>';
      d.addEventListener("click", function () { pick(it); });
      frag.appendChild(d);
    });
    pkGrid.innerHTML = ""; pkGrid.appendChild(frag);
  }
  function pick(it) {
    var g = grid(), k = pickCtx.round + "_" + pickCtx.index;
    if (pickCtx.mode === "swap" && g[k]) g[k].item = it;
    else g[k] = { item: it, qty: 1, prob: 0, jack: 0 };
    closePicker(); selectSlot(pickCtx.round, pickCtx.index);
  }
  var pt; pkSearch.addEventListener("input", function () { clearTimeout(pt); pt = setTimeout(function () { renderPick(pkSearch.value); }, 150); });
  document.getElementById("pkClose").addEventListener("click", closePicker);
  pk.addEventListener("click", function (e) { if (e.target === pk) closePicker(); });

  // ── coletar / validar / texto ──
  function collect() {
    var g = grid(), out = [];
    for (var r = 1; r <= ROUNDS; r++) for (var i = 1; i <= SLOTS; i++) {
      var d = g[r + "_" + i];
      if (d) out.push({ round: r, index: i, id: d.item.id, n: d.item.n, qty: d.qty, prob: +d.prob || 0, jack: +d.jack || 0 });
    }
    return out;
  }
  function showMsg(t, type) { msgEl.textContent = t; msgEl.className = "al-msg show " + type; }
  function recipeText(slots) {
    var lines = ["**Alquimia " + typeLabel() + " — " + dayLabel() + "**",
      "Por: " + (document.getElementById("pname2").value.trim() || "Anônimo"), ""];
    for (var r = 1; r <= ROUNDS; r++) {
      var rs = slots.filter(function (s) { return s.round === r; });
      if (!rs.length) continue;
      lines.push("**Round " + r + "** (" + roundTotal(r).toFixed(2) + "%)");
      rs.forEach(function (s) { lines.push("• " + s.n + " (#" + s.id + ") x" + s.qty + " — " + s.prob + "%" + (s.jack ? " ⭐Jackpot" : "")); });
    }
    var note = document.getElementById("note").value.trim();
    if (note) lines.push("", "Obs.: " + note);
    return lines.join("\n");
  }

  // ── ações ──
  document.getElementById("copy").addEventListener("click", function () {
    var slots = collect();
    if (!slots.length) return showMsg("Adicione pelo menos 1 item ao grid.", "err");
    var txt = recipeText(slots);
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function () {
      showMsg("Sugestão copiada! Cole no canal do Discord.", "ok");
    }).catch(function () { showMsg(txt, "ok"); });
  });

  document.getElementById("clearDay").addEventListener("click", function () {
    store[key()] = {}; hideProp(); renderGrid(); renderTabs(); msgEl.className = "al-msg";
  });

  document.getElementById("send").addEventListener("click", function () {
    var slots = collect();
    if (!slots.length) return showMsg("Adicione pelo menos 1 item ao grid.", "err");
    var btn = this; btn.disabled = true; btn.textContent = "Gerando imagem…";
    showMsg("Gerando a imagem da sugestão…", "ok");
    var prevSel = selected; selected = null; renderGrid();   // limpa highlight pra imagem
    html2canvas(document.getElementById("alcCard"), { backgroundColor: "#0b1426", scale: 2, useCORS: true })
      .then(function (canvas) { return new Promise(function (res) { canvas.toBlob(res, "image/png"); }); })
      .then(function (blob) {
        btn.textContent = "Enviando…";
        var fd = new FormData();
        fd.append("name", document.getElementById("pname2").value.trim() || "Anônimo");
        fd.append("atype", typeLabel());
        fd.append("day", dayLabel());
        fd.append("note", document.getElementById("note").value.trim());
        fd.append("slots", JSON.stringify(slots));
        fd.append("image", blob, "alquimia.png");
        return fetch(API + "/alchemy/suggest", { method: "POST", headers: AUTH, body: fd });
      })
      .then(function (res) { return res.json().then(function (d) { return { ok: res.ok, d: d }; }); })
      .then(function (r) {
        if (r.ok) showMsg("✅ Sugestão enviada pro Discord! Obrigado por contribuir.", "ok");
        else showMsg((r.d && r.d.detail) ? r.d.detail : "Não foi possível enviar. Use 'Copiar (texto)' como alternativa.", "err");
      })
      .catch(function () { showMsg("Erro de conexão. Use 'Copiar (texto)' como alternativa.", "err"); })
      .finally(function () { btn.disabled = false; btn.textContent = "Enviar sugestão pro Discord"; selected = prevSel; });
  });

  // pré-preenche nome com o 1º personagem
  fetch(API + "/characters", { headers: AUTH })
    .then(function (r) { return r.ok ? r.json() : []; })
    .then(function (list) {
      var c = Array.isArray(list) ? list[0] : null, nm = c && (c.given_name || c.name);
      if (nm && !document.getElementById("pname2").value) document.getElementById("pname2").value = nm;
    }).catch(function () {});

  function refresh() { renderTabs(); renderGrid(); hideProp(); }
  GFItems.load().then(refresh).catch(function () { showMsg("Não foi possível carregar os itens. Recarregue a página.", "err"); });
})();
