import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG4,
    title: "ปล่อย Share",
    body: "React + Express + MySQL",
    github: "https://github.com",
    demo: "https://ploishare.vercel.app/",
  },
  {
    id: 2,
    image: IMG1,
    title: "KMUTNB Covid-App Project",
    body: "Flutter + Firebase",
    github: "https://github.com",
    demo: null,
  },
  {
    id: 3,
    image: IMG2,
    title: "Shabu-App Mini Project",
    body: "Flutter + Firebase",
    github: "https://github.com",
    demo: null,
  },
  {
    id: 4,
    image: IMG3,
    title: "TWT Computer",
    body: "HTML + Bootstrap 5 + Firebase",
    github: "https://github.com",
    demo: "https://final-waragorn.web.app/",
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Prototype ปล่อย Share",
  //   body: "Figma",
  //   github: null,
  //   demo: "https://www.figma.com/proto/WnmnHwrrPldJdf5ik8eNjr/%E0%B8%9B%E0%B8%A5%E0%B9%88%E0%B8%AD%E0%B8%A2-Share?page-id=0%3A1&node-id=20%3A2&viewport=5027%2C440%2C0.69&scaling=scale-down&starting-point-node-id=20%3A2&show-proto-sidebar=1",
  // },
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
        {data.map(({ id, image, title, body, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
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
                  <a href={github} className="btn">
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
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
