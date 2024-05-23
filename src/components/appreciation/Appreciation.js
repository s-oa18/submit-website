/* eslint-disable @next/next/no-img-element */
import React from "react";

import SectionHeader from "../section-header/SectionHeader";
import QuoteSlider from "../quote-slider/QuoteSlider";
const Appreciation = () => {
  return (
    <div className="who-attending-section tw-relative lg:tw-pt-20">
      <div className="row layout">
        <div className="col-lg-5 offset-lg-1 col-md-6">
          <div className="content !tw-pr-0">
            <SectionHeader
              hint="Executive Director, Africa Prosperity Network"
              title="Dr. Eugene Owusu"
            />
            <div>
              <img
                src="/images/summit-images/dr.eo.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1 col-md-6">
          <div className="content !tw-pr-0">
            <div style={{ padding: "90px 0 0 0", textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "4 ems",
                  color: "#00a139",
                  marginBottom: "25px",
                  textTransform: "uppercase",
                }}
              >
                Thank you
              </h1>
              <p>
                For participating in the <b>Africa Prosperity Dialogues</b>. The
                vision is to build a united Africa with a common goal and one
                African market. Africa will stand tall. Together, Lets take
                action to see the Africa we want.
              </p>
            </div>
          </div>
          <div>
            <QuoteSlider />
          </div>
        </div>
      </div>
      <img
        className="tw-absolute tw-left-0 tw-bottom-0 -tw-z-10"
        src="/images/CircleUp.svg"
        alt="vector"
      />
    </div>
  );
};

export default Appreciation;
