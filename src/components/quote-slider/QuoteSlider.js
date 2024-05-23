import React, { useEffect, useState } from "react";

function QuoteSlider() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    // This variable prevents race condition
    let current = 1;
    const cycleReviews = () => {
      if (current === 5) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };
    // intervalId identified so it can be canceled on unmount
    const intervalId = setInterval(() => {
      cycleReviews();
    }, 10000);
    // Removes interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const reviews = [
    {
      name: "H.E Akuffo-Addo.",
      citation: "President Of Ghana",
      quote:
        "We need quick wins and this is exactly what the outcome of this dialogue offers us as well as a concentrated focus on the steps towards the prosperity of the African people.",
    },

    {
      name: "H.E Wamkele Mene.",
      citation: "Secretary-General, AFCFTA Secretariat",
      quote:
        "It if up to you, it is up to me, it is up to us as Africans, to develop our continent ourselves. It is not going to be done for us and so we have to be prepared to face all of the challenges that we know will present themselves in this journey.",
    },
    {
      name: "Mesfin T.",
      citation: "CEO, Ethiopian Airlines Group",
      quote:
        "if we believe air transport is an important beacon to bring Africa prosperity to advance our ambition for the AfCFTA creation then we have to identify the issues and the challenges of developing air transport in Africa.",
    },
    {
      name: "Gabby Otchere-Darko.",
      citation: "Senior Partner, Africa Legal Associates",
      quote:
        "The AfCFTA’s success is our success. If it works, it will boost significantly trade and investments, provide jobs and increase prosperity across the continent like never before",
    },
    {
      name: "Dr. Mahamudu Bawumia",
      citation: "Vice-President of Ghana",
      quote:
        "As key stakeholders, we must consolidate the successes so far and, with a sense of urgency, develop the signature solutions needed to deepen intra-African trade and spur impactful investments needed to bring prosperity to the continent and its people. And we must do this with fearless determination",
    },
  ];

  return (
    <div className="App">
      <ul className="carousel__list">
        {reviews.map((review, index) => {
          const { citation, name, quote } = review;
          const count = index + 1;
          return (
            <li
              className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
              key={count}
            >
              <blockquote className="carousel__quote">
                <cite>
                  <span className="carousel__name">{name}</span>
                  <span className="carousel__citation">{citation}</span>
                </cite>
                <p>"{quote}"</p>
              </blockquote>
            </li>
          );
        })}
        <li className="carousel__indicator">
          <span
            className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 4 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 5 ? " active" : ""}`}
          />
        </li>
      </ul>
      {/* <p>Active Slide = {activeSlide}</p> */}
    </div>
  );
}

export default QuoteSlider;
