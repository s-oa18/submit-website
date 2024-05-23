/* eslint-disable @next/next/no-img-element */
import React from "react";

import GallerySection from "@/components/gallery-section/GallerySection";
import HeroSectionSM from "@/components/hero-section-sm/HeroSectionSM";
import Layout from "@/components/layout/Layout";
import PageShape from "@/components/page-shape/PageShape";
import VideoSection from "@/components/video/VideoSection";
import Seo from "@/components/Seo";
export default function GalleryPage() {
  const photos = [
    {
      src: "/images/gallery/p20.png",
      width: 159.24,
      height: 160.18,
    },
    {
      src: "/images/gallery/p3.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/p23.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/p4.png",
      width: 159.24,
      height: 160.18,
    },
    {
      src: "/images/gallery/p24.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/p51.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/p59.png",
      width: 159.24,
      height: 328.62,
    },
    {
      src: "/images/gallery/p5.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/p6.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/p8.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/p9.png",
      width: 326.65,
      height: 328.62,
    },

    {
      src: "/images/gallery/p11.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/p12.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/p14.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/p15.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/p17.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/p29.png",
      width: 159.24,
      height: 328.62,
    },
    {
      src: "/images/gallery/p55.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/p21.png",
      width: 159.24,
      height: 160.18,
    },
    {
      src: "/images/gallery/p45.png",
      width: 159.24,
      height: 160.18,
    },

    {
      src: "/images/gallery/p50.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/p56.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/p49.png",
      width: 159.24,
      height: 160.18,
    },
    {
      src: "/images/gallery/p44.png",
      width: 159.24,
      height: 328.62,
    },

    {
      src: "/images/gallery/p47.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/p54.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/p33.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/p48.png",
      width: 159.24,
      height: 160.18,
    },
    {
      src: "/images/gallery/p52.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/p37.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/p40.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/p61.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/p60.png",
      width: 159.24,
      height: 160.18,
    },
    {
      src: "/images/gallery/p58.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/p53.png",
      width: 326.65,
      height: 160.18,
    },
  ];

  return (
    <Layout>
      <Seo templateTitle="Gallery" />

      <main>
        <div className="gallery-page">
          <PageShape />
          <HeroSectionSM
            image="/images/header-bg/gallery-bg-copy3.png"
            name="Africa Prosperity Dialogues 2023"
            desc="Presidential & Business Executives Dialogue. Day 3"
          />
          <div className="layout tw-py-10 lg:tw-py-24">
            <GallerySection photos={photos} />
          </div>
        </div>
        <div className="video-section">
          <VideoSection image="/images/video-bg3.png" videoID="_O_inG4N29c" />
        </div>
      </main>
    </Layout>
  );
}
