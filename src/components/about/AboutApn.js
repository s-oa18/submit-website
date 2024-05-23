import * as React from "react";

import SectionDot from "../section-dot/SectionDot";
import SectionHeader from "../section-header/SectionHeader";

export default function AboutApn(props) {
  return (
    <div className="about-section section-space-y">
      {props.hasDot ? <SectionDot /> : null}
      <SectionHeader hint="" title="THE AFRICA PROSPERITY NETWORK" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="content tw-mx-auto tw-max-w-[1000px]">
            <p>
              The Africa Prosperity Network (APN) secretariat is based in Accra,
              Ghana, and registered as a company limited by guarantee under the
              country's Companies Act, 2019 (Act 992). The purpose of the Africa
              Prosperity Network is to create a vibrant network of businesses
              operating in Africa, and Pan-African thought leaders. Our purpose
              is to deepen trade and investments across Africa, in line with the
              African Union’s agenda to build the world's largest single market
              in Africa. We will provide a common platform where the concerns,
              challenges, ideas, and opportunities of Africa's private sector
              can be discussed and organised for action.
            </p>
            <p>
              We offer a platform where leaders in business, politics, etc., can
              think, plan and work together to champion the “Africa Agenda for
              Action” – which is creating sustainable prosperity for all
              Africans by Africans, both at home and abroad. The secretariat
              will foster partnerships with credible institutions and
              governments to convene political, business and social sector
              leaders including associations each year to lead a continental
              action for prosperity through dialogues.
            </p>
            <p>
              The Africa Prosperity Dialogues, APN’s flagship event, will be an
              annual platform for this network of political, business and social
              sector leaders to deliberate on a sustainable way to implement the
              AU's Agenda 2063 for building the Africa we want, in a way that
              provides for quick wins for the people of Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
