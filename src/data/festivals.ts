
export interface Festival {
  id: number;
  title: string;
  poster: string;
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
  title: `第${id}回 コザ・てるりん祭`,
  poster: `/images/posters/sample${id}.jpg`,
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
  { length: 17 },
  (_, index) => {
    const id = 17 - index;
    const festival = createFestival(id);

    if (id === 15) {
      return {
        ...festival,
        date: "2026年9月27日(日)",
        time: "15:00～",
        venue: "沖縄市中央パークアベニュー",
        performers: [
          "新良幸人",
          "伊藤幸太",
          "我那覇セイラ",
          "知名定男 ほか",
        ],
        description: "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれあれこれ",
        visitors: "1323人",
        income: "2,300円",
        expenses: "30,000円",
        additionalImages: [
          "/images/sampleA.jpg",
          "/images/sampleB.jpg",
        ],
        additionalText: "説明：あれこれあれこれあれこれあれこれあれこれあれこれあれこ",
        gallery: [
          "/images/sampleC.jpg",
        ],
      };
    }

    if (id === 14) {
      return {
        ...festival,
        additionalImages: [
          "/images/sampleB.jpg",
        ],
      };
    }

    return festival;
  }
);
