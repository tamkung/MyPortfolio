import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import emailjs from "emailjs-com";

import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiPhoneLine } from "react-icons/ri";

emailjs.init("lk31hWDxMcBB22Crw");
//,"lk31hWDxMcBB22Crw"
const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(1, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    alert("ฟังก์ชันนี้ยังไม่เปิดใช้งาน");
    // emailjs
    //   .send("service_ebdrg8i", "template_6f3tn38", {
    //     to_email: values.email,
    //     subject: values.name,
    //     message: values.message,
    //   })
    //   .then(
    //     function (response) {
    //       setSubmitting(false);
    //       console.log("SUCCESS!", response.status, response.text);
    //       alert("Your message has been sent!");
    //       window.location.reload();
    //     },
    //     function (error) {
    //       console.log("FAILED...", error);
    //     }
    //   );

    // axios
    //   .post("/send-email", values)
    //   .then((response) => {
    //     console.log(response);
    //     setSubmitting(false);
    //     alert("Your message has been sent!");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setSubmitting(false);
    //     alert(
    //       "There was an error sending your message. Please try again later."
    //     );
    //   });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Waragorn.T@outlook.com</h5>
            <a
              href="mailto:Waragorn.T@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Waragorn Thammasiri</h5>
            <a
              href="https://m.me/tam.waragorn"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiPhoneLine className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+66 964233977</h5>
            <a href="tel:+66964233977" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <Field
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <Field
                as="textarea"
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
