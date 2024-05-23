import React from "react";

import CompactDocument from "@/components/compact-document/CompactDocument";
import HeroSectionSM from "@/components/hero-section-sm/HeroSectionSM";
import Layout from "@/components/layout/Layout";
import PageShape from "@/components/page-shape/PageShape";
import Seo from "@/components/Seo";

export default function AgendaPage() {
  return (
    <Layout>
      <Seo templateTitle="Africa Prosperity Dialogues Compact Document" />

      <main>
        <div className="agenda-page">
          <PageShape />
          <HeroSectionSM
            image="/images/header-bg/agenda-bg.png"
            name="Africa Prosperity Dialogues 2023 Compact Document"
            desc="Presidential and Business Executives Dialogue"
          />
          <CompactDocument />
        </div>
      </main>
    </Layout>
  );
}
