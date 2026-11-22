// ============================================================
// ДАННЫЕ САЙТА. Здесь меняются тексты, фото и варианты голосования.
// ============================================================

// Ссылка на Google Форму для голосования (необязательно).
// Если оставить пустой строкой, голосование работает только в браузере
// (результаты видны одному человеку, как демо). Для общего счёта вставьте ссылку на форму.
const VOTE_FORM_URL = "";

// Карта (раздел «Как добраться»): у здания задаются lat, lon (координаты) и address (адрес).
// Если lat и lon нет, раздел на странице здания не показывается.
// Фото: положите файлы в папку img/ и впишите пути в photos / archive.
// Рендер миниатюры: img/miniatures/<id>.jpg (подхватится автоматически).
// Пример: photos: ["img/mirsky/1.jpg", "img/mirsky/2.jpg"]
const BUILDINGS = [
  { id: "sobor-iosifa", name: "Собор Святого Иосифа", city: "Могилёв", status: "lost", year: "1780",
    style: "Классицизм",
    desc: "Храм Иосифа Обручника заложен в мае 1780 года в присутствии Екатерины II. Построен по проекту Н. Львова в стиле классицизма: портик, скромность и строгость форм. Здание не сохранилось.",
    photos: [
      "img/sobor-iosifa/1.jpg", "img/sobor-iosifa/2.jpg", "img/sobor-iosifa/3.jpg", "img/sobor-iosifa/4.jpg"
    ],
    archive: [
      "img/sobor-iosifa/old1.jpg", "img/sobor-iosifa/old2.jpg"
    ] },
  { id: "pipenberg", name: "Усадьба Пипенберг", city: "Могилёв", status: "lost", year: "конец XVIII – начало XIX в.",
    style: "Классицизм",
    desc: "Один из шедевров садово-паркового искусства конца XVIII – начала XIX века. Центром усадьбы был трёхэтажный дворец в стиле классицизма. До наших дней дошёл только фундамент, заросший кустарником.",
    photos: [
      "img/pipenberg/1.jpg", "img/pipenberg/2.jpg", "img/pipenberg/3.jpg", "img/pipenberg/4.jpg"
    ],
    archive: [
      "img/pipenberg/old1.jpg", "img/pipenberg/old2.jpg"
    ] },
  { id: "uspenskaya-cerkov", name: "Свято-Успенская церковь", city: "Могилёв", status: "lost", year: "1670",
    style: "Барокко",
    desc: "Православный храм, построенный в 1670 году на юго-восточной окраине города недалеко от Днепра, в комплексе с тёплой церковью и колокольней. Существовал до начала XX века, в 1950-х годах снесён.",
    photos: [
      "img/uspenskaya-cerkov/1.jpg", "img/uspenskaya-cerkov/2.jpg", "img/uspenskaya-cerkov/3.jpg", "img/uspenskaya-cerkov/4.jpg"
    ],
    archive: [
      "img/uspenskaya-cerkov/old1.jpg", "img/uspenskaya-cerkov/old2.jpg"
    ] },
  { id: "gubernskoe-pravlenie", name: "Губернское правление", city: "Могилёв", status: "lost", year: "",
    style: "",
    desc: "Двухэтажное каменное казённое здание. Рядом стояли квартира губернатора, соединённая палата и губернское казначейство, а также городская площадь. Здание разрушено в 1944 году.",
    photos: [
      "img/gubernskoe-pravlenie/1.jpg", "img/gubernskoe-pravlenie/2.jpg", "img/gubernskoe-pravlenie/3.jpg", "img/gubernskoe-pravlenie/4.jpg"
    ],
    archive: [
      "img/gubernskoe-pravlenie/old1.jpg", "img/gubernskoe-pravlenie/old2.jpg"
    ] },
  { id: "duhovnaya-seminariya", name: "Духовная семинария", city: "Могилёв", status: "lost", year: "1780–1785",
    style: "",
    desc: "Учебный корпус возведён в 1780–1785 годах по проекту архитектора Н. А. Львова вдоль земляного вала. Становление семинарии пришлось на один из самых тяжёлых периодов истории Беларуси. Закрыта в 1918 году.",
    photos: [
      "img/duhovnaya-seminariya/1.jpg", "img/duhovnaya-seminariya/2.jpg", "img/duhovnaya-seminariya/3.jpg", "img/duhovnaya-seminariya/4.jpg"
    ],
    archive: [
      "img/duhovnaya-seminariya/old1.jpg", "img/duhovnaya-seminariya/old2.jpg"
    ] },
  { id: "spassky-sobor", name: "Спасский собор", city: "Могилёв", status: "lost", year: "1447 (первое упоминание)",
    style: "",
    desc: "Первое упоминание монастыря относится к 1447 году. После пожара в 1654 году построен деревянный храм, в 1748 году возведена каменная церковь, восстановленная в 1762 году после очередного пожара. Спасский собор монастыря был уничтожен.",
    photos: [
      "img/spassky-sobor/1.jpg", "img/spassky-sobor/2.jpg", "img/spassky-sobor/3.jpg", "img/spassky-sobor/4.jpg"
    ],
    archive: [
      "img/spassky-sobor/old1.jpg", "img/spassky-sobor/old2.jpg"
    ] },
  { id: "oblispolkom", name: "Могилёвский облисполком", city: "Могилёв", status: "exists", year: "с 1938",
    lat: 53.909652, lon: 30.344120, address: "Могилёв, ул. Первомайская, 71",
    style: "",
    desc: "Строительство Дома Советов начали в 1938 году. Архитектор Иосиф Лангбард, автор проекта Дома Правительства в Минске. Сегодня в несостоявшемся Доме Советов размещается облисполком.",
    photos: [
      "img/oblispolkom/1.jpg", "img/oblispolkom/2.jpg", "img/oblispolkom/3.jpg", "img/oblispolkom/4.jpg"
    ],
    archive: [
      "img/oblispolkom/old1.jpg", "img/oblispolkom/old2.jpg"
    ] },
  { id: "ratusha-mogilev", name: "Могилёвская ратуша", city: "Могилёв", status: "restored", year: "1679–1681",
    lat: 53.894250, lon: 30.330420, address: "Могилёв, ул. Ленинская, 1а",
    style: "Барокко",
    desc: "Считалась лучшим произведением гражданской архитектуры Беларуси XVII века. Высота восьмигранной башни со шпилем составляла 46 метров. В начале XXI века ратуша восстановлена на прежнем месте по старым чертежам.",
    photos: [
      "img/ratusha-mogilev/1.jpg", "img/ratusha-mogilev/2.jpg", "img/ratusha-mogilev/3.jpg", "img/ratusha-mogilev/4.jpg"
    ],
    archive: [
      "img/ratusha-mogilev/old1.jpg", "img/ratusha-mogilev/old2.jpg"
    ] },
  { id: "muzey-byalynitskogo", name: "Музей Бялыницкого-Бирули", city: "Могилёв", status: "exists", year: "конец XVII – начало XVIII в.",
    lat: 53.899400, lon: 30.338700, address: "Могилёв, ул. Ленинская, 37",
    style: "Позднее барокко и раннее классицизм",
    desc: "Здание построено как жилой дом старинного купеческого рода Оношек. Его облик сочетает позднее барокко и раннее классицизм. Сегодня здесь музей Витольда Каэтановича Бялыницкого-Бирули.",
    photos: [
      "img/muzey-byalynitskogo/1.jpg", "img/muzey-byalynitskogo/2.jpg", "img/muzey-byalynitskogo/3.jpg", "img/muzey-byalynitskogo/4.jpg"
    ],
    archive: [
      "img/muzey-byalynitskogo/old1.jpg", "img/muzey-byalynitskogo/old2.jpg"
    ] },
  { id: "muzey-maslenikova", name: "Музей имени П. В. Масленикова", city: "Могилёв", status: "exists", year: "начало XX в.",
    lat: 53.908182, lon: 30.338389, address: "Могилёв",
    style: "Модерн, псевдорусский стиль, поздний классицизм",
    desc: "Памятник архитектуры начала XX века, автор проекта архитектор А. Друкер. Первоначально в здании находился поземельно-крестьянский банк.",
    photos: [
      "img/muzey-maslenikova/1.jpg", "img/muzey-maslenikova/2.jpg", "img/muzey-maslenikova/3.jpg", "img/muzey-maslenikova/4.jpg"
    ],
    archive: [
      "img/muzey-maslenikova/old1.jpg", "img/muzey-maslenikova/old2.jpg"
    ] },
  { id: "chasovnya-buynichi", name: "Часовня на Буйничском поле", city: "Могилёв", status: "exists", year: "",
    lat: 53.861332, lon: 30.255841, address: "д. Буйничи, Могилёвский район",
    style: "Традиционная восточнославянская архитектура",
    desc: "Мемориальный комплекс: арка-вход, аллея и 27-метровая красная часовня. На арке размещены горельефные доски с фамилиями погибших защитников Могилёва.",
    photos: [
      "img/chasovnya-buynichi/1.jpg", "img/chasovnya-buynichi/2.jpg", "img/chasovnya-buynichi/3.jpg", "img/chasovnya-buynichi/4.jpg"
    ],
    archive: [
      "img/chasovnya-buynichi/old1.jpg", "img/chasovnya-buynichi/old2.jpg"
    ] },
  { id: "triumfalnaya-arka", name: "Триумфальная арка", city: "Могилёв", status: "exists", year: "2018",
    lat: 53.936667, lon: 30.250000, address: "Могилёв, Минское шоссе",
    style: "Неоклассицизм",
    desc: "Построена в центре транспортного кольца на въезде в город при реконструкции Минского шоссе. Открыта 9 октября 2018 года к 750-летию Могилёва. В основании заложена капсула с посланием будущим жителям.",
    photos: [
      "img/triumfalnaya-arka/1.jpg", "img/triumfalnaya-arka/2.jpg", "img/triumfalnaya-arka/3.jpg", "img/triumfalnaya-arka/4.jpg"
    ],
    archive: [
      "img/triumfalnaya-arka/old1.jpg", "img/triumfalnaya-arka/old2.jpg"
    ] },
  { id: "nacbiblioteka", name: "Национальная библиотека", city: "Минск", status: "exists", year: "2006",
    lat: 53.931300, lon: 27.646100, address: "Минск, пр. Независимости, 116",
    style: "",
    desc: "Новое здание, ставшее одним из символов страны, открыто 16 июня 2006 года. Авторы проекта: М. Виноградов и В. Крамаренко. Форма здания – ромбокубооктаэдр, приближенный к кругу.",
    photos: [
      "img/nacbiblioteka/1.jpg", "img/nacbiblioteka/2.jpg", "img/nacbiblioteka/3.jpg", "img/nacbiblioteka/4.jpg"
    ],
    archive: [
      "img/nacbiblioteka/old1.jpg", "img/nacbiblioteka/old2.jpg"
    ] },
  { id: "ratusha-minsk", name: "Минская городская ратуша", city: "Минск", status: "restored", year: "2002–2004 (восстановлена)",
    lat: 53.903333, lon: 27.556111, address: "Минск, пл. Свободы",
    style: "",
    desc: "Главное украшение площади Свободы и символ исторической памяти минчан. Восстановлена в 2002–2004 годах на прежнем месте и в том виде, каким город запомнил её в середине XIX века. С 2012 года доступна для посещения.",
    photos: [
      "img/ratusha-minsk/1.jpg", "img/ratusha-minsk/2.jpg", "img/ratusha-minsk/3.jpg", "img/ratusha-minsk/4.jpg"
    ],
    archive: [
      "img/ratusha-minsk/old1.jpg", "img/ratusha-minsk/old2.jpg"
    ] },
  { id: "kameneckaya-bashnya", name: "Каменецкая башня", city: "Каменец", status: "exists", year: "1276–1288",
    lat: 52.404767, lon: 23.819430, address: "Каменец, ул. Ленина, 3А",
    style: "Волынская башня",
    desc: "Уникальный памятник оборонного зодчества XIII века в Брестской области. Построена на левом берегу реки Лесной по указанию князя Владимира Васильковича. Относится к особому типу оборонительных сооружений – волынским башням.",
    photos: [
      "img/kameneckaya-bashnya/1.jpg", "img/kameneckaya-bashnya/2.jpg", "img/kameneckaya-bashnya/3.jpg", "img/kameneckaya-bashnya/4.jpg"
    ],
    archive: [
      "img/kameneckaya-bashnya/old1.jpg", "img/kameneckaya-bashnya/old2.jpg"
    ] },
  { id: "ruzhansky-dvorets", name: "Ружанский дворец", city: "Ружаны", status: "ruins", year: "XVIII в.",
    lat: 52.860278, lon: 24.895556, address: "г. п. Ружаны",
    style: "Поздний классицизм",
    desc: "Великолепный памятник архитектуры XVIII века, его часто называют «Белорусским Версалем». Сейчас отреставрированы два флигеля и въездные ворота. Впечатляют и руины самого дворца.",
    photos: [
      "img/ruzhansky-dvorets/1.jpg", "img/ruzhansky-dvorets/2.jpg", "img/ruzhansky-dvorets/3.jpg", "img/ruzhansky-dvorets/4.jpg"
    ],
    archive: [
      "img/ruzhansky-dvorets/old1.jpg", "img/ruzhansky-dvorets/old2.jpg"
    ] },
  { id: "chagall", name: "Арт-центр Марка Шагала", city: "Витебск", status: "exists", year: "здание XIX в., музей с 1992",
    lat: 55.200556, lon: 30.190833, address: "Витебск, ул. Путна, 2",
    style: "",
    desc: "Расположен в здании XIX века, изображённом на картине Шагала «Над городом». Музей открыт в 1992 году, в нём около 300 подлинных работ художника: литографии, офорты и акватинты.",
    photos: [
      "img/chagall/1.jpg", "img/chagall/2.jpg", "img/chagall/3.jpg", "img/chagall/4.jpg"
    ],
    archive: [
      "img/chagall/old1.jpg", "img/chagall/old2.jpg"
    ] },
  { id: "ratusha-vitebsk", name: "Витебская городская ратуша", city: "Витебск", status: "exists", year: "1597",
    lat: 55.195564, lon: 30.206020, address: "Витебск, ул. Ленина, 36",
    style: "",
    desc: "Стоит в самом сердце города, рядом с местом впадения Витьбы в Западную Двину. История началась в 1597 году, когда Сигизмунд III Ваза даровал городу Магдебургское право. Башню перестроили в 1833 году, в 1924 году здесь открыли краеведческий музей.",
    photos: [
      "img/ratusha-vitebsk/1.jpg", "img/ratusha-vitebsk/2.jpg", "img/ratusha-vitebsk/3.jpg", "img/ratusha-vitebsk/4.jpg"
    ],
    archive: [
      "img/ratusha-vitebsk/old1.jpg", "img/ratusha-vitebsk/old2.jpg"
    ] },
  { id: "petropavlovsky-gomel", name: "Гомельский Петропавловский собор", city: "Гомель", status: "exists", year: "",
    lat: 52.424082, lon: 31.017233, address: "Гомель, пл. Ленина, 6",
    style: "Классицизм",
    desc: "В плане собор имеет форму вытянутого креста с развитым трансептом, укороченным средним нефом и небольшими ризницами по обе стороны алтарной части. В оформлении фасадов использованы основные классицистические элементы декора. Памятник архитектуры.",
    photos: [
      "img/petropavlovsky-gomel/1.jpg", "img/petropavlovsky-gomel/2.jpg", "img/petropavlovsky-gomel/3.jpg", "img/petropavlovsky-gomel/4.jpg"
    ],
    archive: [
      "img/petropavlovsky-gomel/old1.jpg", "img/petropavlovsky-gomel/old2.jpg"
    ] },
  { id: "rumyantsev", name: "Дворец Румянцевых-Паскевичей", city: "Гомель", status: "exists", year: "конец XVIII в.",
    lat: 52.422222, lon: 31.016389, address: "Гомель",
    style: "",
    desc: "Центральная часть дворца – памятник архитектуры конца XVIII века. С ней связаны жизнь и деятельность Румянцевых и Паскевичей, выдающихся государственных и военных деятелей. Архитектура и убранство помещений соответствовали их статусу.",
    photos: [
      "img/rumyantsev/1.jpg", "img/rumyantsev/2.jpg", "img/rumyantsev/3.jpg", "img/rumyantsev/4.jpg"
    ],
    archive: [
      "img/rumyantsev/old1.jpg", "img/rumyantsev/old2.jpg"
    ] },
  { id: "kolozhskaya", name: "Коложская церковь", city: "Гродно", status: "exists", year: "1140–1170-е",
    lat: 53.678333, lon: 23.818611, address: "Гродно",
    style: "",
    desc: "Предположительно построена в 1140–1170-х годах. Строительство связывают с гродненским князем Всеволодко или его сыновьями Борисом и Глебом. Из-за отдалённого расположения храм, скорее всего, изначально был монастырским.",
    photos: [
      "img/kolozhskaya/1.jpg", "img/kolozhskaya/2.jpg", "img/kolozhskaya/3.jpg", "img/kolozhskaya/4.jpg"
    ],
    archive: [
      "img/kolozhskaya/old1.jpg", "img/kolozhskaya/old2.jpg"
    ] },
  { id: "mirsky", name: "Мирский замок", city: "Мир", status: "exists", year: "XVI–XX вв.",
    lat: 53.451267, lon: 26.472894, address: "г. п. Мир, Кореличский район",
    style: "",
    desc: "Замковый комплекс, историко-культурная ценность национального значения и объект наследия ЮНЕСКО. Сначала построили пять башен, соединённых стенами толщиной до трёх метров у основания. Каждая башня была самостоятельным узлом обороны. Затем Радзивилл сделал замок одной из своих резиденций.",
    photos: [
      "img/mirsky/1.jpg", "img/mirsky/2.jpg", "img/mirsky/3.jpg", "img/mirsky/4.jpg"
    ],
    archive: [
      "img/mirsky/old1.jpg", "img/mirsky/old2.jpg"
    ] }
];

