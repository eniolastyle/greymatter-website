import React from "react";
import message from "../assets/message.svg";
import leftArrow from "../assets/left-arrow.svg";
import delex from "../assets/delex.svg";
import homely from "../assets/homely.svg";
import adoc from "../assets/adoc.svg";
function OurProjectPage() {
  const workDone = [
    {
      title: "Happy Talent",
      number: "+150",
    },
    {
      title: "Project Done",
      number: "+450",
    },
    {
      title: "Solutions Created",
      number: "+10",
    },
    {
      title: "Happy Companies",
      number: "+25",
    },
  ];
  const projectDone = [
    {
      techtype: "Cloud Solution",
      title: "Delex Relay, a delivery platform",
      about:
        "This project exemplifies the perfect blend of technical acumen and real-world application. From optimizing delivery routes to enhancing user experience.",
      image: delex,
    },
    {
      techtype: "App Development",
      title: "Homely, E-commerce with a Mobile App",
      about:
        "Aspiring entrepreneurs and tech talents worked collaboratively to design an app that redefines online shopping.",
      direction: "reverse",
      image: homely,
    },
    {
      techtype: "DevOps Solution ",
      title: "ADOC, Your Online Medical Appoinments",
      about:
        "The team established a streamlined CI/CD pipeline, coupled with Kubernetes deployment, to elevate ADOC website efficiency.",
      image: adoc,
    },
  ];
  return (
    <div className="projectPage">
      <div className="hero-section">
        <div className="text">
          <h3>Our Projects</h3>
          <h2>Our Student Realities</h2>
          <p>
            We take immense pride in witnessing our talents grow into confident
            professionals, armed with cutting-edge skills and practical
            experience.
          </p>
        </div>
        <div className="work">
          {workDone.map((item, index) => (
            <div className="individual" key={index}>
              <p>{item.title}</p>
              <h2>{item.number}</h2>
            </div>
          ))}
        </div>
        <button>
          Let's Talk <img src={message} alt="" />
        </button>
      </div>
      <div className="projectTable">
        {projectDone.map((project, index) => (
          <div className="Indiproject" key={index} id={project.direction}>
            <div className="flex">
              <div className="info">
                <h3>{project.techtype}</h3>
                <h2>{project.title}</h2>
                <p>{project.about}</p>
              </div>
              <div className="img">
                <img src={project.image} alt="" />
              </div>
            </div>
            <button>
              Check the project <img src={leftArrow} alt="" />
            </button>
          </div>
        ))}
        <button>
          Explore More Projects <img src={leftArrow} alt="" />
        </button>
      </div>
      <div className="lingual">
        <h3>Our Lingual</h3>
        <div className="display">
          <div className="linHeader">
            <h2>From Ideas to Solutions: The GreyMatter Way</h2>
          </div>
          <div className="linText">
            <p>
              GreyMatter's project showcase isn't just about code and
              algorithms; it's about translating innovative ideas into impactful
              solutions. Our students, equipped with skills and guided by
              mentorship, push the boundaries of what's possible in the tech
              realm.
            </p>
          </div>
        </div>
        <button>
          Let's Talk <img src={message} alt="" />
        </button>
      </div>
    </div>
  );
}

export default OurProjectPage;
