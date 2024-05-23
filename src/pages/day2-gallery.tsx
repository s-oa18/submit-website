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
      src: "/images/gallery/57.png",
      width: 159.24,
      height: 160.18,
    },

    {
      src: "/images/gallery/59.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/60.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/54.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/61.png",
      width: 159.24,
      height: 160.18,
    },
    {
      src: "/images/gallery/62.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/63.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/64.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/65.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/67.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/68.png",
      width: 326.65,
      height: 328.62,
    },

    {
      src: "/images/gallery/70.png",
      width: 159.24,
      height: 328.62,
    },

    {
      src: "/images/gallery/72.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/69.png",
      width: 326.65,
      height: 328.62,
    },

    {
      src: "/images/gallery/73.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/74.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/75.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/71.png",
      width: 326.65,
      height: 328.62,
    },

    {
      src: "/images/gallery/77.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/56.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/78.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/79.png",
      width: 159.24,
      height: 160.18,
    },
    {
      src: "/images/gallery/80.png",
      width: 159.24,
      height: 160.18,
    },

    {
      src: "/images/gallery/81.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/83.png",
      width: 159.24,
      height: 328.62,
    },

    {
      src: "/images/gallery/84.png",
      width: 326.65,
      height: 328.62,
    },
    {
      src: "/images/gallery/85.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/86.png",
      width: 326.65,
      height: 160.18,
    },

    {
      src: "/images/gallery/87.png",
      width: 326.65,
      height: 160.18,
    },
    {
      src: "/images/gallery/88.png",
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
            image="/images/header-bg/gallery-bg-copy2.png"
            name="Africa Prosperity Dialogues 2023"
            desc="Business & Policy Leaders Dialogue. Day 2"
          />
          <div className="layout tw-py-10 lg:tw-py-24">
            <GallerySection photos={photos} />
          </div>
        </div>
        <div className="video-section">
          <VideoSection image="/images/video-bg1.png" videoID="OC-vz6d_6rI" />
        </div>
      </main>
    </Layout>
  );
}
