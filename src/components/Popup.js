import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Mypdf from "../assets/file/Mounir.online.pdf";
import styles from "./Popup.module.css";

export const Popup = ({ show, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (show && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [show]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          formData,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setFormSubmitted(true);
            const link = document.createElement("a");
            link.href = Mypdf;
            link.download = "Mounir_Online_CV.pdf";
            link.click();
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
    }
  };

  if (!show) return null;

  return (
    <div className={styles.overlay} role="presentation">
      <div
        className={styles.content}
        role="dialog"
        aria-modal="true"
        aria-label="Download CV"
        tabIndex={-1}
        ref={dialogRef}
      >
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.title}>Download CV</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <div className={styles.actions}>
              <button type="submit" className={styles.primary}>
                Submit
              </button>
              <button
                type="button"
                className={styles.secondary}
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.success}>
            <h2>Success!</h2>
            <p>Thank you! CV is being downloaded.</p>
            <button className={styles.secondary} onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
