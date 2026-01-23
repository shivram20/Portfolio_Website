import { useState } from "react";
import "./Css/contactFeedback.css";
import api from "../api/axios";

function ContactFeedback() {
  const [activeForm, setActiveForm] = useState("contact");

  // CONTACT FORM STATE
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // FEEDBACK FORM STATE
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    rating: "Excellent",
    feedback: "",
  });

  // CONTACT SUBMIT
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/contact", contactData);
      if (res.data.message === "success") {
        alert("Message sent successfully! We will get back to you soon.");
        setContactData({
          name: "",
          email: "",
          message: "",
        });
      } else if ((res.data.message === "emailsended")) {
        alert("Thank You for Contact Request");
      } else {
        alert("server error try again..");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // FEEDBACK SUBMIT
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/feedback", feedbackData);
      if (res.data.message === "suceess") {
        alert("Feedback sent successfully! Thanks for your feedback.");
        setFeedbackData({
          name: "",
          rating: "Excellent",
          feedback: "",
        });
      } else {
        alert("Feedback Not sent Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cf-container">
      <div className="cf-card">
        {/* LEFT PANEL */}
        <div className="cf-left">
          {activeForm === "contact" ? (
            <>
              <h2>Have Feedback?</h2>
              <button onClick={() => setActiveForm("feedback")}>
                FEEDBACK FORM
              </button>
            </>
          ) : (
            <>
              <h2>Need Help?</h2>
              <button onClick={() => setActiveForm("contact")}>
                CONTACT US
              </button>
            </>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="cf-right">
          {activeForm === "contact" ? (
            <>
              <h2>Contact Us</h2>
              <form onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactData.name}
                  onChange={(e) =>
                    setContactData({ ...contactData, name: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={contactData.message}
                  onChange={(e) =>
                    setContactData({ ...contactData, message: e.target.value })
                  }
                  required
                ></textarea>
                <button type="submit">SEND MESSAGE</button>
              </form>
            </>
          ) : (
            <>
              <h2>Feedback</h2>
              <form onSubmit={handleFeedbackSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={feedbackData.name}
                  onChange={(e) =>
                    setFeedbackData({ ...feedbackData, name: e.target.value })
                  }
                  required
                />
                <select
                  onChange={(e) =>
                    setFeedbackData({ ...feedbackData, rating: e.target.value })
                  }
                  value={feedbackData.rating}
                  required
                >
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Average</option>
                  <option>Poor</option>
                </select>
                <textarea
                  placeholder="Your Feedback"
                  value={feedbackData.feedback}
                  onChange={(e) =>
                    setFeedbackData({
                      ...feedbackData,
                      feedback: e.target.value,
                    })
                  }
                  required
                ></textarea>
                <button type="submit">SUBMIT FEEDBACK</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactFeedback;
