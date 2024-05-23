import * as React from "react";

import HeroSectionSM from "@/components/hero-section-sm/HeroSectionSM";
import Layout from "@/components/layout/Layout";
import NewsDetailSection12 from "@/components/news-detail-section/NewsDetailSection12";
import PageShape from "@/components/page-shape/PageShape";
import Seo from "@/components/Seo";

export default function NewDetailPage12() {
  return (
    <Layout>
      <Seo templateTitle="AU Adopts Africa Prosperity Dialogues' Action Compact On AfCFTA's Implementation" />

      <main>
        <div className="news-detail-page">
          <PageShape />
          <HeroSectionSM
            image="/images/header-bg/news-bg-7.jpg"
            name="AU Adopts Africa Prosperity Dialogues' Action Compact On AfCFTA's Implementation"
          />
        </div>
        <NewsDetailSection12 />
      </main>
    </Layout>
  );
}
