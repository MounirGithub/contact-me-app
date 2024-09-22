import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col >
            <Link to={url}>
                <div className="proj-imgbx">

                    <img src={imgUrl} alt="" />

                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Link>
        </Col>
    )
}