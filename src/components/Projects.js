import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import "animate.css";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import styles from "./Projects.module.css"; // Ensure styles are imported
import { Section } from "./ui/Section";

export const Projects = () => {
  const projects = [
    {
      title: "Personal Kanban",
      description:
        "Following a Udemy React/Spring course, I built a personal Kanban.",
      imgUrl: projImg5,
      url: "https://github.com/MounirGithub/PersonnalKanbanTool",
      tags: ["React", "Spring", "Kanban"],
    },
    {
      title: "Portfolio",
      description: "You are currently viewing my portfolio.",
      imgUrl: projImg1,
      url: "https://github.com/MounirGithub/contact-me-app",
      tags: ["React", "Bootstrap"],
    },
    {
      title: "Card Game Service",
      description:
        "Developed a Spring web service exposing endpoints to draw and sort cards.",
      imgUrl: projImg2,
      url: "https://github.com/MounirGithub/cardGame",
      tags: ["Spring", "REST"],
    },
    {
      title: "Billing Tool for a DVD Store",
      description: "Developed a Spring web service.",
      imgUrl: projImg3,
      url: "https://github.com/MounirGithub/facturation",
      tags: ["Spring", "Billing"],
    },
    {
      title: "Vision App",
      description: "Built a React UI to train eye tracking.",
      imgUrl: projImg4,
      url: "https://github.com/MounirGithub/vision-app",
      tags: ["React", "UX"],
    },
  ];

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
      { root: null, threshold: [0, 0.2, 0.9, 1] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="projects"
      title="Projects"
      description="Swipe left or right to view more projects"
      className="project"
    >
      <Container>
        <Row>
          <Col>
            <div
              ref={contentRef}
              className={`${styles.fadeWrap} ${visible ? styles.visible : ""}`}
            >
              <div className={styles.swiperButtons}>
                <button className="swiper-button-prev"></button>
                <button className="swiper-button-next"></button>
              </div>
              <Swiper
                spaceBetween={16}
                slidesPerView={4}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  600: { slidesPerView: 2 },
                  900: { slidesPerView: 4 },
                }}
                modules={[Navigation]}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <ProjectCard {...project} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </Section>
  );
};
