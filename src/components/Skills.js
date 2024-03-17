import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/react-2.svg";
import spring from "../assets/img/spring-3.svg";
import mysql from "../assets/img/mysql-logo.svg";
import js from "../assets/img/logo-javascript.svg";
import angular from "../assets/img/angular-icon.svg";
import java from "../assets/img/java.svg";

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>"Au fil des années, j'ai vu plusieurs aspects du monde de l'informatique.
                Des connaissances différentes m'ont été transmis autour de projets
                différents, et j'ai pu apprendre à utiliser de nombreuses technologies.
                Je suis un développeur full-stack, j'ai travaillé sur
                des projets de front-end et de back-end, mais pas que, j'ai experimenté aussi le coté
                recherche, le traitement des langages et developpement des parsers et de nouveaux langages.
                J'ai travaillé avec
                quelques-unes des technologies de programmation les plus populaires
                (actuellement), mais il y a certainement beaucoup de
                choses que j'ai oublié de mentionner ici, alors n'hésitez pas à me
                contacter si vous avez des questions concernant mon expérience."</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={java} alt="" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={js} alt="" />
                  <h5>Javascprit</h5>
                </div>
                <div className="item">
                  <img src={spring} alt="" />
                  <h5>Spring Boot</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="" />
                  <h5>MySQL Databases</h5>
                </div>
                <div className="item">
                  <img src={react} alt="" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={angular} alt="" />
                  <h5>Angular</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}