import React from "react";

import About from "@/components/about/About";
import HeroSectionSM from "@/components/hero-section-sm/HeroSectionSM";
import Layout from "@/components/layout/Layout";
import ObjectivesSection from "@/components/objectives-section/ObjectivesSection";
import PageShape from "@/components/page-shape/PageShape";
import Seo from "@/components/Seo";

export default function AboutSummitPage() {
  return (
    <Layout>
      <Seo templateTitle="About Dialogues" />

      <main>
        <div className="about-summit-page">
          <PageShape />
          <HeroSectionSM
            image="/images/header-bg/apd-bg.jpg"
            name="About Africa Prosperity Dialogues"
            desc="About the Dialogues"
          />
          <About hasDot={false} />

          <ObjectivesSection />
        </div>
      </main>
    </Layout>
  );
}
