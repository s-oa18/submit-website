import React from "react";

import CardNews from "../card-news/CardNews";
import SectionHeader from "../section-header/SectionHeader";
const news = [
  {
    image: "/images/news/news-12.jpg",
    title:
      "AU ADOPTS AFRICA PROSPERITY DIALOGUES' ACTION COMPACT ON AfCFTA'S IMPLEMENTATION",
    date: "20 February 2023",
    link: "/news/news-12",
  },
  {
    image: "/images/news/news-11.jpg",
    title:
      "AFRICA PROSPERITY NETWORK (APN) AT THE 36TH ORDINARY SESSION OF HEADS OF STATES AND GOVERNMENT HELD IN ADDIS ABABA, ETHIOPIA",
    date: "20 February 2023",
    link: "/news/news-11",
  },
  {
    image: "/images/news/news-10.png",
    title:
      "Ghana to host Africa’s business leaders at maiden Africa Prosperity Dialogues",
    date: "20 January 2023",
    link: "https://tribuneonlineng.com/ghana-to-host-africas-business-leaders-at-maiden-africa-prosperity-dialogues/",
  },

  {
    image: "/images/news/news-9.png",
    title:
      "ETHIOPIA AIRLINES BOSS, MESFIN TASEW BEKELE, TO ATTEND AFRICA PROSPERITY DIALOGUES ",
    date: "17 January 2023",
    link: "https://peacefmonline.com/pages/business/news/202301/481406.php",
  },

  {
    image: "/images/news/news-8.png",
    title:
      "H.E WAMKELE MENE, the Secretary General OF AFCFTA. on 'Delivering Prosperity Through Continental Trade.'",
    date: "click to watch video",
    link: "https://www.youtube.com/watch?v=m5IhO0U6sSE",
  },

  {
    image: "/images/news/news-7.png",
    title:
      "HON. YOFI GRANT on 'Delivering Prosperity Through Continental Trade.'",
    date: "click to watch video",
    link: "https://www.youtube.com/watch?v=he8kv6QpyDM&t=6s",
  },

  {
    image: "/images/news/news-1.png",
    title:
      "“It’s time to move from mere negotiations to trading among ourselves” H.E. Joao Baptista Domingos Quiosa, ",
    date: "24 June 2022 | 22:48",
    link: "/news/news-1",
  },
  {
    image: "/images/news/news-2.png",
    title:
      "KWAHU SUMMIT LAUNCHED – GHANA TO HOST AFRICA’S PROSPERITY DIALOGUES",
    date: "24 June 2022 | 22:48",
    link: "/news/news-2",
  },
  {
    image: "/images/news/news-3.png",
    title: "Benefits of African Economic Integration",
    date: "24 May 2022 | 22:48",
    link: "/news/news-3",
  },
  {
    image: "/images/news/news-4.png",
    title: "Trading under AfCFTA to progress on agreed 87.7% tariff lines",
    date: "1 November 2022 | 22:48",
    link: "/news/news-4",
  },
  {
    image: "/images/news/news-5.png",
    title:
      "Importance of regional and continental integration for Africa’s development",
    date: "1 November 2022 | 22:48",
    link: "/news/news-5",
  },
  {
    image: "/images/news/news-6.png",
    title:
      "AAAM, AfCFTA brainstorm on how to fast-track devt of African automobile sector",
    date: "1 November 2022 | 22:48",
    link: "/news/news-6",
  },
];

const NewsAll = () => {
  return (
    <div className="news-all">
      <SectionHeader title="News" />
      <div className="news-all-box">
        <div className="layout">
          <div className="tw-grid tw-grid-cols-1 tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3">
            {news.map((item, index) => {
              return (
                <div key={index}>
                  <CardNews
                    image={item.image}
                    title={item.title}
                    date={item.date}
                    link={item.link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAll;
