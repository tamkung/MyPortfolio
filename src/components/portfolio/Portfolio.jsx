import React from "react";
import "./portfolio.css";
import No_image from "../../assets/No_image.png";

const data = [
  {
    id: 1,
    image: null,
    title: "ปล่อย Share",
    body: "React + Express + MySQL",
    github: "https://github.com",
    demo: "https://ploishare.vercel.app/",
    pdf: null,
  },
  {
    id: 2,
    image: null,
    title: "KMUTNB Covid-App Project",
    body: "Flutter + Firebase + G Maps API",
    github: "https://github.com",
    demo: null,
    pdf: null,
  },
  {
    id: 3,
    image: null,
    title: "Shabu-App Mini Project",
    body: "Flutter + Firebase",
    github: "https://github.com",
    demo: null,
    pdf: null,
  },
  {
    id: 4,
    image: null,
    title: "TWT Computer",
    body: "HTML + Bootstrap 5 + Firebase",
    github: "https://github.com",
    demo: "https://final-waragorn.web.app/",
    pdf: null,
  },
  {
    id: 5,
    image: null,
    title: "Automatic Dog Feeding",
    body: "Arduino + Firebase + Java",
    github: null,
    demo: null,
    pdf: 'null',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      {/* <h5>My Recent Work</h5> */}
      <h2>Portfolio</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, body, github, demo, pdf }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image !== null ? image : No_image} alt={title} />
              </div>
              <h2>{title}</h2>
              <h4
                style={{
                  paddingBottom: "15px",
                  paddingTop: "10px",
                  color: "lightgray",
                }}
              >
                {body}
              </h4>
              <div className="portfolio__item-cta">
                {github === null ? null : (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                  >
                    Github
                  </a>
                )}
                {demo === null ? null : (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {pdf === null ? null : (
                  <a
                    href={pdf}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    PDF
                  </a>
                )}

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
