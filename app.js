// Общие функции для всех страниц сайта.
// Менять здесь ничего не нужно: тексты и фото редактируются в data.js.

function $(s, r) { return (r || document).querySelector(s); }

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

// Для поиска: нижний регистр, «ё» = «е»
function norm(s) { return String(s || "").toLowerCase().replace(/ё/g, "е"); }

// Короткий текст для таблички (если нет – полное описание)
if (typeof SHORT !== "undefined") {
  BUILDINGS.forEach(function (b) { b.short = SHORT[b.id] || b.desc; });
}

function coverSrc(b) { return b.cover || "img/miniatures/" + b.id + ".jpg"; }

// Если файла с рендером нет, картинка удаляется и остаётся цветная заглушка с буквой
function coverHTML(b, eager) {
  return '<div class="cover"><span class="ph" aria-hidden="true">' + esc(b.name.charAt(0)) + "</span>" +
    "<img " + (eager ? "" : 'loading="lazy" ') + 'src="' + esc(coverSrc(b)) + '" alt="' + esc(b.name) +
    '" onerror="this.remove()"></div>';
}

function badgeHTML(b) {
  return '<span class="badge ' + esc(b.status) + '">' + esc(STATUS_LABEL[b.status] || "") + "</span>";
}

function metaLine(b) { return [b.city, b.year].filter(Boolean).join(" · "); }

function buildingUrl(b) { return "building.html?id=" + encodeURIComponent(b.id); }

// Фото можно задавать строкой "img/x.jpg" или объектом {src, caption}
function photoList(arr) {
  return (arr || []).map(function (p) { return typeof p === "string" ? { src: p, caption: "" } : p; });
}
