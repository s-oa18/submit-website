import * as React from "react";

import GallerySection from "@/components/gallery-section/GallerySection";
import HeroSectionSM from "@/components/hero-section-sm/HeroSectionSM";
import Layout from "@/components/layout/Layout";
//import NewsDetailSection6 from "@/components/news-detail-section/NewsDetailSection6";
import PageShape from "@/components/page-shape/PageShape";
import Seo from "@/components/Seo";

export default function NewDetailPage11() {
  const photos = [
    {
      src: "/images/gallery/1.jpg",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/2.jpg",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/3.jpg",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/4.jpg",
      width: 326.65,
      height: 160.18,
    },
  ];

  return (
    <Layout>
      <Seo templateTitle="Africa Prosperity Network (APN) At The 36th Ordinary Session of Heads of States And Government Held in Addis Ababa, Ethiopia." />

      <main>
        <div className="news-detail-page">
          <PageShape />
          <HeroSectionSM
            image="/images/header-bg/news-bg-7.jpg"
            name="Africa Prosperity Network At The 36th Ordinary Session of Heads of States And Government."
          />

          <div className="text-title-section tw-px-0 md:tw-px-[70px]">
            <div className="layout">
              <div className="text-title-inner">
                <div className="quote-card">
                  <h4>
                    The Africa Prosperity Network (APN) At The 36th Ordinary
                    Session of Heads of States And Government, Held in Addis
                    Ababa, Ethiopia."
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="layout tw-py-10 lg:tw-py-24">
            <GallerySection photos={photos} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
