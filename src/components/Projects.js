import { Col, Container, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export const Projects = () => {
	const projects = [
		{
			title: "Kanban personnel",
			description: "Suite à une formation Udemy React/Spring, j'ai appris à developper un Kanban",
			imgUrl: projImg5,
			url: "https://github.com/MounirGithub/PersonnalKanbanTool",
		},
		{
			title: "Portfolio",
			description: "Vous êtes actuellement sur mon portfolio",
			imgUrl: projImg1,
			url: "https://github.com/MounirGithub/contact-me-app",
		},
		{
			title: "Jeux de cartes",
			description: "Développement d'un service web Spring qui expose un ENDPoint pour tirer des cartes ou les trier",
			imgUrl: projImg2,
			url: "https://github.com/MounirGithub/cardGame",
		},
		{
			title: "Outil de facturation dans un magasin de DVD",
			description: "Développement d'un service web Spring",
			imgUrl: projImg3,
			url: "https://github.com/MounirGithub/facturation",
		},
		{
			title: "Vision App",
			description: "Développement d'une IHM react pour entrainer les yeux",
			imgUrl: projImg4,
			url: "https://github.com/MounirGithub/vision-app",
		},
	];

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col>
						<div ref={ref} className={inView ? "animate__animated animate__fadeInRight" : ""}>
							<h2>Projects</h2>
							<p>Swipe left or right to view more projects</p>
							<Swiper
								spaceBetween={50}
								slidesPerView={3}
								navigation
								scrollbar={{ draggable: true }}
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
			<img className="background-image-right" src={colorSharp2} alt=""></img>
		</section>
	);
};
