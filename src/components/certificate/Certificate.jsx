import React from "react";
import "./certificate.css";

import Cer1 from "../../assets/borntodev1.png";
import Cer2 from "../../assets/google-cloud.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Cer1,
    name: "Get started with Azure Functions",
    review: "Born to Dev",
  },
  {
    avatar: "Cer2",
    name: "Sustainability Summit",
    review: "Google Cloud",
  },
  {
    avatar: "AVTR3",
    name: "Kwame Despite",
    review:
      "Lorem ipsum, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo. Modi porro facere atque non.",
  },
  {
    avatar: "AVTR4",
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.",
  },
];

const Certificate = () => {
  return (
    <section id="certificate">
      {/* <h5>Review From Clients</h5> */}
      <h2>Certificate</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h3 style={{ paddingTop: "10px" }} className="client__name">
                {name}
              </h3>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certificate;
