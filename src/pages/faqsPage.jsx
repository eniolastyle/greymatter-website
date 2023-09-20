import React from "react";
import line from "../assets/curveLine.svg";
import arrow from "../assets/whiteArrow.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

function FaqsPage() {
  const [toggleDrop, setToggleDrop] = React.useState(false);

  function openAnswer(index) {
    if (toggleDrop === index) {
      setToggleDrop(null);
      return;
    }
    setToggleDrop(index);
  }

  const ToggleDown = [
    {
      question: "Do You offer Software Development",
      drop: "Yes,we do offer Social Media marketing , we offer fb ads instgram ads ,google campagine , tiktok promotion ,and other social media plateforme ",
    },
    {
      question: "Do you offer Social Media Marketing",
      drop: "Yes,we do offer Social Media marketing , we offer fb ads instgram ads ,google campagine , tiktok promotion ,and other social media plateforme ",
    },
    {
      question: "Do you Offer pack Services",
      drop: "Yes,we do offer Social Media marketing , we offer fb ads instgram ads ,google campagine , tiktok promotion ,and other social media plateforme ",
    },
    {
      question: "How long it take to realise a project",
      drop: "Yes,we do offer Social Media marketing , we offer fb ads instgram ads ,google campagine , tiktok promotion ,and other social media plateforme ",
    },
  ];
  return (
    <div className="faqsPage">
      <div className="lineImg">
        <img src={line} alt="" />
        <div className="hero">
          <div className="text">
            <h3>Let's have a chat</h3>
            <h2>An expert at your services</h2>
          </div>
          <form action="">
            <div>
              <p>Your name</p>
              <input type="text" name="" id="" placeholder="Your Full Name" />
            </div>
            <div>
              <p>Your Email</p>
              <input type="email" name="" id="" placeholder="Your Email" />
            </div>
            <div>
              <p>Your Number</p>
              <input
                type="Number"
                name=""
                id=""
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <p>Messages</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="About What do you want to Talk?"
              ></textarea>
            </div>
            <button>
              Send the Message <img src={arrow} alt="" />
            </button>
          </form>
        </div>
      </div>
      <div className="mainfaqs">
        <div className="questions">
          <div className="headerSec">
            <h3>FAQ</h3>
            <h2>Here are Some Answer For Frequntly asked Questions</h2>
            <p>
              We got alot of Message With the same Questions so here are some
              fast answer for populare Question
            </p>
          </div>
          <div className="questionSec">
            {ToggleDown.map((item, index) => (
              <div className="toggle" key={index}>
                <div className="main">
                  <p>{item.question}</p>
                  <img
                    src={toggleDrop === index ? minus : plus}
                    alt=""
                    onClick={() => openAnswer(index)}
                  />
                </div>
                <div
                  className={`drop ${toggleDrop === index ? "open" : "close"}`}
                >
                  <p>{item.drop}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqsPage;
