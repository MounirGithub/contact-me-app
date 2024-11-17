import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import { TypeAnimation } from 'react-type-animation';
import { BrowserView, isBrowser } from 'react-device-detect';
import { useState } from 'react';
import { Popup } from './Popup';


export const Banner = () => {
    const px = isBrowser ? "65px" : "30px";

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="animate__animated animate__fadeInLeft">
                            <div className="tagline">Welcome to my space</div>
                            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">{`Hello! I am`}</h1>
                            <TypeAnimation
                                sequence={[
                                    'Mounir', // Types 'One'
                                    200, // Waits 2s
                                    'BENABDERRAHMANE', // Deletes 'One' and types 'Two'
                                    400, // Waits 3ms
                                    'R&D engineer',
                                    200,
                                    () => {
                                        console.log('Sequence completed');
                                    },
                                ]}
                                wrapper="h2"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: px, display: 'inline-block', color: '#ff6347', fontWeight: 'bold' }}
                            />
                            <p>I am a research and development engineer passionate about software development. I know different things in different fields and apply this knowledge in my daily life, not only at work but also in every activity I do in my life! I am delighted to share with you my journey as an R&D engineer and a sports and manga enthusiast.
                            </p>
                            <button className="btn btn-secondary" onClick={togglePopup}>
                                Download CV
                            </button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="animate__animated animate__fadeInRight">
                            <BrowserView>
                                <img src={headerImg} alt="Header" />
                            </BrowserView>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Popup show={showPopup} onClose={togglePopup}>
            </Popup>
        </section>
    )
}