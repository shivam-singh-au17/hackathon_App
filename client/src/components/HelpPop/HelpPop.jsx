import React from "react";
import "./HelpPop.css";

const HelpPop = () => {

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

  const submitHelpPopup = (e) => {
    e.preventDefault();
    const form = document.getElementById("contactUsForm-helpPopup");
    let name_popup = form.name_popup.value;
    let email_popup = form.email_popup.value;
    let type_popup = form.type_popup.value;
    let tell_us_more_popup = form.tell_us_more_popup.value;
    if (name_popup === "") {
      alert("Please Type your name");
    } else if (email_popup === "") {
      alert("Please Type your email");
    } else if (type_popup === "") {
      alert("Please select a type");
    } else if (tell_us_more_popup === "") {
      alert("Please tell us more");
    } else {
      form.name_popup.value = "";
      form.email_popup.value = "";
      form.type_popup.value = "";
      form.tell_us_more_popup.value = "";
      document.getElementsByClassName("thank_you")[0].classList.toggle("hide");
    }
  };

  const showContactPopup = () => {
    let contactPopup = document.getElementsByClassName(
      "contactUsForm-helpPopup-cont"
    )[0];
    contactPopup.classList.toggle("active");
  };

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
            name="name"
            id="name_popup"
            onClick={recordSearch}
          />

          <label htmlFor="email-popup">
            Email <span>*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email_popup"
            onClick={recordSearchThree}
          />

          <label htmlFor="tell-us-more">
            Tell us more! <span>*</span>
          </label>
          <textarea
            onClick={recordSearchTwo}
            name="tell-us-more"
            id="tell_us_more_popup"
            cols="30"
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
