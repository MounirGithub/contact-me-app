import { Col, Container, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
	const projects = [
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
		{
			title: "Kanban personnel",
			description: "Suite à une formation Udemy React/Spring, j'ai appris à developper un Kanban",
			imgUrl: projImg5,
			url: "https://github.com/MounirGithub/PersonnalKanbanTool",
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col>
						<TrackVisibility once>
							{({ isVisible }) =>
								<div className={isVisible ? "animate__animated" : ""}>
									<h2>Réalisations</h2>

									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Row>
											{projects.map((project, index) => {
												return <ProjectCard key={index} {...project} />;
											})}
										</Row>
									</Tab.Container>
								</div>
							}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2} alt=""></img>
		</section>
	);
};
