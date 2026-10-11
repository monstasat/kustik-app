var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
var KEY = "kustik-pwa-v1";
var APP_VERSION = "6.6";
function storageGet(key) {
    try {
        return window.localStorage ? window.localStorage.getItem(key) : null;
    }
    catch (e) {
        return null;
    }
}
function storageSet(key, value) {
    try {
        if (!window.localStorage)
            return false;
        window.localStorage.setItem(key, value);
        return true;
    }
    catch (e) {
        return false;
    }
}
function storageRemove(key) {
    try {
        if (window.localStorage)
            window.localStorage.removeItem(key);
    }
    catch (e) { }
}
var defaultData = {
    events: [
        { title: "Найден на кустике клубники", category: "Приключение", note: "Начало истории Кустика.", date: "2026-09-21T12:00:00" },
        { title: "Небольшой скол раковины после падения", category: "Здоровье", note: "Позже восстановился.", date: "2026-09-22T18:30:00" },
        { title: "Мусорная катастрофа и спасение", category: "Приключение", note: "После спасения активно ел огурец.", date: "2026-10-01T18:00:00" }
    ],
    meals: [{ food: "🥒 Огурец", rating: 3, date: "2026-10-01T19:00:00" }],
    photos: [], checks: {}, coverPhoto: null, statusNow: "Прячется в раковине", shellStatus: "Скол восстановился",
    theme: "light",
    gameBest: 0,
    pet: {
        hunger: 88,
        moisture: 90,
        mood: 92,
        energy: 84,
        lastUpdate: Date.now(),
        log: [{ time: Date.now(), text: "Виртуальный Кустик поселился в приложении." }]
    },
    profile: { species: "Arianta arbustorum (предположительно)", age: "примерно 1–3 года", found: "2026-09-21", place: "кустик клубники на даче" },
    chapters: [
        { title: "Глава 0: Как всё началось", text: "Кустик жил на кустике клубники на даче. Потом его заметили, забрали домой — и началась совсем другая жизнь." },
        { title: "Глава 1: Новый дом", text: "Террариум, прогулки по рукам, первые наблюдения и открытие главной гастрономической страсти — огурца." },
        { title: "Глава 2: Падение", text: "После падения у Кустика появился небольшой скол на краю раковины. Он продолжал активно ползать, а скол со временем восстановился." },
        { title: "Глава 3: Девять дней тишины", text: "Кустик почти не выходил из раковины несколько дней подряд, но оставался жив и просто пережидал свой улиточный период покоя." },
        { title: "Глава 4: Мусорная катастрофа", text: "Из-за плесени содержимое террариума случайно оказалось в мусорке вместе с Кустиком. Его нашли, спасли — и после спасения он жёстко ел огурец." }
    ]
};
var clone = function () { return JSON.parse(JSON.stringify(defaultData)); };
var data = (function () {
    try {
        var x = storageGet(KEY);
        if (!x)
            return clone();
        var saved = JSON.parse(x), base = clone();
        return __assign(__assign(__assign({}, base), saved), { theme: saved.theme || base.theme, profile: __assign(__assign({}, base.profile), (saved.profile || {})), pet: __assign(__assign(__assign({}, base.pet), (saved.pet || {})), { log: Array.isArray(saved.pet && saved.pet.log) ? saved.pet.log : base.pet.log }), chapters: Array.isArray(saved.chapters) ? saved.chapters : base.chapters });
    }
    catch (_a) {
        return clone();
    }
})();
function toast(t) {
    if (t === void 0) { t = "Сохранено"; }
    var e = document.getElementById("toast");
    e.textContent = t;
    e.classList.add("show");
    setTimeout(function () { return e.classList.remove("show"); }, 1200);
}
function save() { storageSet(KEY, JSON.stringify(data)); render(); toast(); }
function fmt(x) { return new Date(x).toLocaleString("ru-RU", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }); }
function esc(s) {
    if (s === void 0) { s = ""; }
    return String(s).replace(/[&<>"']/g, function (m) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" }[m]); });
}
function renderActivity() {
    var root = document.getElementById("activityChart");
    if (!root)
        return;
    var now = new Date(), days = [];
    for (var i = 13; i >= 0; i--) {
        var d = new Date(now);
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() - i);
        days.push(d);
    }
    var vals = days.map(function (d) {
        var next = new Date(d);
        next.setDate(next.getDate() + 1);
        return data.events.filter(function (e) { return e.category === "Активность" && new Date(e.date) >= d && new Date(e.date) < next; }).length;
    });
    var max = Math.max.apply(Math, __spreadArray([1], vals, false));
    root.innerHTML = days.map(function (d, i) {
        var h = vals[i] === 0 ? 5 : Math.max(14, Math.round(vals[i] / max * 92));
        var label = (i === 0 || i === 13 || d.getDay() === 1) ? String(d.getDate()) : "";
        return "<div class=\"daybar ".concat(vals[i] === 0 ? "zero" : "", "\" title=\"").concat(d.toLocaleDateString("ru-RU"), ": ").concat(vals[i], "\"><div class=\"bar\" style=\"height:").concat(h, "px\"></div><small>").concat(label, "</small></div>");
    }).join("");
}
function renderCover() {
    var a = document.getElementById("heroAvatar"), h = document.getElementById("heroPhotoHint");
    if (data.coverPhoto) {
        a.innerHTML = "<img src=\"".concat(data.coverPhoto, "\" alt=\"\u041A\u0443\u0441\u0442\u0438\u043A\">");
        h.textContent = "Главное фото Кустика";
    }
    else {
        a.textContent = "🐌";
        h.textContent = "Добавь фото в галерею и выбери «На главную»";
    }
}
function applyTheme() {
    var dark = data.theme === "dark";
    document.body.classList.toggle("dark", dark);
    var b = document.getElementById("themeToggle");
    if (b)
        b.textContent = dark ? "☀️" : "🌙";
}
function toggleTheme() {
    data.theme = data.theme === "dark" ? "light" : "dark";
    storageSet(KEY, JSON.stringify(data));
    applyTheme();
    toast(data.theme === "dark" ? "Тёмная тема" : "Светлая тема");
}
function getAchievementCount() {
    var text = (data.events || []).map(function (e) { return (e.title + " " + (e.note || "")).toLowerCase(); }).join(" ");
    var meals = data.meals || [], photos = data.photos || [], chapters = data.chapters || [];
    var activeDays = new Set((data.events || []).filter(function (e) { return e.category === "Активность"; }).map(function (e) { return new Date(e.date).toISOString().slice(0, 10); })).size;
    return [
        true,
        meals.some(function (m) { return String(m.food).toLowerCase().includes("огур"); }),
        text.includes("скол") || text.includes("паден"),
        text.includes("мусор"),
        photos.length > 0,
        chapters.length >= 5,
        meals.length >= 10,
        activeDays >= 7
    ].filter(Boolean).length;
}
function renderLevel() {
    var activeDays = new Set((data.events || []).filter(function (e) { return e.category === "Активность"; }).map(function (e) { return new Date(e.date).toISOString().slice(0, 10); })).size;
    var petXp = Math.min(100, ((data.pet && data.pet.log) || []).length * 4);
    var xp = (data.events || []).length * 10 + (data.meals || []).length * 15 + (data.photos || []).length * 20 + (data.chapters || []).length * 25 + activeDays * 10 + getAchievementCount() * 30 + petXp;
    var level = Math.floor(xp / 100) + 1;
    var progress = xp % 100;
    var names = ["", "Новичок", "Исследователь", "Огуречный эксперт", "Герой террариума", "Легенда Кустика", "Улиточный босс"];
    levelBadge.textContent = level;
    levelName.textContent = names[Math.min(level, names.length - 1)] || "\u0423\u0440\u043E\u0432\u0435\u043D\u044C ".concat(level);
    levelText.textContent = "".concat(progress, " / 100 XP \u00B7 \u0432\u0441\u0435\u0433\u043E ").concat(xp, " XP");
    xpFill.style.width = "".concat(progress, "%");
}
function renderProfile() { var p = data.profile || {}; profileSpecies.textContent = p.species || "—"; profileAge.textContent = p.age || "—"; profileFound.textContent = p.found ? new Date(p.found + "T12:00:00").toLocaleDateString("ru-RU") : "—"; profilePlace.textContent = p.place || "—"; }
function renderStats() { var activeDays = new Set(data.events.filter(function (e) { return e.category === "Активность"; }).map(function (e) { return new Date(e.date).toISOString().slice(0, 10); })).size; statEvents.textContent = data.events.length; statMeals.textContent = data.meals.length; statPhotos.textContent = data.photos.length; statActiveDays.textContent = activeDays; }
function renderAchievements() { var text = (data.events || []).map(function (e) { return (e.title + " " + (e.note || "")).toLowerCase(); }).join(" "); var meals = data.meals || [], photos = data.photos || [], chapters = data.chapters || []; var activeDays = new Set((data.events || []).filter(function (e) { return e.category === "Активность"; }).map(function (e) { return new Date(e.date).toISOString().slice(0, 10); })).size; var cucumber = meals.some(function (m) { return String(m.food).toLowerCase().includes("огур"); }); var items = [{ icon: "🍓", title: "Начало легенды", desc: "Найден на кустике клубники", ok: true }, { icon: "🥒", title: "Огуречный фанат", desc: "Хотя бы раз ел огурец", ok: cucumber }, { icon: "🐚", title: "Крепкая раковина", desc: "Пережил падение и скол", ok: text.includes("скол") || text.includes("паден") }, { icon: "🗑️", title: "Спасён!", desc: "Пережил мусорную катастрофу", ok: text.includes("мусор") }, { icon: "📸", title: "Фотогеничный", desc: "В галерее есть хотя бы одно фото", ok: photos.length > 0 }, { icon: "📖", title: "Летописец", desc: "Пять глав истории", ok: chapters.length >= 5 }, { icon: "🍽️", title: "Гурман", desc: "Десять кормлений", ok: meals.length >= 10 }, { icon: "🔥", title: "Активист", desc: "Семь разных активных дней", ok: activeDays >= 7 }]; achievements.innerHTML = items.map(function (a) { return "<div class=\"achievement ".concat(a.ok ? "" : "locked", "\"><span class=\"badge\">").concat(a.icon, "</span><b>").concat(esc(a.title), "</b><span>").concat(esc(a.desc), "</span></div>"); }).join(""); }
function renderStory() {
    var root = document.getElementById("chapters");
    if (!root)
        return;
    var list = Array.isArray(data.chapters) ? data.chapters : [];
    root.innerHTML = list.length ? list.map(function (c, i) { return "\n    <div class=\"chapter\">\n      <div class=\"chapter-head\">\n        <div style=\"flex:1;min-width:0\">\n          <h3>".concat(esc(c.title), "</h3>\n          ").concat(c.cover ? "<img class=\"chapter-cover\" src=\"".concat(c.cover, "\" alt=\"\u041E\u0431\u043B\u043E\u0436\u043A\u0430 ").concat(esc(c.title), "\">") : "", "\n          <p>").concat(esc(c.text), "</p>\n        </div>\n        <div class=\"chapter-actions\">\n          <button class=\"secondary\" onclick=\"editChapter(").concat(i, ")\">\u270F\uFE0F</button>\n          <button class=\"danger\" onclick=\"deleteChapter(").concat(i, ")\">\uD83D\uDDD1</button>\n        </div>\n      </div>\n    </div>"); }).join("") : '<div class="empty">История пока пуста.</div>';
}
function detectBrowser() {
    var ua = navigator.userAgent || "";
    if (/YaBrowser/i.test(ua))
        return "Яндекс Браузер";
    if (/EdgA|EdgiOS|Edg\//i.test(ua))
        return "Microsoft Edge";
    if (/OPR|Opera/i.test(ua))
        return "Opera";
    if (/CriOS|Chrome/i.test(ua))
        return "Google Chrome";
    if (/Firefox|FxiOS/i.test(ua))
        return "Firefox";
    if (/Safari/i.test(ua))
        return "Safari";
    return "Другой браузер";
}
function renderCompatibility() {
    var b = document.getElementById("compatBrowser");
    var mode = document.getElementById("compatMode");
    var note = document.getElementById("compatNote");
    if (b)
        b.textContent = detectBrowser();
    var sw = ("serviceWorker" in navigator);
    var canvas = !!document.createElement("canvas").getContext;
    var storage = storageSet("__kustik_test__", "1");
    storageRemove("__kustik_test__");
    if (mode)
        mode.textContent = sw ? "PWA + браузер" : "Браузерный режим";
    if (note) {
        if (!canvas)
            note.textContent = "Этот браузер слишком старый для мини-игры, но дневник Кустика может работать.";
        else if (!storage)
            note.textContent = "Браузер запретил локальное хранилище. Сайт откроется, но записи могут не сохраняться.";
        else if (/YaBrowser/i.test(navigator.userAgent || ""))
            note.textContent = "Яндекс Браузер обнаружен. Основные функции работают; установка как PWA зависит от версии Яндекс Браузера и Android.";
    }
}
function clampPet(v) { return Math.max(0, Math.min(100, v)); }
function updatePetByTime() {
    if (!data.pet)
        data.pet = clone().pet;
    var now = Date.now();
    var last = Number(data.pet.lastUpdate) || now;
    var hours = Math.max(0, Math.min(72, (now - last) / 3600000));
    if (hours > 0.01) {
        data.pet.hunger = clampPet(Number(data.pet.hunger) - hours * 1.35);
        data.pet.moisture = clampPet(Number(data.pet.moisture) - hours * .9);
        data.pet.energy = clampPet(Number(data.pet.energy) - hours * .45);
        var stress = (data.pet.hunger < 35 ? 1.1 : 0) + (data.pet.moisture < 35 ? 1.1 : 0) + (data.pet.energy < 25 ? 0.55 : 0);
        data.pet.mood = clampPet(Number(data.pet.mood) - hours * (.18 + stress));
        data.pet.lastUpdate = now;
        storageSet(KEY, JSON.stringify(data));
    }
}
function petMeterClass(value) {
    if (value < 25)
        return "pet-fill bad";
    if (value < 50)
        return "pet-fill warn";
    return "pet-fill";
}
function petStatus() {
    var p = data.pet;
    if (p.hunger < 20)
        return { state: "Очень хочет есть", bubble: "Где… огурец?.. 🥒", face: "🐚" };
    if (p.moisture < 20)
        return { state: "Слишком сухо", bubble: "Капельку воды бы…", face: "🐚" };
    if (p.energy < 18)
        return { state: "Очень устал", bubble: "Всё. Я в домик.", face: "🐚" };
    if (p.mood < 25)
        return { state: "Немного грустит", bubble: "Сегодня я просто посижу.", face: "🐌" };
    if (p.hunger > 80 && p.moisture > 75 && p.mood > 75)
        return { state: "Чувствует себя великолепно", bubble: "Мягкий. Сочный. Легко соскабливается радулой.", face: "🐌" };
    if (p.energy < 40)
        return { state: "Хочет отдохнуть", bubble: "Ползать — тяжёлая работа.", face: "🐌" };
    return { state: "Всё нормально", bubble: "Исследую территорию.", face: "🐌" };
}
function setPetBar(id, value) {
    var bar = document.getElementById(id + "Bar");
    var txt = document.getElementById(id + "Text");
    if (!bar || !txt)
        return;
    var v = Math.round(clampPet(value));
    bar.style.width = v + "%";
    bar.className = petMeterClass(v);
    txt.textContent = v + "%";
}
function renderPet() {
    updatePetByTime();
    if (!document.getElementById("petSnail"))
        return;
    var p = data.pet, s = petStatus();
    petSnail.textContent = s.face;
    petState.textContent = s.state;
    petBubble.textContent = s.bubble;
    setPetBar("petHunger", p.hunger);
    setPetBar("petMoisture", p.moisture);
    setPetBar("petMood", p.mood);
    setPetBar("petEnergy", p.energy);
    var log = Array.isArray(p.log) ? p.log.slice().reverse().slice(0, 8) : [];
    petLog.innerHTML = log.length ? log.map(function (x) {
        return '<div class="pet-log-item"><b>' + new Date(x.time).toLocaleString("ru-RU", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }) + '</b> · ' + esc(x.text) + '</div>';
    }).join("") : '<div class="empty">Пока событий нет.</div>';
}
function petAnimate() {
    var el = document.getElementById("petSnail");
    if (!el)
        return;
    el.classList.add("bounce");
    setTimeout(function () { el.classList.remove("bounce"); }, 220);
}
function addPetLog(text) {
    if (!Array.isArray(data.pet.log))
        data.pet.log = [];
    data.pet.log.push({ time: Date.now(), text: text });
    if (data.pet.log.length > 30)
        data.pet.log = data.pet.log.slice(-30);
}
function petAction(kind) {
    updatePetByTime();
    var p = data.pet;
    if (kind === "feed") {
        p.hunger = clampPet(p.hunger + 34);
        p.moisture = clampPet(p.moisture + 5);
        p.mood = clampPet(p.mood + 7);
        addPetLog("Кустик получил огурец. Это была любовь.");
    }
    else if (kind === "mist") {
        p.moisture = clampPet(p.moisture + 32);
        p.mood = clampPet(p.mood + 4);
        addPetLog("В террариуме прошёл маленький дождь.");
    }
    else if (kind === "watch") {
        p.mood = clampPet(p.mood + 13);
        p.energy = clampPet(p.energy - 3);
        addPetLog("За Кустиком немного понаблюдали.");
    }
    else if (kind === "rest") {
        p.energy = clampPet(p.energy + 30);
        p.mood = clampPet(p.mood + 4);
        p.hunger = clampPet(p.hunger - 3);
        addPetLog("Кустик ушёл отдыхать в раковину.");
    }
    p.lastUpdate = Date.now();
    storageSet(KEY, JSON.stringify(data));
    renderPet();
    petAnimate();
    toast("Кустик доволен");
}
function render() {
    var _a, _b;
    applyTheme();
    renderCompatibility();
    renderPet();
    statusNow.textContent = data.statusNow || "—";
    shellStatus.textContent = data.shellStatus || "—";
    renderCover();
    renderActivity();
    renderProfile();
    renderStats();
    renderAchievements();
    renderLevel();
    renderStory();
    var ev = __spreadArray([], data.events, true).sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
    lastEvent.textContent = ((_a = ev[0]) === null || _a === void 0 ? void 0 : _a.title) || "—";
    var counts = {};
    data.meals.forEach(function (m) { return counts[m.food] = (counts[m.food] || 0) + (+m.rating || 1); });
    favoriteFood.textContent = ((_b = Object.entries(counts).sort(function (a, b) { return b[1] - a[1]; })[0]) === null || _b === void 0 ? void 0 : _b[0]) || "—";
    timeline.innerHTML = ev.length ? ev.map(function (e) { return "<div class=\"event\"><div class=\"event-head\"><div><strong>".concat(esc(e.title), "</strong><br><span class=\"tag\">").concat(esc(e.category), "</span></div><div class=\"date\">").concat(fmt(e.date), "</div></div>").concat(e.note ? "<div style=\"margin-top:8px\">".concat(esc(e.note), "</div>") : "", "</div>"); }).join("") : '<div class="empty">Пока событий нет.</div>';
    var ms = __spreadArray([], data.meals, true).sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
    mealList.innerHTML = ms.length ? ms.map(function (m) { return "<div class=\"meal\"><strong>".concat(esc(m.food), "</strong><div>").concat(+m.rating === 3 ? "🔥 Жёстко ел" : +m.rating === 2 ? "🙂 Немного ел" : "😐 Почти не тронул", "</div><div class=\"small\">").concat(fmt(m.date), "</div></div>"); }).join("") : '<div class="empty">Пока кормлений нет.</div>';
    gallery.innerHTML = data.photos.length ? __spreadArray([], data.photos, true).map(function (p, i) { return ({ p: p, i: i }); }).reverse().map(function (_a) {
        var p = _a.p, i = _a.i;
        return "<div class=\"photo\"><img src=\"".concat(p.src, "\" alt=\"\u041A\u0443\u0441\u0442\u0438\u043A\"><div class=\"cap\"><strong>").concat(esc(p.caption || "Кустик"), "</strong><div class=\"small\">").concat(fmt(p.date), "</div><div class=\"photo-actions\"><button class=\"secondary\" onclick=\"setCoverPhoto(").concat(i, ")\">\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</button></div></div></div>");
    }).join("") : '<div class="empty" style="grid-column:1/-1">Добавь первое фото Кустика.</div>';
    document.querySelectorAll("[data-check]").forEach(function (x) { return x.checked = !!data.checks[x.dataset.check]; });
}
function addEvent() {
    var title = eventTitle.value.trim();
    if (!title)
        return alert("Напиши, что произошло.");
    var c = eventCategory.value;
    data.events.push({ title: title, category: c, note: eventNote.value.trim(), date: new Date().toISOString() });
    if (c === "Активность")
        data.statusNow = "Активен";
    if (c === "Покой")
        data.statusNow = "Прячется в раковине";
    eventTitle.value = "";
    eventNote.value = "";
    save();
}
function quickEvent(title, category) { data.events.push({ title: title, category: category, note: "", date: new Date().toISOString() }); data.statusNow = category === "Активность" ? "Активен" : "Прячется в раковине"; save(); }
function addMeal() { var f = foodName.value.trim(); if (!f)
    return alert("Укажи еду."); data.meals.push({ food: f, rating: +foodRating.value, date: new Date().toISOString() }); foodName.value = ""; save(); }
