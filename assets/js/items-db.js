/* GFItems — carrega/busca o database de itens (compartilhado entre database.html e alquimia.html).
   items.json: [{ id, n (nome pt-BR), ic (icon_ref), t (type_code) }] */
window.GFItems = (function () {
  var ICON_BASE = "https://api.gf-nexus.com/updates/icons/";
  var DATA_URL = "assets/data/items.json?v=2";
  var items = null;      // array original
  var byId = {};         // id -> item
  var norm = [];         // busca normalizada paralela: { item, s (nome lower sem acento), id }
  var loading = null;

  function stripAccents(s) {
    return s.normalize ? s.normalize("NFD").replace(/[̀-ͯ]/g, "") : s;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function load() {
    if (loading) return loading;
    loading = fetch(DATA_URL)
      .then(function (r) { return r.json(); })
      .then(function (arr) {
        items = arr;
        for (var i = 0; i < arr.length; i++) {
          var it = arr[i];
          byId[it.id] = it;
          norm.push({ it: it, s: stripAccents((it.n || "").toLowerCase()) });
        }
        return items;
      });
    return loading;
  }

  // busca: nome contém (sem acento) OU id começa com. "" = todos. Limita a `cap` resultados.
  function search(q, cap) {
    cap = cap || 100000;   // wiki navega tudo (render é paginado); picker passa 300
    q = stripAccents((q || "").trim().toLowerCase());
    if (!q) return items.slice(0, cap);
    var out = [], isNum = /^\d+$/.test(q);
    for (var i = 0; i < norm.length && out.length < cap; i++) {
      var n = norm[i];
      if (n.s.indexOf(q) !== -1 || (isNum && String(n.it.id).indexOf(q) === 0)) out.push(n.it);
    }
    return out;
  }

  return {
    load: load,
    search: search,
    byId: function (id) { return byId[id]; },
    iconUrl: function (ref) { return ICON_BASE + ref + ".png"; },
    esc: esc,
    all: function () { return items; }
  };
})();
