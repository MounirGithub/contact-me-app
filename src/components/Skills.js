import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/react-2.svg";
import spring from "../assets/img/spring-3.svg";
import mysql from "../assets/img/mysql-logo.svg";
import js from "../assets/img/logo-javascript.svg";
import angular from "../assets/img/angular-icon.svg";
import java from "../assets/img/java.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Section } from "./ui/Section";
import styles from "./Skills.module.css";
import { useEffect, useRef, useState } from "react";

export const Skills = () => {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef(null);

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
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { img: java, name: "Java" },
    { img: js, name: "JavaScript" },
    { img: spring, name: "Spring Boot" },
    { img: mysql, name: "MySQL Databases" },
    { img: react, name: "React" },
    { img: angular, name: "Angular" },
    { img: null, name: "TypeScript" },
    { img: null, name: "Node.js" },
    { img: null, name: "Express" },
    { img: null, name: "REST APIs" },
    { img: null, name: "Testing" },
    { img: null, name: "CI/CD" },
    { img: null, name: "Git/GitHub" },
    { img: null, name: "Docker" },
  ];

  return (
    <Section id="skills" title="Skills" className="skill" titleAlign="center">
      <Container>
        <Row>
          <Col>
            <div
              ref={contentRef}
              className={`${styles.fadeWrap} ${visible ? styles.visible : ""}`}
            >
              <div className={styles.skillBx}>
                <p>
                  Over the years, I have explored various aspects of computing.
                  I have gained knowledge through different projects and learned
                  to use many technologies. As a full-stack developer, I have
                  worked on both front-end and back-end projects. Additionally,
                  I have delved into research, language processing, and the
                  development of parsers and new languages. I have experience
                  with some of the most popular programming technologies. Feel
                  free to contact me if you have any questions about my
                  experience.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className={styles.slider}
                >
                  {skills.map((skill, index) => (
                    <div className={styles.item} key={index}>
                      <div className={styles.iconWrap}>
                        {skill.img ? (
                          <img src={skill.img} alt={skill.name} />
                        ) : (
                          <span className={styles.badge}>{skill.name[0]}</span>
                        )}
                      </div>
                      <h5 className={styles.name}>{skill.name}</h5>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </Section>
  );
};
