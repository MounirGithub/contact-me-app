import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import TextField from "../components/ui/TextField";
import Button from "../components/ui/Button";
import styles from "./ContactForm.module.css";

export const ContactForm = ({ firstItemRef }) => {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message, website } = data;
    // Simple honeypot: if hidden field is filled, drop silently
    if (website) {
      return toggleAlert("Submission blocked (spam detected).", "warning");
    }
    try {
      setDisabled(true);
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        { name, email, subject, message },
        process.env.REACT_APP_USER_ID
      );
      toggleAlert("Form submission was successful!", "success");
      reset();
    } catch (e) {
      console.error(e);
      const msg = e?.message || "Uh oh. Something went wrong.";
      toggleAlert(msg, "danger");
    } finally {
      setDisabled(false);
    }
  };

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting && entry.intersectionRatio > 0.2);
      },
      { root: null, threshold: [0, 0.2, 0.5, 1] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Container
      className={`ContactForm d-flex justify-content-center ${styles.container}`}
      style={{ minHeight: "80vh" }}
      ref={firstItemRef}
    >
      <Row className="justify-content-center">
        <Col md={12}>
          <div
            ref={contentRef}
            className={`${styles.fadeWrap} ${visible ? styles.visible : ""}`}
          >
            <div className={styles.box}>
              <h2 className={styles.title}>Contact Me</h2>
              <Form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className={styles.form}
              >
                <Row className="mb-3">
                  <Col md={6}>
                    <TextField
                      label="Name"
                      placeholder="Enter your name"
                      {...register("name", {
                        required: "Please enter your name",
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      error={errors.name?.message}
                    />
                  </Col>
                  <Col md={6}>
                    <TextField
                      label="Email address"
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Please enter a valid email address",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      error={errors.email?.message}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formReason">
                      <Form.Label>Reason</Form.Label>
                      <Form.Select
                        aria-label="Contact reason"
                        {...register("reason")}
                      >
                        <option value="">Select a reason</option>
                        <option value="hire">Hire / Opportunity</option>
                        <option value="collab">Collaboration</option>
                        <option value="question">Question</option>
                        <option value="other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <TextField
                      label="Subject"
                      placeholder="Enter subject"
                      {...register("subject", {
                        required: "Please enter a subject",
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      error={errors.subject?.message}
                    />
                  </Col>
                </Row>
                <TextField
                  label="Message"
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  {...register("message", {
                    required: "Please enter a message",
                  })}
                  error={errors.message?.message}
                />
                {/* Honeypot field (hidden to real users) */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  {...register("website")}
                  className={styles.honeypot}
                />
                <div className={styles.actions}>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={disabled}
                    aria-disabled={disabled}
                  >
                    {disabled ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="ms-2">Sending…</span>
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
          {alertInfo.display && (
            <Alert
              variant={alertInfo.type}
              className="mt-4"
              onClose={() =>
                setAlertInfo({ display: false, message: "", type: "" })
              }
              dismissible
            >
              {alertInfo.message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};
