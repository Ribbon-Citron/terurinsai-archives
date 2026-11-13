
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
  income: string;
  expenses: string;
  additionalImages: string[];
  additionalText: string;
  gallery: string[];
}

const createFestival = (id: number): Festival => ({
  id,
  title: `第${id}回 コザ･てるりん祭`,
  titleTop: `第${id}回`,  
  poster: `/images/posters/sample${id}.jpg`,
  year: "",
  date: "",
  time: "",
  venue: "",
  performers: [],
  description: "",
  visitors: "",
  income: "",
  expenses: "",
  additionalImages: [],
  additionalText: "",
  gallery: [],
});

export const festivals: Festival[] = Array.from(
  { length: 15 },
  (_, index) => {
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
        performers: [
          "新良幸人, 伊藤幸太, 我那覇セイラ, 知名定男 ほか",
        ],
        description: "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
        visitors: "1,323人",
        income: "2,300円",
        expenses: "30,000円",
        additionalImages: [
          "/images/sampleA.jpg",
          "/images/sampleB.jpg",
        ],
        additionalText: "説明：⚠️当サイトは現在構築中であり掲載内容は暫定⚠️",
        gallery: [
          "/images/sampleC.jpg",
        ],
      };
    }

//  第15回【2026】
    if (id === 14) {
      return {
        ...festival,
        year: "2025",
        date: "年9月27日(日)",
        time: "15:00～21:00",
        venue: "沖縄市:中央パークアベニュー",
        performers: [
          "りんけんバンド、知名定男、仲本興次、玉栄政昭、大工哲弘、田場盛信、神谷幸一、徳原清文、松田弘一、前川守賢、新良幸人、よなは徹、松田一利、仲宗根創、知名定人、島袋辰也、喜友名ともき、HIKARI、とぅるるんてん、大城美佐子、饒辺勝子、山里ユキ、金城恵子、饒辺愛子、我如古より子、知念こずえ、Hirara、村吉茜、ティンクティンク、たぁーちゅ、園田青年会、玉城満(司会)、藤木勇人(司会)、みーちゅう(司会)",
        ],
        description: "説明：バスでお越しの場合は胡屋が最寄バス停です。",
        visitors: "1,323人",
        income: "11,300円",
        expenses: "50,000円",
        additionalImages: [
          "/images/sampleA.jpg",
        ],
        additionalText: "説明：駐車場は近隣に公共駐車場(無料)や有料駐車場があります。",
        gallery: [
          "/images/sampleC.jpg",
          "/images/sampleB.jpg",
        ],
      };
    }


    return festival;
  }
);
