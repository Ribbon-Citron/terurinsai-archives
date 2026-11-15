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
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨(台風最接近)",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
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
      performers: [
        "りんけんバンド、知名定男、仲本興次、玉栄政昭、大工哲弘、田場盛信、神谷幸一、徳原清文、松田弘一、前川守賢、新良幸人、よなは徹、松田一利、仲宗根創、知名定人、島袋辰也、喜友名ともき、HIKARI、とぅるるんてん、大城美佐子、饒辺勝子、山里ユキ、金城恵子、饒辺愛子、我如古より子、知念こずえ、Hirara、村吉茜、ティンクティンク、たぁーちゅ、園田青年会、玉城満(司会)、藤木勇人(司会)、みーちゅう(司会)",
      ],
      description: "説明：バスでお越しの場合は胡屋が最寄バス停です。",
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
        "説明：駐車場は近隣に公共駐車場(無料)や有料駐車場があります。",
      gallery: ["/images/sampleB.jpg"],
    };
  }

  //  第13回【2024】
  if (id === 13) {
    return {
      ...festival,
      year: "2024",
      date: "年9月27日(日)",
      time: "15:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第12回【2023】
  if (id === 12) {
    return {
      ...festival,
      year: "2023",
      date: "年4月4日(日)",
      time: "14:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第11回【2019】
  if (id === 11) {
    return {
      ...festival,
      year: "2019",
      date: "年4月4日(日)",
      time: "14:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第10回【2018】
  if (id === 10) {
    return {
      ...festival,
      year: "2018",
      date: "年4月4日(日)",
      time: "14:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第9回【2017】
  if (id === 9) {
    return {
      ...festival,
      year: "2017",
      date: "年4月4日(日)",
      time: "14:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第8回【2016】
  if (id === 8) {
    return {
      ...festival,
      year: "2016",
      date: "年4月4日(日)",
      time: "14:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第7回【2015】
  if (id === 7) {
    return {
      ...festival,
      year: "2015",
      date: "年4月4日(日)",
      time: "14:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第6回【2014】
  if (id === 6) {
    return {
      ...festival,
      year: "2014",
      date: "年4月4日(日)",
      time: "14:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第5回【2013】
  if (id === 5) {
    return {
      ...festival,
      year: "2013",
      date: "年4月4日(日)",
      time: "14:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第4回【2012】
  if (id === 4) {
    return {
      ...festival,
      year: "2012",
      date: "年4月4日(日)",
      time: "15:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨(台風最接近)",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第3回【2011】
  if (id === 2) {
    return {
      ...festival,
      year: "2011",
      date: "年4月4日(日)",
      time: "15:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨(台風最接近)",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第2回【2010】
  if (id === 2) {
    return {
      ...festival,
      year: "2010",
      date: "年4月4日(日)",
      time: "15:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: ["新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか"],
      description:
        "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
      visitors: "計測なし",
      weather: "雨(台風最接近)",
      cashflow: "---円 / ---円 (確認中)",
      donation: "令和8年熊本地震義援金 93,740円",
      additionalImages: ["/images/sampleA.jpg", "/images/sampleB.jpg"],
      additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
      gallery: ["/images/sampleC.jpg"],
    };
  }

  //  第1回【2009】
  if (id === 1) {
    return {
      ...festival,
      year: "2009",
      date: "年 9月27日(日)",
      time: "15:00～21:00",
      venue: "沖縄市:中央パークアベニュー",
      performers: [
        "りんけんバンド、知名定男、仲本興次、玉栄政昭、大工哲弘、田場盛信、神谷幸一、徳原清文、松田弘一、前川守賢、新良幸人、よなは徹、松田一利、仲宗根創、知名定人、島袋辰也、喜友名ともき、HIKARI、とぅるるんてん、大城美佐子、饒辺勝子、山里ユキ、金城恵子、饒辺愛子、我如古より子、知念こずえ、Hirara、村吉茜、ティンクティンク、たぁーちゅ、園田青年会、玉城満(司会)、藤木勇人(司会)、みーちゅう(司会)",
      ],
      description: "説明：バスでお越しの場合は胡屋が最寄バス停です。",
      visitors: "データなし",
      weather: "雨",
      cashflow: "---円 / ---円 (確認中)",
      donation: "確認中",
      additionalImages: ["/images/sampleA.jpg"],
      additionalText:
        "説明：駐車場は近隣に公共駐車場(無料)や有料駐車場があります。",
      gallery: ["/images/sampleC.jpg", "/images/sampleB.jpg"],
    };
  }

  return festival;
});
