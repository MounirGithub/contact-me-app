import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import { TypeAnimation } from "react-type-animation";
import { BrowserView, isBrowser } from "react-device-detect";
import { useEffect, useRef, useState } from "react";
import { Popup } from "./Popup";
import { Button } from "./ui/Button";
import { Text } from "./ui/Text";
import styles from "./Banner.module.css";

export const Banner = () => {
  const px = isBrowser ? "65px" : "30px";

  const [showPopup, setShowPopup] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
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

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className="banner" id="home" ref={sectionRef}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div
              className={`${styles.fadeWrapLeft} ${
                visible ? styles.visible : ""
              }`}
            >
              <div className="tagline">Welcome to my space</div>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">{`Hello! I am`}</h1>
              <TypeAnimation
                sequence={[
                  "Mounir", // Types 'One'
                  200, // Waits 2s
                  "BENABDERRAHMANE", // Deletes 'One' and types 'Two'
                  400, // Waits 3ms
                  "R&D engineer",
                  200,
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className={styles.titleAnim}
                style={{ fontSize: px }}
              />
              <Text variant="lead">
                I am a research and development engineer passionate about
                software development. I know different things in different
                fields and apply this knowledge in my daily life, not only at
                work but also in every activity I do in my life! I am delighted
                to share with you my journey as an R&D engineer and a sports and
                manga enthusiast.
              </Text>
              <Button variant="secondary" onClick={togglePopup}>
                Download CV
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div
              className={`${styles.fadeWrapRight} ${
                visible ? styles.visible : ""
              }`}
            >
              <BrowserView>
                <img src={headerImg} alt="Header" />
              </BrowserView>
            </div>
          </Col>
        </Row>
      </Container>
      <Popup show={showPopup} onClose={togglePopup}></Popup>
    </section>
  );
};
