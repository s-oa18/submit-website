import React from "react";

import SectionHeader from "../section-header/SectionHeader";

const FAQSection = () => {
  return (
    <div className="faq-section tw-p-0">
      <SectionHeader title="Frequently Asked Questions" />
      <div className="faq-block">
        <div className="layout">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      WHY IS THE AFRICA PROSPERITY DIALOGUES DUBBED “KWAHU
                      SUMMIT”?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The Africa Prosperity Dialogues is a concept developed
                        by the Africa Prosperity Network to promote with greater
                        urgency the economic integration of Africa's 1.4 billion
                        people. And to do so by giving the voices of business,
                        women and young people in Africa a greater say in the
                        process of deepening intra-Africa trade. The concept was
                        fully adopted by the main partners, namely the AfCFTA
                        Secretariat and the Office of President of the Republic
                        of Ghana, AfCFTA's host nation, after a thorough concept
                        presentation and brainstorming session. This took place
                        at a two-day working retreat from the 7th to 9th April
                        2022, organised by the Africa Prosperity network, at the
                        Rock City Hotel, on the Kwahu Mountains in the Eastern
                        Region of Ghana. Being the birthplace of the concept, it
                        was agreed that the annual Africa Prosperity Dialogues
                        be dubbed “Kwahu Summit” as reference to its origin.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Who can participate in the event?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        •African Heads of State •Heads of Regional Economic
                        Communities within the AU •Heads of Africa’s
                        multinational corporations •Leading African
                        entrepreneurs •The AU Secretariat •The AfCFTA
                        Secretariat •Leading thought leaders The CARICOM
                        Secretariat •Ministers of finance, trade, industry, and
                        infrastructure •Young entrepreneurs in Africa and the
                        African Diaspora •Heads of multinational corporations
                        with a strong presence in Africa •Heads of Trade
                        Associations •Heads of development banks •Heads of
                        Africa-focused organizations •Influential figures in the
                        African Diaspora •Heads of State-owned Corporations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
