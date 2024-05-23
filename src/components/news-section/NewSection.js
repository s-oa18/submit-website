/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

import CardNews from "../card-news/CardNews";
import SectionHeader from "../section-header/SectionHeader";
const NewsSection = () => {
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
      image: "/images/news/news-4.png",
      title: "Trading under AfCFTA to progress on agreed 87.7% tariff lines",
      date: "1 November 2022 | 22:48",
      link: "/news/news-4",
    },
  ];

  return (
    <div className="news-section">
      <SectionHeader title="News" />
      <div className="news-card">
        <div className="layout">
          <div className="tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-2 lg:tw-grid-cols-3">
            {news.map((item, index) => {
              return (
                <div key={index} className="last:tw-mb-10">
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
          <div className="row justify-content-end">
            <div className="col-md-4">
              <div className="view-more-news">
                <Link
                  href="/news"
                  className="btn view-all-news btn-link hover:tw-underline"
                >
                  View all news
                  <img
                    className="arrow-right tw-object-fill"
                    src="/images/green-arrow-right.png"
                    alt="arrow right"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
