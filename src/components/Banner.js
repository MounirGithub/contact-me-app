import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { TypeAnimation } from 'react-type-animation';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility once>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                    <span className="tagline">Bienvenue dans mon espace</span>
                                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">{`Bonjour! Je suis`}</h1>
                                    <TypeAnimation
                                        sequence={[
                                            'Mounir', // Types 'One'
                                            200, // Waits 2s
                                            'BENABDERRAHMANE', // Deletes 'One' and types 'Two'
                                            400, // Waits 3ms
                                            'ingénieur en R&D',
                                            200,
                                            () => {
                                                console.log('Sequence completed');
                                            },
                                        ]}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                        style={{ fontSize: '65px', display: 'inline-block' }}
                                    />
                                    <p>Je suis un ingénieur de recherche et développement passionné par le développement de logiciels, je connais différentes choses dans différents domaines et j'applique ces connaissances dans ma vie de tous les jours, non seulement au travail mais aussi dans chaque activité que je fais dans ma vie ! Je suis ravi de partager avec vous mon parcours en tant qu'ingénieur R&D et un passionné de sportet des mangas.
                                    </p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}