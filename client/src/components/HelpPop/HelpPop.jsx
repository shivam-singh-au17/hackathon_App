import React, { useState } from "react";
import "./HelpPop.css";

const iniState = {
  name: "",
  email: "",
  tell_us_more: "",
};

const HelpPop = () => {
  const [helpData, setHelpData] = useState(iniState);

  const recordSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function (event) {
      document.getElementById("name_popup").value =
        event.results[0][0].transcript;
    };
    recognition.start();
  };

  const recordSearchTwo = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function (event) {
      document.getElementById("tell_us_more_popup").value =
        event.results[0][0].transcript;
    };
    recognition.start();
  };

  const recordSearchThree = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function (event) {
      document.getElementById("email_popup").value =
        event.results[0][0].transcript;
    };
    recognition.start();
  };

  const handleChang = (e) => {
    const { name, value, type, checked } = e.target;
    const myAllUserData = {
      ...helpData,
      [name]: type === "checkbox" ? checked : value,
    };
    setHelpData(myAllUserData);
  };

  const submitHelpPopup = (e) => {
    e.preventDefault();
    fetch("https://hackathonserverside.herokuapp.com/appData/", {
      method: "POST",
      body: JSON.stringify(helpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setHelpData(iniState);
    alert("Submited");
  };

  const showContactPopup = () => {
    let contactPopup = document.getElementsByClassName(
      "contactUsForm-helpPopup-cont"
    )[0];
    contactPopup.classList.toggle("active");
  };

  const { name, email, tell_us_more } = helpData;

  return (
    <div>
      <div className="contactUsForm-helpPopup-cont">
        <div className="contactUsForm-helpPopup-heading-cont">
          <h3 className="contactUsForm-helpPopup-heading">
            Contact CheapDelivery Support
          </h3>
        </div>
        <form id="contactUsForm-helpPopup">
          <label htmlFor="name-popup">Your name</label>
          <input
            type="text"
            placeholder="Type or click here and say"
            name="name"
            value={name}
            id="name_popup"
            onChange={handleChang}
            onClick={recordSearch}
          />

          <label htmlFor="email-popup">
            Email <span>*</span>
          </label>
          <input
            type="email"
            placeholder="Type or click here and say"
            name="email"
            value={email}
            id="email_popup"
            onChange={handleChang}
            onClick={recordSearchThree}
          />

          <label htmlFor="tell_us_more">
            Tell us more! <span>*</span>
          </label>
          <textarea
            onChange={handleChang}
            onClick={recordSearchTwo}
            name="tell_us_more"
            value={tell_us_more}
            id="tell_us_more_popup"
            cols="30"
            placeholder="Type or click here and say"
            rows="10"
          ></textarea>
          <button onClick={submitHelpPopup}>Send</button>

          <p className="hide thank_you" style={{ color: "green" }}>
            Thank you for contacting us. We will get back to you!
          </p>
        </form>
      </div>
      <div className="helpPopup" onClick={showContactPopup}>
        <i className="far fa-question-circle"></i> Help
      </div>
    </div>
  );
};

export default HelpPop;
