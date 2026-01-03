import { useState } from "react";
import "./Css/contactFeedback.css";

function ContactFeedback() {
  const [activeForm, setActiveForm] = useState("contact");

  return (
    <div className="cf-container">
      <div className="cf-card">

        {/* LEFT PANEL */}
        <div className="cf-left">
          {activeForm === "contact" ? (
            <>
              <h2>Have Feedback?</h2>
              <p>
                Your feedback helps us improve.  
                Click below to share your thoughts.
              </p>
              <button onClick={() => setActiveForm("feedback")}>
                FEEDBACK FORM
              </button>
            </>
          ) : (
            <>
              <h2>Need Help?</h2>
              <p>
                Have any questions?  
                Contact us and we will reach you soon.
              </p>
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
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">SEND MESSAGE</button>
              </form>
            </>
          ) : (
            <>
              <h2>Feedback</h2>
              <form>
                <input type="text" placeholder="Your Name" />
                <select>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Average</option>
                  <option>Poor</option>
                </select>
                <textarea placeholder="Your Feedback"></textarea>
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
