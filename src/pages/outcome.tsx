import React from "react";

import OutcomeDocument from "@/components/outcome-document/OutcomeDocument";
import HeroSectionSM from "@/components/hero-section-sm/HeroSectionSM";
import Layout from "@/components/layout/Layout";
import PageShape from "@/components/page-shape/PageShape";
import Seo from "@/components/Seo";

export default function AgendaPage() {
  return (
    <Layout>
      <Seo templateTitle="Afica Prosperity Dialogues Outcome Document" />

      <main>
        <div className="agenda-page">
          <PageShape />
          <HeroSectionSM
            image="/images/header-bg/agenda-bg.png"
            name="Afica Prosperity Dialogues 2023 Outcome Document"
            desc="Business and Policy Leaders Dialogue"
          />
          <OutcomeDocument />
        </div>
      </main>
    </Layout>
  );
}
