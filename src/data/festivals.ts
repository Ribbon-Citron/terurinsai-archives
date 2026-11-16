export interface Festival {
  id: number;
  title: string;
  titleTop: string;
  poster: string;
  year: string;
  date: string;
  time: string;
  venue: string;
  performers: string[];
  description: string;
  visitors: string;
  weather: string;
  cashflow: string;
  donation: string;
  expenses: string;
  additionalImages: string[];
  additionalText: string;
  gallery: string[];
}

const createFestival = (id: number): Festival => ({
  id,
  title: `第${id}回 コザ･てるりん祭`,
  titleTop: `第${id}回`,
  poster: `/images/posters/poster_${id}.jpg`,
  year: "",
  date: "",
  time: "",
  venue: "",
  performers: [],
  description: "",
  visitors: "",
  weather: "",
  cashflow: "",
  donation: "",
  expenses: "",
  additionalImages: [],
  additionalText: "",
  gallery: [],
});

export const festivals: Festival[] = Array.from({ length: 15 }, (_, index) => {
  const id = 15 - index;
  const festival = createFestival(id);

  //  第15回【2026】
  if (id === 15) {
    return {
      ...festival,
      year: "2026",
      date: "年9月27日(日)",
      time: "15:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれ",
      visitors: "計測なし",
      weather: "雨(台風最接近)",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第14回【2025】
  if (id === 14) {
    return {
      ...festival,
      year: "2025",
      date: "年 9月27日(日)",
      time: "15:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["りんけんバンド、知名定男、仲本興次、玉栄政昭、大工哲弘、田場盛信、神谷幸一、徳原清文、松田弘一、前川守賢、新良幸人、よなは徹、松田一利、仲宗根創、知名定人、島袋辰也、喜友名ともき、HIKARI、とぅるるんてん、大城美佐子、饒辺勝子、山里ユキ、金城恵子、饒辺愛子、我如古より子、知念こずえ、Hirara、村吉茜、ティンクティンク、たぁーちゅ、園田青年会、玉城満(司会)、藤木勇人(司会)、みーちゅう(司会)",],
      description: "説明：",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "確認中",
      additionalImages: [
        "/images/sampleA.jpg",
        "/images/sampleA.jpg",
        "/images/sampleA.jpg",
      ],
      additionalText:
        "説明：",
      gallery: ["/images/sampleB.jpg"],
    };
  }

  //  第13回【2024】
  if (id === 13) {
    return {
      ...festival,
      year: "2024",
      date: "年 9月29日(日)",
      time: "15:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description: "説明：あれれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "能登半島災害義援金 606,501円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第12回【2023】
  if (id === 12) {
    return {
      ...festival,
      year: "2023",
      date: "年 10月14日(日)",
      time: "12:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "？",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：こども10/14",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第11回【2019】
  if (id === 11) {
    return {
      ...festival,
      year: "2019",
      date: "年 4月21日(日)",
      time: "12:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description: "説明：これあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "？",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第10回【2018】
  if (id === 10) {
    return {
      ...festival,
      year: "2018",
      date: "年 4月15日(日)",
      time: "12:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["りんけんバンド、知名定男、仲本興次、玉栄政昭、大工哲弘、田場盛信、神谷幸一、徳原清文、松田弘一、前川守賢、新良幸人、よなは徹、松田一利、仲宗根創、知名定人、島袋辰也、喜友名ともき、HIKARI、とぅるるんてん、大城美佐子、饒辺勝子、山里ユキ、金城恵子、饒辺愛子、我如古より子、知念こずえ、Hirara、村吉茜、ティンクティンク、たぁーちゅ、園田青年会、玉城満(司会)、藤木勇人(司会)、みーちゅう(司会)"],
      description:
        "後援：沖縄市,琉球新報社,沖縄タイムス社,沖縄市センター商店街振興組合,コザ・インフォメーションセンター,まちづくりNPOコザまち社中",
      visitors: "計測なし",
      weather: "晴",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第9回【2017】
  if (id === 9) {
    return {
      ...festival,
      year: "2017",
      date: "年4月16日(日)",
      time: "12:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["りんけんバンド,知名定男,仲本興次,玉栄政昭,田場盛信,前川守賢,よなは徹,松田一利,仲宗根創,知名定人,島袋辰也,喜友名ともき,HIKARI,とぅるるんてん,大城美佐子,饒辺勝子,山里ユキ,金城恵子,饒辺愛子,我如古より子,知念こずえ,我那覇せいら,ティンクティンク,あかまーみー,園田青年会,玉城満(司会),藤木勇人(司会),みーちゅー(司会)"],
      description: "後援：沖縄市,琉球新報社,沖縄タイムス社,沖縄市センター商店街振興組合,コザ・インフォメーションセンター,まちづくりNPOコザまち社中",
      visitors: "計測なし",
      weather: "晴",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第8回【2016】
  if (id === 8) {
    return {
      ...festival,
      year: "2016",
      date: "年 4月17日(日)",
      time: "13:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["りんけんバンド,知名定男,仲本興次,玉栄政昭,田場盛信,神谷幸一,松田弘一,前川守賢,新良幸人,よなは徹,西泊喜則,松田一利,知名定人,島袋辰也,HIKARI,とぅるるんてん,大城美佐子,饒辺愛子,我如古より子,知念こずえ,村吉茜,我那覇せいら,ティンクティンク,園田青年会,玉城満(司会),藤木勇人(司会),川満しぇんしぇ～(司会),ヘンリー(司会),桑江良美"],
      description: "後援：沖縄市, 琉球新報社, 沖縄タイムス社, 沖縄市センター商店街振興組合, コザ・インフォメーションセンター, まちづくりNPOコザまち社中",
      visitors: "計測なし",
      weather: "曇/晴",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第7回【2015】
  if (id === 7) {
    return {
      ...festival,
      year: "2015",
      date: "年 4月12日(日)",
      time: "12:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: [" 知名定男,仲本興次,玉栄政昭,大工哲弘,田場盛信,神谷幸一,前川守賢,よなは徹,西泊喜則,松田一利,仲宗根創,知名定人,島袋辰也,HIKARI,福治光広,宮沢和史,紅龍,とぅるるんてん,大城美佐子,饒辺勝子,山里ユキ,金城恵子,饒辺愛子,でいご娘,我如古より子,金城みゆき,堀内加奈子,知念こずえ,我那覇せいら,ティンクティンク,張雅淳from台湾,新垣成世,園田青年会,玉城満"],
      description:
        "後援：沖縄市, 琉球新報社, 沖縄タイムス社, 沖縄市センター商店街振興組合, コザ・インフォメーションセンター, まちづくりNPOコザまち社中",
      visitors: "計測なし",
      weather: "晴/雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第6回【2014】
  if (id === 6) {
    return {
      ...festival,
      year: "2014",
      date: "年 4月13日(日)",
      time: "13:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["知名定男／仲本興次／玉栄政昭／松田弘一／大工哲弘／古堅宗揮／照屋林賢／名嘉睦稔／前川守賢／新良幸人／よなは徹／與那嶺商会／西泊喜則／松田一利／仲宗根創／島袋辰也／HIKARI／とぅるるんてん／饒辺勝子／山里ユキ／饒辺愛子／金城恵子／我如古より子／上原知子／チアキ／堀内加奈子／知念こずえ／斉藤まーみー／ティンク ティンク／園田青年会／司会：玉城満, 立川志ぃさー(藤木勇人), ヘンリー"],
      description: "後援：沖縄市, 琉球新報社, 沖縄タイムス社, 沖縄市センター商店街振興組合, コザ・インフォメーションセンター, まちづくりNPOコザまち社中",
      visitors: "計測なし",
      weather: "晴/雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第5回【2013】
  if (id === 5) {
    return {
      ...festival,
      year: "2013",
      date: "年 4月14日(日)",
      time: "13:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["HIKARI, 三上亜弥, カラハーイユニット, ナオユキ, 知念こずえ, やちむん, 玉栄政昭, 島袋辰也, 松田一利, 仲宗根創, とぅるるんてん, 照屋林賢, 名嘉睦稔, 上原知子, 仲本興次, 宮沢和史, 前川守賢, 饒辺愛子, 大城美佐子, 堀内加奈子, よなは徹, 山里ユキ, 饒辺勝子, 金城恵子, 松田弘一, 園田青年会, 玉城満(司会), 藤木勇人(司会)"],
      description: "後援：沖縄市, 琉球新報社, 沖縄タイムス社, 沖縄市センター街振興組合, コザ・インフォメーションセンター, まちづくりNPOコザまち社中",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第4回【2012】
  if (id === 4) {
    return {
      ...festival,
      year: "2012",
      date: "年 4月4日(日)",
      time: "14:00～21:00",
      venue: "沖縄市:パルミラ通り～一番街エリア",
      performers: [" 光, シャンピン, 徳里隆行, 知念こずえ, 島袋辰也, 仲宗根創, 松田一利, チアキ, 知名定男, よなは徹, 玉栄政昭, 仲本興次, 前川守賢, 饒辺愛子, 新良幸人, 宮沢和史, 上原知子, 照屋林賢, 名嘉睦稔, 大工哲弘, 大城美佐子, 園田青年会, 玉城満(司会), 藤木勇人(司会)"],
      description: "協力： 沖縄市, コザインフォメーションセンター, まちづくりNPOコザまち社中",
      visitors: "計測なし",
      weather: "？",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第3回【2011】
  if (id === 3) {
    return {
      ...festival,
      year: "2011",
      date: "年 4月4日(日)",
      time: "14:00～21:00",
      venue: "沖縄市:パルミラ通り➡一番街商店街",
      performers: ["上原知子,嘉手苅林次,園田青年会,大工哲弘,玉栄政昭,玉城満(司会),知名定男,坪山豊,照屋林賢,徳里隆行,名嘉睦稔,仲本興次,西泊喜則,登川誠仁,前川守賢,よなは徹,饒辺愛子,ローリークック"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "？",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第2回【2010】
  if (id === 2) {
    return {
      ...festival,
      year: "2010",
      date: "年 4月4日(日)",
      time: "14:00～21:00",
      venue: "沖縄市:パルミラ通り",
      performers: ["嘉手苅林次,久場政行＆前粟蔵靖,ジョニー宜野湾,園田青年会,玉栄政昭,ディアマンテス,照屋林賢,仲地のぶひで,名嘉睦稔,仲本興次,西泊喜則,登川誠仁,ひがよしひろ,藤木勇人(司会),前川守賢,山川まゆみ,よなは徹,饒辺愛子,ローリークック"],
      description:
        "説明：",
      visitors: "計測なし",
      weather: "曇",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第1回【2009】
  if (id === 1) {
    return {
      ...festival,
      year: "2009",
      date: "年 6月6日(土)",
      time: "14:00～21:00",
      venue: "沖縄市:パルミラ通り",
      performers: ["新良幸人,久場政行＆前粟蔵靖,越来シーサーキッズ(獅子舞),園田青年会＆子供会,玉栄政昭,知名定男,照屋林賢,名嘉睦稔,仲本興次,西泊喜則,登川誠仁,ひがよしひろwithTARA,前川守賢,吉田鉄太郎(司会),よなは徹,ローリークック",],
      description: "説明：バスでお越しの場合は胡屋が最寄バス停です。",
      visitors: "計測なし",
      weather: "晴",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
      additionalImages: ["/images/sampleA.jpg"],
      additionalText: "説明：",
      gallery: ["/images/sampleC.jpg", "/images/sampleB.jpg"],
    };
  }

  return festival;
});