function quickMeal(food) { data.meals.push({ food: food, rating: 3, date: new Date().toISOString() }); data.events.push({ title: "Жёстко ел огурец", category: "Активность", note: "", date: new Date().toISOString() }); data.statusNow = "Активен"; save(); }
function addPhoto() {
    return __awaiter(this, void 0, void 0, function () {
        var f, src;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    f = photoInput.files[0];
                    if (!f)
                        return [2 /*return*/, alert("Выбери фото.")];
                    return [4 /*yield*/, compressImage(f, 1200, .78)];
                case 1:
                    src = _a.sent();
                    data.photos.push({ src: src, caption: photoCaption.value.trim(), date: new Date().toISOString() });
                    photoInput.value = "";
                    photoCaption.value = "";
                    save();
                    return [2 /*return*/];
            }
        });
    });
}
function toggleProfileEditor(force) { var open = typeof force === "boolean" ? force : profileEditor.classList.contains("hidden"); profileEditor.classList.toggle("hidden", !open); if (open) {
    var p = data.profile || {};
    editSpecies.value = p.species || "";
    editAge.value = p.age || "";
    editFound.value = p.found || "";
    editPlace.value = p.place || "";
} }
function saveProfile() { data.profile = { species: editSpecies.value.trim(), age: editAge.value.trim(), found: editFound.value, place: editPlace.value.trim() }; toggleProfileEditor(false); save(); toast("Профиль обновлён"); }
var pendingChapterCover = null;
function compressImage(file, maxSize, quality) {
    if (maxSize === void 0) { maxSize = 1000; }
    if (quality === void 0) { quality = .78; }
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () {
            var img = new Image();
            img.onload = function () {
                var w = img.width, h = img.height;
                var scale = Math.min(1, maxSize / Math.max(w, h));
                w = Math.round(w * scale);
                h = Math.round(h * scale);
                var canvas = document.createElement("canvas");
                canvas.width = w;
                canvas.height = h;
                canvas.getContext("2d").drawImage(img, 0, 0, w, h);
                resolve(canvas.toDataURL("image/jpeg", quality));
            };
            img.onerror = reject;
            img.src = reader.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
chapterCoverInput.addEventListener("change", function (e) { return __awaiter(_this, void 0, void 0, function () {
    var f;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                f = e.target.files[0];
                if (!f)
                    return [2 /*return*/];
                return [4 /*yield*/, compressImage(f, 1200, .78)];
            case 1:
                pendingChapterCover = _a.sent();
                chapterCoverPreview.src = pendingChapterCover;
                chapterCoverPreview.classList.remove("hidden");
                removeChapterCover.classList.remove("hidden");
                return [2 /*return*/];
        }
    });
}); });
function clearChapterCover() {
    pendingChapterCover = "";
    chapterCoverInput.value = "";
    chapterCoverPreview.src = "";
    chapterCoverPreview.classList.add("hidden");
    removeChapterCover.classList.add("hidden");
}
function saveChapter() {
    return __awaiter(this, void 0, void 0, function () {
        var title, text, i, old;
        return __generator(this, function (_a) {
            title = chapterTitle.value.trim(), text = chapterText.value.trim();
            if (!title)
                return [2 /*return*/, alert("Напиши название главы.")];
            if (!text)
                return [2 /*return*/, alert("Напиши текст главы.")];
            i = +chapterEditIndex.value;
            if (i >= 0 && data.chapters[i]) {
                old = data.chapters[i];
                data.chapters[i] = { title: title, text: text, cover: pendingChapterCover === null ? (old.cover || null) : pendingChapterCover || null };
            }
            else {
                data.chapters.push({ title: title, text: text, cover: pendingChapterCover || null });
            }
            cancelChapterEdit(false);
            save();
            toast(i >= 0 ? "Глава обновлена" : "Глава добавлена");
            return [2 /*return*/];
        });
    });
}
function editChapter(i) {
    var c = data.chapters[i];
    if (!c)
        return;
    chapterEditIndex.value = String(i);
    chapterTitle.value = c.title;
    chapterText.value = c.text;
    pendingChapterCover = c.cover || null;
    chapterCoverInput.value = "";
    if (c.cover) {
        chapterCoverPreview.src = c.cover;
        chapterCoverPreview.classList.remove("hidden");
        removeChapterCover.classList.remove("hidden");
    }
    else {
        chapterCoverPreview.src = "";
        chapterCoverPreview.classList.add("hidden");
        removeChapterCover.classList.add("hidden");
    }
    chapterFormTitle.textContent = "Редактировать главу";
    cancelChapterEdit.classList.remove("hidden");
    chapterTitle.scrollIntoView({ behavior: "smooth", block: "center" });
}
function cancelChapterEdit(clear) {
    if (clear === void 0) { clear = true; }
    chapterEditIndex.value = "-1";
    chapterTitle.value = "";
    chapterText.value = "";
    chapterFormTitle.textContent = "Новая глава";
    pendingChapterCover = null;
    chapterCoverInput.value = "";
    chapterCoverPreview.src = "";
    chapterCoverPreview.classList.add("hidden");
    removeChapterCover.classList.add("hidden");
    cancelChapterEdit.classList.add("hidden");
}
function deleteChapter(i) {
    if (!data.chapters[i])
        return;
    if (!confirm("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u00AB".concat(data.chapters[i].title, "\u00BB?")))
        return;
    data.chapters.splice(i, 1);
    save();
    toast("Глава удалена");
}
function setCoverPhoto(i) { var _a; data.coverPhoto = ((_a = data.photos[i]) === null || _a === void 0 ? void 0 : _a.src) || null; save(); toast("Фото на главной"); }
function exportData() { var b = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }), a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "kustik-backup.json"; a.click(); setTimeout(function () { return URL.revokeObjectURL(a.href); }, 1000); }
importFile.addEventListener("change", function (e) { var f = e.target.files[0]; if (!f)
    return; var r = new FileReader(); r.onload = function () { try {
    data = __assign(__assign({}, clone()), JSON.parse(r.result));
    save();
}
catch (_a) {
    alert("Не удалось прочитать файл.");
} }; r.readAsText(f); });
function resetData() { if (confirm("Сбросить все данные?")) {
    storageRemove(KEY);
    data = clone();
    save();
} }
document.querySelectorAll(".nav button").forEach(function (b) { return b.onclick = function () { document.querySelectorAll(".nav button").forEach(function (x) { return x.classList.remove("active"); }); b.classList.add("active"); document.querySelectorAll(".screen").forEach(function (x) { return x.classList.remove("active"); }); document.getElementById(b.dataset.tab).classList.add("active"); scrollTo({ top: 0, behavior: "smooth" }); }; });
document.querySelectorAll("[data-check]").forEach(function (x) { return x.onchange = function () { data.checks[x.dataset.check] = x.checked; save(); }; });
// ===== Кустик: путь к огурцу =====
var gameCanvas = document.getElementById("kustikGame");
var gameCtx = gameCanvas.getContext("2d");
var gameOverlay = document.getElementById("gameOverlay");
var shellButton = document.getElementById("shellButton");
var gameRunning = false, gamePaused = false, gameHidden = false, gameScoreValue = 0, gameLivesValue = 3, gameShieldValue = 0, gameWon = false;
var gameLast = 0, gameSpawn = 0, gameBirdTimer = 0, gameFlash = 0, gameSpeed = 215;
var gameObjects = [], gameParticles = [];
var SNAIL_GROUND_Y = 305;
var snail = { x: 110, y: SNAIL_GROUND_Y, w: 74, h: 48, vy: 0, jumping: false };
function syncGameHud() {
    gameScore.textContent = gameScoreValue;
    gameBest.textContent = data.gameBest || 0;
    gameLives.textContent = gameLivesValue;
    gameShield.textContent = gameShieldValue;
    gameStage.textContent = getGameStage().name;
}
function rand(a, b) { return a + Math.random() * (b - a); }
function resetGameWorld() {
    gameObjects = [];
    gameParticles = [];
    gameSpawn = 0;
    gameBirdTimer = 0;
    gameFlash = 0;
    gameSpeed = 215;
    gameScoreValue = 0;
    gameLivesValue = 3;
    gameShieldValue = 0;
    gameWon = false;
    gameHidden = false;
    snail.y = SNAIL_GROUND_Y;
    snail.vy = 0;
    snail.jumping = false;
    shellButton.classList.remove("active");
    syncGameHud();
}
function startKustikGame() {
    resetGameWorld();
    gameRunning = true;
    gamePaused = false;
    gameOverlay.classList.add("hidden");
    gameLast = performance.now();
    requestAnimationFrame(gameLoop);
}
function endKustikGame() {
    gameRunning = false;
    if (gameScoreValue > (data.gameBest || 0)) {
        data.gameBest = gameScoreValue;
        localStorage.setItem(KEY, JSON.stringify(data));
    }
    syncGameHud();
    gameOverlayTitle.textContent = "Забег окончен";
    gameOverlayText.innerHTML = "\u041A\u0443\u0441\u0442\u0438\u043A \u0441\u043E\u0431\u0440\u0430\u043B <b>".concat(gameScoreValue, "</b> \u043E\u0433\u0443\u0440\u0435\u0447\u043D\u044B\u0445 \u043E\u0447\u043A\u043E\u0432.<br>").concat(gameScoreValue >= 80 ? "Великий огуречный пир состоялся." : "Огурец ещё где-то впереди.");
    gameOverlay.querySelector("button").textContent = "Ещё раз";
    gameOverlay.classList.remove("hidden");
}
function toggleGamePause() {
    if (!gameRunning)
        return;
    gamePaused = !gamePaused;
    if (!gamePaused) {
        gameLast = performance.now();
        requestAnimationFrame(gameLoop);
    }
    else {
        drawGame();
    }
}
function jumpKustik() {
    if (!gameRunning || gamePaused || gameHidden || snail.jumping)
        return;
    snail.jumping = true;
    snail.vy = -610;
}
function setShell(v) {
    gameHidden = !!v;
    shellButton.classList.toggle("active", gameHidden);
}
function bindHoldControl(el) {
    if (!el)
        return;
    if (window.PointerEvent) {
        el.addEventListener("pointerdown", function (e) { e.preventDefault(); setShell(true); });
        ["pointerup", "pointercancel", "pointerleave"].forEach(function (t) {
            el.addEventListener(t, function () { setShell(false); });
        });
    }
    else {
        el.addEventListener("touchstart", function (e) { e.preventDefault(); setShell(true); }, { passive: false });
        ["touchend", "touchcancel"].forEach(function (t) {
            el.addEventListener(t, function () { setShell(false); });
        });
        el.addEventListener("mousedown", function (e) { e.preventDefault(); setShell(true); });
        ["mouseup", "mouseleave"].forEach(function (t) {
            el.addEventListener(t, function () { setShell(false); });
        });
    }
}
bindHoldControl(shellButton);
bindHoldControl(gameCanvas);
function getGameStage() {
    if (gameScoreValue >= 80)
        return { name: "Мусорная катастрофа", speed: 1.18, bird: 2600, trash: true };
    if (gameScoreValue >= 40)
        return { name: "Сад опасностей", speed: 1.09, bird: 3300, trash: false };
    return { name: "Клубничная грядка", speed: 1, bird: 4300, trash: false };
}
function winKustikGame() {
    if (!gameRunning || gameWon)
        return;
    gameWon = true;
    gameRunning = false;
    if (gameScoreValue > (data.gameBest || 0)) {
        data.gameBest = gameScoreValue;
        localStorage.setItem(KEY, JSON.stringify(data));
    }
    syncGameHud();
    gameOverlayTitle.textContent = "ПОБЕДА!";
    gameOverlayText.innerHTML = "\u041A\u0443\u0441\u0442\u0438\u043A \u0434\u043E\u0431\u0440\u0430\u043B\u0441\u044F \u0434\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u043E\u0433\u0443\u0440\u0446\u0430 \u0441 <b>".concat(gameScoreValue, "</b> \u043E\u0447\u043A\u0430\u043C\u0438.<br><br>\u041C\u044F\u0433\u043A\u0438\u0439. \u0421\u043E\u0447\u043D\u044B\u0439. \u041B\u0435\u0433\u043A\u043E \u0441\u043E\u0441\u043A\u0430\u0431\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0434\u0443\u043B\u043E\u0439.<br><b>\u042D\u0442\u043E \u0431\u044B\u043B\u0430 \u043B\u044E\u0431\u043E\u0432\u044C.</b>");
    gameOverlay.querySelector("button").textContent = "Играть снова";
    gameOverlay.classList.remove("hidden");
}
function spawnGameObject() {
    var r = Math.random(), stage = getGameStage();
    if (r < .49) {
        gameObjects.push({ type: "cucumber", x: 700, y: 292, w: 46, h: 34, v: gameSpeed });
    }
    else if (r < .66) {
        gameObjects.push({ type: "water", x: 700, y: 250, w: 34, h: 40, v: gameSpeed });
    }
    else if (r < .74) {
        gameObjects.push({ type: "calcium", x: 700, y: 270, w: 40, h: 30, v: gameSpeed });
    }
    else if (stage.trash && r > .91) {
        gameObjects.push({ type: "trash", x: 700, y: 278, w: 54, h: 64, v: gameSpeed * 1.02 });
    }
    else {
        gameObjects.push({ type: "rock", x: 700, y: 306, w: 42, h: 36, v: gameSpeed });
    }
}
function spawnBird() {
    gameObjects.push({ type: "birdWarn", x: 540, y: 65, w: 70, h: 50, v: 0, life: 700 });
}
function burst(x, y, kind) {
    for (var i = 0; i < 7; i++)
        gameParticles.push({ x: x, y: y, vx: rand(-55, 55), vy: rand(-90, -25), life: 650, kind: kind });
}
function rectHit(a, b, pad) {
    if (pad === void 0) { pad = 0; }
    return a.x + pad < b.x + b.w && a.x + a.w - pad > b.x && a.y + pad < b.y + b.h && a.y + a.h - pad > b.y;
}
function hitPlayer(obj) {
    if (gameFlash > 0)
        return;
    if (gameShieldValue > 0) {
        gameShieldValue = 0;
        gameFlash = 450;
        burst(snail.x + 40, snail.y + 15, "shield");
        syncGameHud();
        return;
    }
    gameLivesValue--;
    gameFlash = 900;
    burst(snail.x + 40, snail.y + 15, "hit");
    syncGameHud();
    if (gameLivesValue <= 0)
        endKustikGame();
}
function updateGame(dt) {
    if (!gameRunning || gamePaused)
        return;
    var stage = getGameStage();
    gameSpeed = Math.min(370, (215 + gameScoreValue * .55) * stage.speed);
    gameSpawn -= dt;
    gameBirdTimer -= dt;
    gameFlash = Math.max(0, gameFlash - dt);
    // Jump physics
    if (snail.jumping) {
        snail.vy += 1500 * dt / 1000;
        snail.y += snail.vy * dt / 1000;
        if (snail.y >= SNAIL_GROUND_Y) {
            snail.y = SNAIL_GROUND_Y;
            snail.vy = 0;
            snail.jumping = false;
        }
    }
    if (gameSpawn <= 0) {
        spawnGameObject();
        gameSpawn = rand(650, 1050);
    }
    if (gameBirdTimer <= 0 && gameScoreValue >= 10) {
        spawnBird();
        gameBirdTimer = rand(stage.bird, stage.bird + 1800);
    }
    var snailBox = { x: snail.x + 10, y: snail.y + 8, w: snail.w - 20, h: snail.h - 12 };
    for (var _i = 0, gameObjects_1 = gameObjects; _i < gameObjects_1.length; _i++) {
        var o = gameObjects_1[_i];
        if (o.type === "birdWarn") {
            o.life -= dt;
            if (o.life <= 0) {
                o.type = "bird";
                o.x = 720;
                o.y = 115;
                o.w = 90;
                o.h = 55;
                o.v = 510;
                delete o.life;
            }
            continue;
        }
        o.x -= o.v * dt / 1000;
        if (o.type === "bird")
            o.y += 65 * dt / 1000;
        if (!o.hit && rectHit(snailBox, o, 7)) {
            if (o.type === "cucumber") {
                if (!gameHidden) {
                    o.hit = true;
                    gameScoreValue += 10;
                    burst(o.x, o.y, "cucumber");
                    syncGameHud();
                }
            }
            else if (o.type === "water") {
                if (!gameHidden) {
                    o.hit = true;
                    gameScoreValue += 5;
                    burst(o.x, o.y, "water");
                    syncGameHud();
                }
            }
            else if (o.type === "calcium") {
                if (!gameHidden) {
                    o.hit = true;
                    gameShieldValue = 1;
                    gameScoreValue += 2;
                    burst(o.x, o.y, "shield");
                    syncGameHud();
                }
            }
            else if (o.type === "rock" || o.type === "trash") {
                o.hit = true;
                hitPlayer(o);
            }
            else if (o.type === "bird") {
                o.hit = true;
                if (gameHidden) {
                    burst(snail.x + 40, snail.y, "shell");
                    gameScoreValue += 3;
                    syncGameHud();
                }
                else
                    hitPlayer(o);
            }
        }
    }
    gameObjects = gameObjects.filter(function (o) { return !o.hit && o.x > -130 && (o.life === undefined || o.life > 0); });
    for (var _a = 0, gameParticles_1 = gameParticles; _a < gameParticles_1.length; _a++) {
        var p = gameParticles_1[_a];
        p.life -= dt;
        p.x += p.vx * dt / 1000;
        p.y += p.vy * dt / 1000;
        p.vy += 150 * dt / 1000;
    }
    gameParticles = gameParticles.filter(function (p) { return p.life > 0; });
    if (gameScoreValue >= 120)
        winKustikGame();
}
function roundRectPath(c, x, y, w, h, r) {
    var rr = Math.min(r, w / 2, h / 2);
    c.beginPath();
    c.moveTo(x + rr, y);
    c.arcTo(x + w, y, x + w, y + h, rr);
    c.arcTo(x + w, y + h, x, y + h, rr);
    c.arcTo(x, y + h, x, y, rr);
    c.arcTo(x, y, x + w, y, rr);
    c.closePath();
}
function drawLeaf(c, x, y, s, rot) {
    if (rot === void 0) { rot = 0; }
    c.save();
    c.translate(x, y);
    c.rotate(rot);
    c.fillStyle = "#4f9a55";
    c.beginPath();
    c.ellipse(0, 0, s * 1.15, s * .55, 0, 0, Math.PI * 2);
    c.fill();
    c.strokeStyle = "#2f6e36";
    c.lineWidth = Math.max(1, s * .12);
    c.beginPath();
    c.moveTo(-s, 0);
    c.lineTo(s, 0);
    c.stroke();
    c.restore();
}
function drawCucumber(c, x, y, w, h) {
    c.save();
    roundRectPath(c, x, y, w, h, h * .45);
    c.fillStyle = "#4ba45b";
    c.fill();
    c.strokeStyle = "#2d753a";
    c.lineWidth = 3;
    c.stroke();
    c.fillStyle = "#8fd18d";
    for (var i = 0; i < 5; i++) {
        c.beginPath();
        c.arc(x + 9 + i * (w - 18) / 4, y + h * .35 + (i % 2) * 5, 2.2, 0, Math.PI * 2);
        c.fill();
    }
    c.restore();
}
function drawWater(c, x, y, w, h) {
    c.save();
    c.translate(x + w / 2, y + h / 2);
    c.fillStyle = "#51aee8";
    c.strokeStyle = "#2479b5";
    c.lineWidth = 2.5;
    c.beginPath();
    c.moveTo(0, -h * .48);
    c.bezierCurveTo(w * .36, -h * .05, w * .43, h * .18, 0, h * .47);
    c.bezierCurveTo(-w * .43, h * .18, -w * .36, -h * .05, 0, -h * .48);
    c.closePath();
    c.fill();
    c.stroke();
    c.fillStyle = "rgba(255,255,255,.65)";
    c.beginPath();
    c.ellipse(-w * .1, -h * .12, w * .08, h * .14, -.5, 0, Math.PI * 2);
    c.fill();
    c.restore();
}
function drawRock(c, x, y, w, h) {
    c.save();
    c.fillStyle = "#7e7b73";
    c.strokeStyle = "#55534f";
    c.lineWidth = 3;
    c.beginPath();
    c.moveTo(x + 5, y + h);
    c.lineTo(x + w * .18, y + h * .28);
    c.lineTo(x + w * .55, y + 3);
    c.lineTo(x + w * .9, y + h * .32);
    c.lineTo(x + w - 2, y + h);
    c.closePath();
    c.fill();
    c.stroke();
    c.fillStyle = "#a4a19a";
    c.beginPath();
    c.arc(x + w * .54, y + h * .3, 4, 0, Math.PI * 2);
    c.fill();
    c.restore();
}
function drawCalcium(c, x, y, w, h) {
    c.save();
    c.fillStyle = "#f7f2df";
    c.strokeStyle = "#c8bea2";
    c.lineWidth = 3;
    c.beginPath();
    c.ellipse(x + w / 2, y + h / 2, w * .46, h * .38, -.18, 0, Math.PI * 2);
    c.fill();
    c.stroke();
    c.strokeStyle = "#ddd4bb";
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(x + w * .25, y + h * .55);
    c.quadraticCurveTo(x + w * .5, y + h * .22, x + w * .78, y + h * .48);
    c.stroke();
    c.restore();
}
function drawTrash(c, x, y, w, h) {
    c.save();
    c.fillStyle = "#68777a";
    c.strokeStyle = "#3f4c4f";
    c.lineWidth = 3;
    roundRectPath(c, x + 6, y + 10, w - 12, h - 10, 6);
    c.fill();
    c.stroke();
    c.fillStyle = "#4d5a5d";
    roundRectPath(c, x, y + 3, w, 12, 5);
    c.fill();
    c.strokeStyle = "#91a0a3";
    c.lineWidth = 2;
    for (var i = 1; i < 4; i++) {
        c.beginPath();
        c.moveTo(x + 10 + i * 9, y + 20);
        c.lineTo(x + 10 + i * 9, y + h - 8);
        c.stroke();
    }
    c.restore();
}
function drawBird(c, x, y, w, h) {
    c.save();
    c.translate(x + w / 2, y + h / 2);
    c.fillStyle = "#3b4a52";
    c.strokeStyle = "#26333a";
    c.lineWidth = 2.5;
    c.beginPath();
    c.ellipse(0, 4, w * .28, h * .24, -.1, 0, Math.PI * 2);
    c.fill();
    c.stroke();
    c.beginPath();
    c.arc(w * .22, -h * .06, h * .14, 0, Math.PI * 2);
    c.fill();
    c.stroke();
    c.fillStyle = "#e0a530";
    c.beginPath();
    c.moveTo(w * .34, -h * .08);
    c.lineTo(w * .47, -h * .02);
    c.lineTo(w * .34, h * .02);
    c.closePath();
    c.fill();
    c.fillStyle = "#fff";
    c.beginPath();
    c.arc(w * .25, -h * .09, 3.2, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = "#111";
    c.beginPath();
    c.arc(w * .26, -h * .09, 1.5, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = "#657983";
    c.beginPath();
    c.moveTo(-w * .1, 0);
    c.quadraticCurveTo(-w * .42, -h * .35, -w * .15, h * .18);
    c.closePath();
    c.fill();
    c.restore();
}
function drawSnail(c, x, y, hidden, flash) {
    if (hidden === void 0) { hidden = false; }
    if (flash === void 0) { flash = false; }
    c.save();
    if (flash)
        c.globalAlpha = .35;
    if (hidden) {
        c.fillStyle = "#8a5a3b";
        c.strokeStyle = "#5d3c29";
        c.lineWidth = 4;
        c.beginPath();
        c.arc(x + 37, y + 25, 24, 0, Math.PI * 2);
        c.fill();
        c.stroke();
        c.strokeStyle = "#d9b07c";
        c.lineWidth = 3;
        c.beginPath();
        c.arc(x + 37, y + 25, 13, .4, Math.PI * 2.2);
        c.stroke();
        c.restore();
        return;
    }
    c.fillStyle = "#c9b16f";
    roundRectPath(c, x + 8, y + 31, 62, 14, 7);
    c.fill();
    c.beginPath();
    c.arc(x + 67, y + 30, 12, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = "#8a5a3b";
    c.strokeStyle = "#5d3c29";
    c.lineWidth = 4;
    c.beginPath();
    c.arc(x + 36, y + 25, 22, 0, Math.PI * 2);
    c.fill();
    c.stroke();
    c.strokeStyle = "#d9b07c";
    c.lineWidth = 3;
    c.beginPath();
    c.arc(x + 36, y + 25, 12, .3, Math.PI * 2.2);
    c.stroke();
    c.strokeStyle = "#7a6a46";
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(x + 71, y + 21);
    c.lineTo(x + 74, y + 8);
    c.moveTo(x + 64, y + 20);
    c.lineTo(x + 61, y + 8);
    c.stroke();
    c.fillStyle = "#222";
    c.beginPath();
    c.arc(x + 74, y + 7, 2.8, 0, Math.PI * 2);
    c.arc(x + 61, y + 7, 2.8, 0, Math.PI * 2);
    c.fill();
    c.restore();
}
function drawParticle(c, p) {
    c.save();
    if (p.kind === "cucumber") {
        c.fillStyle = "#55a85f";
        c.beginPath();
        c.arc(p.x, p.y, 5, 0, Math.PI * 2);
        c.fill();
    }
    else if (p.kind === "water") {
        c.fillStyle = "#55b7ef";
        c.beginPath();
        c.arc(p.x, p.y, 4, 0, Math.PI * 2);
        c.fill();
    }
    else if (p.kind === "hit") {
        c.strokeStyle = "#e35a4f";
        c.lineWidth = 3;
        c.beginPath();
        c.moveTo(p.x - 5, p.y - 5);
        c.lineTo(p.x + 5, p.y + 5);
        c.moveTo(p.x + 5, p.y - 5);
        c.lineTo(p.x - 5, p.y + 5);
        c.stroke();
    }
    else if (p.kind === "shield") {
        c.strokeStyle = "#f1e8b7";
        c.lineWidth = 3;
        c.beginPath();
        c.arc(p.x, p.y, 6, 0, Math.PI * 2);
        c.stroke();
    }
    else {
        c.strokeStyle = "#d3b37b";
        c.lineWidth = 3;
        c.beginPath();
        c.arc(p.x, p.y, 5, 0, Math.PI * 2);
        c.stroke();
    }
    c.restore();
}
function drawGame() {
    var c = gameCtx, w = gameCanvas.width, h = gameCanvas.height;
    c.clearRect(0, 0, w, h);
    var grd = c.createLinearGradient(0, 0, 0, h);
    grd.addColorStop(0, document.body.classList.contains("dark") ? "#1f3440" : "#cfeeff");
    grd.addColorStop(.72, document.body.classList.contains("dark") ? "#314631" : "#e6f3cf");
    grd.addColorStop(.721, document.body.classList.contains("dark") ? "#6a5037" : "#b88957");
    grd.addColorStop(1, document.body.classList.contains("dark") ? "#4c3827" : "#8a623d");
    c.fillStyle = grd;
    c.fillRect(0, 0, w, h);
    // sun/clouds
    c.fillStyle = document.body.classList.contains("dark") ? "#d9e3e9" : "#ffe58a";
    c.beginPath();
    c.arc(590, 72, 31, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = "rgba(255,255,255,.72)";
    [[105, 70], [145, 86], [425, 55]].forEach(function (_a) {
        var x = _a[0], y = _a[1];
        c.beginPath();
        c.arc(x, y, 20, 0, Math.PI * 2);
        c.arc(x + 24, y - 7, 26, 0, Math.PI * 2);
        c.arc(x + 52, y, 20, 0, Math.PI * 2);
        c.fill();
    });
    // plants / strawberry scenery
    drawLeaf(c, 38, 300, 22, -.4);
    drawLeaf(c, 60, 301, 19, .45);
    drawLeaf(c, 360, 304, 20, -.25);
    drawLeaf(c, 386, 305, 18, .3);
    c.fillStyle = "#d84949";
    c.beginPath();
    c.arc(615, 288, 10, 0, Math.PI * 2);
    c.fill();
    drawLeaf(c, 611, 277, 7, -.2);
    drawLeaf(c, 620, 277, 7, .3);
    // Ground shadow makes the jump height obvious
    c.save();
    var jumpHeight = Math.max(0, SNAIL_GROUND_Y - snail.y);
    c.globalAlpha = Math.max(.12, .28 - jumpHeight / 500);
    c.fillStyle = "#3d2c1f";
    c.beginPath();
    c.ellipse(snail.x + 40, SNAIL_GROUND_Y + 45, 30 - Math.min(12, jumpHeight * .04), 7, 0, 0, Math.PI * 2);
    c.fill();
    c.restore();
    if (gameShieldValue > 0) {
        c.save();
        c.strokeStyle = "rgba(245,240,205,.95)";
        c.lineWidth = 5;
        c.beginPath();
        c.ellipse(snail.x + 40, snail.y + 26, 48, 36, 0, 0, Math.PI * 2);
        c.stroke();
        c.restore();
    }
    drawSnail(c, snail.x, snail.y, gameHidden, gameFlash > 0 && Math.floor(gameFlash / 100) % 2 === 0);
    for (var _i = 0, gameObjects_2 = gameObjects; _i < gameObjects_2.length; _i++) {
        var o = gameObjects_2[_i];
        if (o.type === "cucumber")
            drawCucumber(c, o.x, o.y, o.w, o.h);
        if (o.type === "water")
            drawWater(c, o.x, o.y, o.w, o.h);
        if (o.type === "calcium")
            drawCalcium(c, o.x, o.y, o.w, o.h);
        if (o.type === "rock")
            drawRock(c, o.x, o.y, o.w, o.h);
        if (o.type === "trash")
            drawTrash(c, o.x, o.y, o.w, o.h);
        if (o.type === "birdWarn") {
            c.save();
            c.fillStyle = "#b43b34";
            c.font = "bold 23px system-ui";
            c.fillText("⚠ ПТИЦА!", o.x, o.y + 24);
            c.restore();
        }
        if (o.type === "bird")
            drawBird(c, o.x, o.y, o.w, o.h);
    }
    for (var _a = 0, gameParticles_2 = gameParticles; _a < gameParticles_2.length; _a++) {
        var p = gameParticles_2[_a];
        c.globalAlpha = Math.max(0, p.life / 650);
        drawParticle(c, p);
    }
    c.globalAlpha = 1;
    if (gamePaused) {
        c.fillStyle = "rgba(0,0,0,.35)";
        c.fillRect(0, 0, w, h);
        c.fillStyle = "#fff";
        c.font = "bold 36px system-ui";
        c.textAlign = "center";
        c.fillText("ПАУЗА", w / 2, h / 2);
        c.textAlign = "left";
    }
}
function gameLoop(t) {
    if (!gameRunning || gamePaused)
        return;
    var dt = Math.min(40, t - gameLast);
    gameLast = t;
    updateGame(dt);
    drawGame();
    if (gameRunning && !gamePaused)
        requestAnimationFrame(gameLoop);
}
window.addEventListener("keydown", function (e) {
    if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jumpKustik();
    }
    if (e.code === "ArrowDown") {
        e.preventDefault();
        setShell(true);
    }
});
window.addEventListener("keyup", function (e) {
    if (e.code === "ArrowDown")
        setShell(false);
});
syncGameHud();
drawGame();
if ("serviceWorker" in navigator) {
    var reloadingForUpdate = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
        if (reloadingForUpdate)
            return;
        reloadingForUpdate = true;
        location.reload();
    });
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./sw.js?v=6.6", { updateViaCache: "none" })
            .then(function (reg) {
            try {
                reg.update();
            }
            catch (e) { }
            if (reg.waiting)
                reg.waiting.postMessage({ type: "SKIP_WAITING" });
            if (reg.installing) {
                reg.installing.addEventListener("statechange", function () {
                    if (reg.installing && reg.installing.state === "installed" && navigator.serviceWorker.controller) {
                        reg.installing.postMessage({ type: "SKIP_WAITING" });
                    }
                });
            }
            setInterval(function () { try {
                reg.update();
            }
            catch (e) { } }, 60000);
        })
            .catch(function () { });
    });
}
render();
