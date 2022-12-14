import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
/* eslint-disable */

const list = [
  "Front-End Development",
  "Backend Development",
  "UI/UX Design",
  "SAAS Development",
];
function Form() {
  const form = useRef();
  const [select, setForm] = useState(null);
  const setFormData = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_zmw52zc",
        "template_lufmaul",
        form.current,
        "_J49LBHIQ4HI3uTGV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const setOption = (item) => {
    let message = document.getElementById("message");
    // message.value += " " + item;
    console.log(message.value)
  }
  return (
    <div className="form m-0" data-aos="fade-right" data-aos-delay="400">
      <span className="headForm my-4 d-none d-md-block text-left">
        Choose what you’d like to do
      </span>
      {/* list choice */}
      <div className="row m-0 mt-5">
        {list &&
          list.map((item, key) => (
            <button
              className="listedItem mr-auto "
              data-aos="zoom-in"
              data-aos-delay="600"
              key={key}
              onClick={(e) => setOption(item)}
              name="option"
            >
              <h3>{item}</h3>
            </button>
          ))}
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-container">
          <div className="input">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              required
              className="name"
              name="user_name"
              onChange={setFormData}
              value={form.user_name}
            />
          </div>

          <div className="input">
            <label htmlFor="user_email">Email</label>

            <input
              type="email"
              required
              className="emal "
              placeholder=""
              name="user_email"
              onChange={setFormData}
              value={form.user_email}
            />
          </div>

          <div className="input">
            <label htmlFor="name" className="text-left">
              Tell Us What You’d Like to Do
            </label>

            <textarea
              className="message"
              required
              id=""
              rows="3"
              name="message"
              onChange={setFormData}
              value={form.message}
            ></textarea>
          </div>
        </div>

        <button className="btn-send my-4 d-block d-md-none w-100">Send</button>
        <button className="btn-send my-4 d-none d-md-block">Send</button>
      </form>
    </div>
  );
}

export default Form;
