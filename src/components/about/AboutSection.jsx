import * as React from "react";

import SectionDot from "../section-dot/SectionDot";
import SectionHeader from "../section-header/SectionHeader";

export default function AboutSection(props) {
  return (
    <div className="about-section section-space-y">
      {props.hasDot ? <SectionDot /> : null}
      <SectionHeader
        hint="BACKGROUND TO DIALOGUES"
        title="THE AFRICA PROSPERITY DIALOGUES"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="content tw-mx-auto tw-max-w-[1000px]">
            <p>
              The Africa Prosperity Dialogues is a strategic platform where the
              movers and shakers of Africa’s economy will gather for the purpose
              of building the world’s largest single market of 1.4 billion
              people. The objective is to elevate, with greater urgency, the
              African Continental Free Trade Agreement (AfCFTA) objectives from
              ambition to action. The dialogues are unique for two reasons: it
              is focused on intra-Africa trade, and it brings together Africa’s
              political, business, and social sector leaders to think together,
              plan together and work together to build the “Africa We Want” for
              all Africans.
            </p>

            <p>
              The broad agenda for the annual conference is to commit Africa’s
              leaders to a shared ambition of creating sustainable prosperity
              for all Africans through enhanced continental trade. It will bring
              into practical focus the continent’s critical challenges and
              industrialisation priorities and advance aggressively the
              commercial and infrastructural interventions needed to achieve the
              vision of a prosperous, integrated Africa Beyond Aid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
