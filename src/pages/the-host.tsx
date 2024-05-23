import React from "react";

import CardTitleText from "@/components/card-title-text/CardTitleText";
import HeroSectionSM from "@/components/hero-section-sm/HeroSectionSM";
import Layout from "@/components/layout/Layout";
import PageShape from "@/components/page-shape/PageShape";
import Seo from "@/components/Seo";

const desc_list = [
  "The Africa Prosperity Network (APN) secretariat is based in Accra, Ghana, and registered as a company limited by guarantee under the country's Companies Act, 2019 (Act 992). The purpose of the Africa Prosperity Network is to create a vibrant network of businesses operating in Africa, and Pan-African thought leaders. Our purpose is to deepen trade and investments across Africa, in line with the African Union’s agenda to build the world's largest single market in Africa. We will provide a common platform where the concerns, challenges, ideas, and opportunities of Africa's private sector can be discussed and organised for action. We offer a platform where leaders in business, politics, etc., can think, plan and work together to champion the “Africa Agenda for Action” – which is creating sustainable prosperity for all Africans by Africans, both at home and abroad. The secretariat will foster partnerships with credible institutions and governments to convene political, business and social sector leaders including associations each year to lead a continental action for prosperity through dialogues. The Africa Prosperity Dialogues, APN’s flagship event, will be an annual platform for this network of political, business and social sector leaders to deliberate on a sustainable way to implement the AU's Agenda 2063 for building the Africa we want, in a way that provides for quick wins for the people of Africa.",
];

const desc_list_2 = [
  "The object and purpose of APN are to create an enabling platform for collaboration between political and business leaders of Africa to drive the collective prosperity of Africa and people of African descent.",
];

const desc_list_3 = [
  "The services APN provides include: Convene Africa’s leaders in politics and business to discuss the prosperity of the continent, Establish a media network to push the single African market agenda,  Establish a network of Influential Africans to drive an African Prosperity Agenda. ",
];

const desc_list_4 = [
  "APN has a three-fold leverage: a strong partnership with credible institutions who believe in APN’s core business and continue to support our work. Such institutions include the African Continental Free Trade Area (AfCFTA) Secretariat, Office of the President of Ghana, the UNDPs ",
];

export default function HostPage() {
  return (
    <Layout>
      <Seo templateTitle="Africa Prosperity Network" />

      <main>
        <div className="host-page">
          <PageShape />
          <HeroSectionSM
            image="/images/header-bg/apn-bg.jpg"
            name="Africa Prosperity Network"
            desc="The Host"
          />
          <div className="section-space-y"></div>
          <CardTitleText
            title="AFRICA PROSPERITY NETWORK (APN)"
            desc_list={desc_list}
          />
          <CardTitleText title="Mission" desc_list={desc_list_2} />

          <CardTitleText title="Services" desc_list={desc_list_3} />

          <CardTitleText title="APN’s Leverage" desc_list={desc_list_4} />
        </div>
      </main>
    </Layout>
  );
}
