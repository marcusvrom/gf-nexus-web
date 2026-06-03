/* alquimia.js — montador de sugestão de alquimia (GF Nexus). Requer GFItems + html2canvas. */
(function () {
  var API = "https://api.gf-nexus.com/api/v1";
  var token = localStorage.getItem("gfnexus_token");
  if (!token) { location.replace("login.html"); return; }
  var AUTH = { "Authorization": "Bearer " + token };

  var MAX_MAT = 6;
  var materials = [];     // [{ item, qty }]
  var result = null;      // { item, qty }
  var pickMode = null;    // 'material' | 'result'

  var matEl = document.getElementById("materials");
  var resEl = document.getElementById("resultSlot");
  var msgEl = document.getElementById("msg");
  var pk = document.getElementById("pk"), pkGrid = document.getElementById("pkGrid");
  var pkSearch = document.getElementById("pkSearch"), pkCount = document.getElementById("pkCount");

  function emptySlot(label) {
    var d = document.createElement("div"); d.className = "slot";
    d.innerHTML = '<span class="plus">+</span><span class="hint">' + label + '</span>';
    return d;
  }
  function filledSlot(entry, onQty, onRemove) {
    var it = entry.item;
    var d = document.createElement("div"); d.className = "slot filled";
    d.innerHTML =
      '<span class="rm" title="Remover">✕</span>' +
      (it.ic ? '<img src="' + GFItems.iconUrl(it.ic) + '" alt="" onerror="this.style.visibility=\'hidden\'">' : '') +
      '<span class="nm">' + GFItems.esc(it.n) + '</span>' +
      '<span class="iid">#' + it.id + '</span>' +
      '<input class="qty" type="number" min="1" max="9999" value="' + entry.qty + '">';
    d.querySelector(".rm").addEventListener("click", function (e) { e.stopPropagation(); onRemove(); });
    d.querySelector(".qty").addEventListener("click", function (e) { e.stopPropagation(); });
    d.querySelector(".qty").addEventListener("input", function () {
      entry.qty = Math.max(1, parseInt(this.value || "1", 10)); onQty();
    });
    return d;
  }

  function render() {
    matEl.innerHTML = "";
    materials.forEach(function (m, i) {
      matEl.appendChild(filledSlot(m, function () {}, function () { materials.splice(i, 1); render(); }));
    });
    if (materials.length < MAX_MAT) {
      var add = emptySlot("Adicionar material");
      add.addEventListener("click", function () { openPicker("material"); });
      matEl.appendChild(add);
    }
    resEl.innerHTML = "";
    if (result) {
      resEl.appendChild(filledSlot(result, function () {}, function () { result = null; render(); }));
    } else {
      var r = emptySlot("Item resultado");
      r.addEventListener("click", function () { openPicker("result"); });
      resEl.appendChild(r);
    }
  }

  // ── picker ──
  function openPicker(mode) {
    pickMode = mode;
    document.getElementById("pkTitle").textContent = mode === "result" ? "Escolher item resultado" : "Escolher material";
    pk.classList.add("show"); pkSearch.value = ""; pkSearch.focus(); renderPick("");
  }
  function closePicker() { pk.classList.remove("show"); }
  function renderPick(q) {
    var res = GFItems.search(q, 300);
    pkCount.textContent = res.length + (res.length >= 300 ? "+ resultados — refine a busca" : " resultado(s)");
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
    if (pickMode === "result") result = { item: it, qty: 1 };
    else if (materials.length < MAX_MAT) materials.push({ item: it, qty: 1 });
    closePicker(); render();
  }
  var pt; pkSearch.addEventListener("input", function () { clearTimeout(pt); pt = setTimeout(function () { renderPick(pkSearch.value); }, 150); });
  document.getElementById("pkClose").addEventListener("click", closePicker);
  pk.addEventListener("click", function (e) { if (e.target === pk) closePicker(); });

  // ── helpers de mensagem / texto ──
  function showMsg(text, type) { msgEl.textContent = text; msgEl.className = "al-msg show " + type; }
  function recipeText() {
    var t = document.getElementById("ctype").value;
    var name = document.getElementById("pname").value.trim() || "Anônimo";
    var note = document.getElementById("note").value.trim();
    var lines = ["**Sugestão de Alquimia — " + t + "**", "Por: " + name, "", "**Materiais:**"];
    materials.forEach(function (m) { lines.push("• " + m.item.n + " (#" + m.item.id + ") x" + m.qty); });
    lines.push("", "**Resultado:** " + (result ? result.item.n + " (#" + result.item.id + ") x" + result.qty : "—"));
    if (note) lines.push("", "Obs.: " + note);
    return lines.join("\n");
  }
  function validate() {
    if (!materials.length) { showMsg("Adicione pelo menos 1 material.", "err"); return false; }
    if (!result) { showMsg("Escolha o item resultado.", "err"); return false; }
    return true;
  }

  // ── ações ──
  document.getElementById("copy").addEventListener("click", function () {
    if (!validate()) return;
    var txt = recipeText();
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function () {
      showMsg("Receita copiada! Cole no canal de sugestões do Discord.", "ok");
    }).catch(function () { showMsg("Copie manualmente:\n\n" + txt, "ok"); });
  });

  document.getElementById("reset").addEventListener("click", function () {
    materials = []; result = null; document.getElementById("note").value = "";
    msgEl.className = "al-msg"; render();
  });

  document.getElementById("send").addEventListener("click", function () {
    if (!validate()) return;
    var btn = this; btn.disabled = true; btn.textContent = "Gerando imagem…";
    showMsg("Gerando a imagem da receita…", "ok");
    html2canvas(document.getElementById("recipeCard"), { backgroundColor: "#0b1426", scale: 2, useCORS: true })
      .then(function (canvas) {
        return new Promise(function (resolve) { canvas.toBlob(resolve, "image/png"); });
      })
      .then(function (blob) {
        btn.textContent = "Enviando…";
        var fd = new FormData();
        fd.append("name", document.getElementById("pname").value.trim() || "Anônimo");
        fd.append("ctype", document.getElementById("ctype").value);
        fd.append("note", document.getElementById("note").value.trim());
        fd.append("materials", JSON.stringify(materials.map(function (m) { return { id: m.item.id, n: m.item.n, q: m.qty }; })));
        fd.append("result", JSON.stringify({ id: result.item.id, n: result.item.n, q: result.qty }));
        fd.append("image", blob, "alquimia.png");
        return fetch(API + "/alchemy/suggest", { method: "POST", headers: AUTH, body: fd });
      })
      .then(function (res) { return res.json().then(function (d) { return { ok: res.ok, d: d }; }); })
      .then(function (r) {
        if (r.ok) showMsg("✅ Sugestão enviada pro Discord! Obrigado por contribuir.", "ok");
        else showMsg((r.d && r.d.detail) ? r.d.detail : "Não foi possível enviar. Tente novamente ou use 'Copiar receita'.", "err");
      })
      .catch(function () { showMsg("Erro de conexão. Tente novamente ou use 'Copiar receita'.", "err"); })
      .finally(function () { btn.disabled = false; btn.textContent = "Enviar sugestão pro Discord"; });
  });

  // ── pré-preencher nome com o 1º personagem (best-effort) ──
  fetch(API + "/characters", { headers: AUTH })
    .then(function (r) { return r.ok ? r.json() : []; })
    .then(function (list) {
      var c = Array.isArray(list) ? list[0] : (list && list.characters ? list.characters[0] : null);
      var nm = c && (c.given_name || c.name);
      if (nm && !document.getElementById("pname").value) document.getElementById("pname").value = nm;
    }).catch(function () {});

  // ── boot ──
  GFItems.load().then(render).catch(function () { showMsg("Não foi possível carregar os itens. Recarregue a página.", "err"); });
})();
