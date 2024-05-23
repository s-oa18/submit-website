import * as React from "react";

import HeroSectionSM from "@/components/hero-section-sm/HeroSectionSM";
import Layout from "@/components/layout/Layout";
import EventDays from "@/components/event-days/EventDays";

import Seo from "@/components/Seo";

export default function Apd2023() {
  return (
    <Layout>
      <Seo templateTitle="Draft Programme" />

      <main>
        <div className="protocols-page">
          <HeroSectionSM
            image="/images/header-bg/protocols-bg.png"
            name="Africa Prosperity Dialogues 2023"
            desc="Programme Outline"
          />
          <EventDays />
        </div>
      </main>
    </Layout>
  );
}
