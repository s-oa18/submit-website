/* eslint-disable @next/next/no-img-element */
import React from "react";

import GallerySection from "@/components/gallery-section/GallerySection";
import HeroSectionSM from "@/components/hero-section-sm/HeroSectionSM";
import Layout from "@/components/layout/Layout";
import PageShape from "@/components/page-shape/PageShape";
import Seo from "@/components/Seo";
import VideoSection from "@/components/video/VideoSection";
export default function GalleryPage() {
  const photos = [
    {
      src: "/images/gallery/42.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/20.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/22.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/28.png",
      width: 326.65,
      height: 328.62,
    },

    {
      src: "/images/gallery/27.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/29.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/23.png",
      width: 159.24,
      height: 328.62,
    },

    {
      src: "/images/gallery/31.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/34.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/33.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/32.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/35.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/38.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/41.png",
      width: 326.65,
      height: 328.62,
    },

    {
      src: "/images/gallery/37.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/36.png",
      width: 326.65,
      height: 328.62,
    },

    {
      src: "/images/gallery/43.png",
      width: 326.65,
      height: 328.62,
    },

    {
      src: "/images/gallery/45.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/46.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/47.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/50.png",
      width: 159.24,
      height: 160.18,
    },
    {
      src: "/images/gallery/49.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/48.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/51.png",
      width: 159.24,
      height: 160.18,
    },
    {
      src: "/images/gallery/52.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/53.png",
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
            image="/images/header-bg/gallery-bg-copy.png"
            name="Africa Prosperity Dialogues 2023"
            desc="Business & Policy Leaders Dialogue. Day 1"
          />
          <div className="layout tw-py-10 lg:tw-py-24">
            <GallerySection photos={photos} />
          </div>
        </div>

        <div className="video-section">
          <VideoSection image="/images/video-bg.png" videoID="kwUBmOa42yc" />
        </div>
      </main>
    </Layout>
  );
}