// Планируемые миниатюры (ПРИМЕР – замените на свои варианты).
const PLANNED = [
  { id: "nesvizh", name: "Несвижский замок", note: "Резиденция Радзивиллов, объект ЮНЕСКО", cover: "img/planned/nesvizh.jpg" },
  { id: "brest-fortress", name: "Брестская крепость", note: "Холмские ворота и мемориальный комплекс", cover: "img/planned/brest-fortress.jpg" },
  { id: "sofia-polotsk", name: "Софийский собор в Полоцке", note: "Один из древнейших храмов Беларуси", cover: "img/planned/sofia-polotsk.jpg" }
];

const STATUS_LABEL = { exists: "Сохранился", lost: "Утрачен", restored: "Восстановлен", ruins: "Частично руины" };

// Тексты для табличек в парке (короткие). Если для здания текста нет, берётся полное описание.
const SHORT = {
  "sobor-iosifa": "Заложен в мае 1780 года в присутствии Екатерины II. Построен по проекту Н. Львова в стиле классицизма: строгие формы и портик. Здание утрачено.",
  "pipenberg": "Шедевр садово-паркового искусства конца XVIII – начала XIX века. Центром был трёхэтажный классицистический дворец, сохранился только фундамент.",
  "uspenskaya-cerkov": "Православный храм в стиле барокко, построенный в 1670 году недалеко от Днепра. Снесён в 1950-х годах.",
  "gubernskoe-pravlenie": "Двухэтажное каменное здание на городской площади. Разрушено в 1944 году.",
  "duhovnaya-seminariya": "Учебный корпус возведён в 1780–1785 годах по проекту Н. Львова. Семинария закрыта в 1918 году.",
  "spassky-sobor": "Монастырь впервые упомянут в 1447 году, храм не раз горел и перестраивался. Спасский собор был уничтожен.",
  "oblispolkom": "Здание Дома Советов начали строить в 1938 году по проекту Иосифа Лангбарда. Сегодня здесь работает облисполком.",
  "ratusha-mogilev": "Построена в 1679–1681 годах в стиле барокко, высота башни со шпилем 46 м. Восстановлена в начале XXI века по старым чертежам.",
  "muzey-byalynitskogo": "Здание конца XVII – начала XVIII века, жилой дом купцов Оношек. Сочетает позднее барокко и раннее классицизм.",
  "muzey-maslenikova": "Памятник архитектуры начала XX века (архитектор А. Друкер). Сочетает модерн, псевдорусский стиль и поздний классицизм. Раньше здесь был банк.",
  "chasovnya-buynichi": "Мемориал защитникам Могилёва. 27-метровая красная часовня в традициях восточнославянской архитектуры, к ней ведёт аллея от арки-входа.",
  "triumfalnaya-arka": "Открыта 9 октября 2018 года к 750-летию Могилёва. Неоклассический стиль, в основании – капсула с посланием потомкам.",
  "nacbiblioteka": "Открыта 16 июня 2006 года, один из символов страны. Авторы проекта: М. Виноградов и В. Крамаренко. Форма – ромбокубооктаэдр.",
  "ratusha-minsk": "Главное украшение площади Свободы. Восстановлена в 2002–2004 годах в облике середины XIX века, с 2012 года доступна для посещения.",
  "kameneckaya-bashnya": "Памятник оборонного зодчества XIII века, построена в 1276–1288 годах по указанию князя Владимира Васильковича. Относится к волынским башням.",
  "ruzhansky-dvorets": "Памятник позднего классицизма XVIII века, «Белорусский Версаль». Отреставрированы флигеля и ворота, сохраняются и руины дворца.",
  "chagall": "Здание XIX века, изображённое на картине Шагала «Над городом». Музей открыт в 1992 году, в коллекции около 300 подлинных работ.",
  "ratusha-vitebsk": "История началась в 1597 году, когда Сигизмунд III Ваза даровал городу Магдебургское право. Башню перестроили в 1833 году, с 1924 года здесь краеведческий музей.",
  "petropavlovsky-gomel": "Классицистический храм, в плане имеет форму вытянутого креста. Памятник архитектуры.",
  "rumyantsev": "Центральная часть дворца – памятник архитектуры конца XVIII века. С ним связаны Румянцевы и Паскевичи, выдающиеся государственные и военные деятели.",
  "kolozhskaya": "Предположительно построена в 1140–1170-х годах, вероятно, как монастырский храм. Строительство связывают с князем Всеволодко или его сыновьями Борисом и Глебом.",
  "mirsky": "Комплекс XVI–XX веков, объект наследия ЮНЕСКО. Сначала построили пять башен, соединённых трёхметровыми стенами, затем Радзивилл сделал замок своей резиденцией."
};

// Текст раздела «О проекте» (абзацы). Отредактируйте под себя.
const ABOUT = [
  "Парк миниатюр Беларуси – это парк, в котором собраны архитектурные памятники страны: сохранившиеся, восстановленные и утраченные.",
  "Рядом с каждой миниатюрой в парке стоит табличка с кратким описанием и QR-кодом. Он ведёт на страницу здания на этом сайте: там настоящие и архивные фотографии и подробный рассказ."
];
