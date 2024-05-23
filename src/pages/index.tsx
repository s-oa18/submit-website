import * as React from "react";

import AboutSection from "@/components/about/AboutSection";
import AboutApn from "@/components/about/AboutApn";
import FAQSection from "@/components/faq-section/FAQSection";
import HeroSection from "@/components/hero-section/HeroSection";

import Layout from "@/components/layout/Layout";
import NewSection from "@/components/news-section/NewSection";

import Seo from "@/components/Seo";
// import SponsorsSection from "@/components/sponsors-section/SponsorsSection";
import VideoSection from "@/components/video/VideoSection";
import Appreciation from "@/components/appreciation/Appreciation";

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <div className="home-page">
          <HeroSection />
          <Appreciation />
          <AboutApn hasDot={true} />
          <AboutSection hasDot={true} />
          <VideoSection image="/images/video-bg.png" videoID="kwUBmOa42yc" />
          <NewSection />
          <FAQSection />

          {/* <SponsorsSection /> */}
        </div>
      </main>
    </Layout>
  );
}
