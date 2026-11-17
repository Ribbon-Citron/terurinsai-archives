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
      date: "年 9月27日(日)",
      time: "15:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: [
        "MITCHAI, 伊藤幸太, 大川豊治(司会), 喜友名朝樹, 下地イサム, 知念こずえ, 新良幸人, 宜寿次光, 園田人, 園田青年会, 玉城満(司会), 知名定人, ティンクティンク, 藤木志ぃさー(司会), みーちゅう(司会), りんけんバンド",
      ],
      description:
        "後援：沖縄市, 沖縄市観光物産振興協会, FMコザ, 株式会社ファンファーレ・ジャパン",
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
      date: "年 9月28日(日)",
      time: "12:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: [
        "サンサンズ, 大川豊治, 大工哲弘, 下地イサム, 島袋恵美子, 島袋辰也, 神谷幸一, 金城恵子, 喜友名朝樹, 宜寿次光, 司会：玉城満, 新良幸人, 園田青年会, 知名定人, 玉栄政昭, 玉城一美, 知念こずえ, とぅるるんてん, 田辺由貴, ティンク ティンク, 仲本興次, 饒辺愛子, 湧川重智, ひがけい子＆チー坊, ひがよしひろ, 藤木勇人, 前川守賢, 松田一利, みーちゅう, 宮沢和史, 村吉茜, やちむん, よなは徹, 我那覇セイラ",
      ],
      description:
        "後援：沖縄市, 沖縄市観光物産振興協会, コザ商店街連合, FMコザ, 株式会社ファンファーレ・ジャパン",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "確認中",
      additionalImages: ["/images/sampleA.jpg"],
      additionalText: "説明：",
      gallery: ["/images/sampleB.jpg"],
    };
  }

  //  第13回【2024】
  if (id === 13) {
    return {
      ...festival,
      year: "2024",
      date: "年 9月29日(日)",
      time: "12:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: [
        "Sachiy, あかまーみ, 大工哲弘, 喜友名朝樹, 宜寿次光, 島袋恵美子, 島袋辰也, 神谷幸一, 金城恵子, 園田青年会, 新良幸人, 司会：玉城満, 知名定男, 知名定人, 玉栄政昭, 知念こずえ, とぅるるんてん, 田場盛信, 田辺由貴, ティンク ティンク, 仲宗根創, 仲本興次, 饒辺愛子, 湧川重智, 西泊茂昌, ひがけい子&チー坊, 藤木勇人, 前川守賢, 松田一利, みーちゅう, 宮沢和史, よなは徹",
      ],
      description:
        "後援：沖縄市, 沖縄市観光物産振興協会, コザ商店街連合, FMコザ, 株式会社ファンファーレ・ジャパン",
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
      performers: [
        "あかまーみ, 上原知子, 大工哲弘, 大川豊治(司会), 喜友名朝樹, 金城恵子, 宜寿次光, 知名定男, 知名定人, 知念こずえ, 照屋林賢, 徳原清文, とぅるるんてん, 仲宗根創, 仲本興次, 饒辺愛子, 新良幸人, 園田青年会, 田場盛信, 田辺由貴, 玉栄政昭, 玉城満（司会）, ひがけい子＆チー坊, 前川守賢, 松田一利, みーちゅう（司会）, 宮沢和史, 名嘉睦稔, 屋良幸人, よなは徹, りんけんバンド",
      ],
      description:
        "後援：沖縄市, 沖縄市教育委員会, 沖縄市観光物産振興協会, コザ商店街連合, FMコザ, 株式会社ファンファーレ・ジャパン",
      visitors: "計測なし",
      weather: "？",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：子供てるりん祭10/14",
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
      performers: [
        "HIKARI, 大工哲弘, 喜友名ともき, 宜寿次光, 金城恵子, 園田青年会, 司会：玉城満, 新良幸人, 知名定男, 知名定人, 玉栄政昭, 知念こずえ, とぅるるんてん, 徳原清文, 仲宗根創, 仲本興次, 饒辺愛子, 饒辺勝子, 大城美佐子, 山里ユキ, 島袋辰也, 照屋林賢, 熟田弘一, 田場盛信, ティンクティンク, 藤木勇人, 前川守賢, 松田一利, 松田弘一, みーちゅー, 村吉茜, 我如古より子, 神谷幸一, よなは徹",
      ],
      description:
        "後援：沖縄市, 琉球新報社, 沖縄タイムス社, 沖縄市センター商店街振興組合, コザ・インフォメーションセンター, まちづくりNPOコザまち社中, みやら製麺",
      visitors: "計測なし",
      weather: "？",
      cashflow: "---円 / ---円 (確認中)",
      donation: "？",
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
      performers: [
        "HIKARI, たぁーちゅ, りんけんバンド, 大工哲弘, 喜友名ともき, 金城恵子, 園田青年会, 知名定男, 知名定人, 玉栄政昭, 知念こずえ, Hirara, とぅるるんてん, 徳原清文, 仲宗根創, 仲本興次, 饒辺愛子, 饒辺勝子, 大城美佐子, 山里ユキ, 島袋辰也, 照屋林賢, 田場盛信, ティンクティンク, 藤木勇人(司会), 前川守賢, 松田一利, 松田弘一, みーちゅう(司会), 村吉茜, 玉城満(司会), 我如古より子, 神谷幸一, よなは徹",
      ],
      description:
        "後援：沖縄市, 琉球新報社, 沖縄タイムス社, 沖縄市センター商店街振興組合, コザ・インフォメーションセンター, まちづくりNPOコザまち社中",
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
      performers: [
        "HIKARI, あかまーみー, りんけんバンド, 大工哲弘, 喜友名ともき, 金城恵子, 園田青年会, 知名定男, 知名定人, 玉栄政昭, 知念こずえ, とぅるるんてん, 徳原清文, 仲宗根創, 仲本興次, 饒辺愛子, 饒辺勝子, 大城美佐子, 山里ユキ, 島袋辰也, 田場盛信, ティンクティンク, 藤木勇人(司会), 前川守賢, 松田一利, みーちゅー(司会), 玉城満(司会), 我那覇せいら, 我如古より子, よなは徹",
      ],
      description:
        "後援：沖縄市, 琉球新報社, 沖縄タイムス社, 沖縄市センター商店街振興組合, コザ・インフォメーションセンター, まちづくりNPOコザまち社中",
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
      performers: [
        "HIKARI, りんけんバンド, 大工哲弘, 喜友名ともき, 園田青年会, 知名定男, 知名定人, 玉栄政昭, 知念こずえ, とぅるるんてん, 徳原清文, 仲本興次, 饒辺愛子, 大城美佐子, 山里ユキ, 島袋辰也, 新良幸人, 西泊喜則, 前川守賢, 松田一利, 松田弘一, 村吉茜, 桑江良美(司会), 園田青年会, 司会：川満しぇんしぇ～, 司会：ヘンリー, 玉城満(司会), 藤木勇人(司会), 我那覇せいら, 我如古より子, 神谷幸一, よなは徹",
      ],
      description:
        "後援：沖縄市, 琉球新報社, 沖縄タイムス社, 沖縄市センター商店街振興組合, コザ・インフォメーションセンター, まちづくりNPOコザまち社中",
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
      performers: [
        "HIKARI, でいご娘, とぅるるんてん, アーティスト名, 大工哲弘, 大城美佐子, 園田青年会, 堀内加奈子, 新垣成世, 新良幸人, 梓雅淳from台湾, 知名定男, 知名定人, 玉栄政昭, 知念こずえ, 徳原清文, 仲宗根創, 仲本興次, 饒辺愛子, 饒辺勝子, 山里ユキ, 島袋辰也, 巨龍, 金城みゆき, 金城恵子, 鈴木喜則, 創富光広, 神谷幸一, 司会：玉城満, 前川守賢, 松田一利, 宮沢和史, 我如古より子, 我那覇せいら, ティンクティンク, よなは徹",
      ],
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
      performers: [
        "HIKARI, 上原知子, 園田青年会, 大工哲弘, 宇達木, 斉藤まーみー, 知名定男, 知名定人, 玉栄政昭, 知念こずえ, 堀内加奈子, 照屋林賢, 徳原清文, とぅるるんてん, 仲宗根創, 仲本興次, 饒辺愛子, 饒辺勝子, 山里ユキ, 島袋辰也, 新良幸人, 西泊喜則, 前川守賢, 松田一利, 松田弘一, 古堅宗揮, 名嘉睦稔, 司会：立川志ぃさー/藤木勇人, 司会：ヘンリー, 玉城満(司会), チアキ, ティンク ティンク, 与那嶺商会, 我如古より子, よなは徹",
      ],
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

  //  第5回【2013】
  if (id === 5) {
    return {
      ...festival,
      year: "2013",
      date: "年 4月14日(日)",
      time: "13:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: [
        "HIKARI, 上原知子, 園田青年会, 大城美佐子, 大工哲弘, 堀内加奈子, 照屋林賢, とぅるるんてん, 仲宗根創, 仲本興次, 饒辺愛子, 饒辺勝子, 山里ユキ, 島袋辰也, 新良幸人, 司会：藤木勇人, 前川守賢, 松田一利, 椎名亜弥, 照屋林賢, 名嘉睦稔, 玉栄政昭, 玉城満(司会), 知念こずえ, とぅるるんてん, ナオユキ, カラハーイユニット, よなは徹",
      ],
      description:
        "後援：沖縄市, 琉球新報社, 沖縄タイムス社, 沖縄市センター街振興組合, コザ・インフォメーションセンター, まちづくりNPOコザまち社中",
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
      performers: [
        "HIKARI, 上原知子, 園田青年会, 大城美佐子, 大工哲弘, 知名定男, 玉栄政昭, 玉城満(司会), 知念こずえ, 照屋林賢, 仲宗根創, 仲本興次, 饒辺愛子, 新良幸人, 司会：藤木勇人, 前川守賢, 松田一利, 徳里隆行, シャンピン, 光, 宮沢和史, 名嘉睦稔, よなは徹",
      ],
      description:
        "主催：パルミラ通り会, コザ商店街連合会 ・ 協力： 沖縄市, コザインフォメーションセンター, まちづくりNPOコザまち社中",
      visitors: "計測なし",
      weather: "雨",
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
      performers: [
        "上原知子, 嘉手苅林次, 園田青年会, 大工哲弘, 玉栄政昭, 玉城満(司会), 知名定男, 坪山豊, 照屋林賢, 徳里隆行, 名嘉睦稔, 仲本興次, 西泊喜則, 登川誠仁, 前川守賢, よなは徹, 饒辺愛子, ローリークック",
      ],
      description:
        "主催：パルミラ通り会 ・ 協力：沖縄市, コザインフォメーションセンター, まちづくりNPOコザまち社中",
      visitors: "計測なし",
      weather: "雨",
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
      performers: [
        "嘉手苅林次, 久場政行＆前粟蔵靖, ジョニー宜野湾, 園田青年会, 玉栄政昭, ディアマンテス, 照屋林賢, 仲地のぶひで, 名嘉睦稔, 仲本興次, 西泊喜則, 登川誠仁, ひがよしひろ, 藤木勇人(司会), 前川守賢, 山川まゆみ, よなは徹, 饒辺愛子, ローリークック",
      ],
      description:
        "主催：パルミラ通り会 ・ 協力：沖縄市, コザ・インフォメーションセンター, まちづくりNPOコザまち社中",
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
      performers: [
        "久場政行＆前粟蔵靖, 越来シーサーキッズ(獅子舞), 園田青年会＆子供会, 吉田鉄太郎(司会), 知名定男, 照屋林賢, 新良幸人, 名嘉睦稔, 仲本興次, 西泊喜則, 登川誠仁, ひがよしひろ with TARA, 前川守賢, 玉栄政昭, よなは徹, ローリークック",
      ],
      description: "協力： 沖縄市, コザ商店街連合会, パルミラ通り会",
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
