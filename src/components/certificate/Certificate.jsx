import React from "react";
import "./certificate.css";
import No_image from "../../assets/No_image.png";
import Cer1 from "../../assets/cer1.png";
import Cer2 from "../../assets/cer2.jpg";
import Cer3 from "../../assets/cer3.png";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: Cer1,
    name: "Get started with Azure Functions",
    review: "Born to Dev",
    size: "100%",
  },
  {
    image: Cer2,
    name: "Sustainability Summit",
    review: "Google Cloud",
    size: "60%",
  },
  {
    image: Cer3,
    name: "Data Analyst",
    review: "Thailand Professional Qualification Institute",
    size: "60%",
  },
  {
    image: null,
    name: "Nana Ama McBrown",
    review: "Lorem ipsum dolor sit amet, consectetur ",
    size: "100%",
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
        {data.map(({ image, name, review, size }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img
                  src={image !== null ? image : No_image}
                  alt={name}
                  style={{width: size}}
                />
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
