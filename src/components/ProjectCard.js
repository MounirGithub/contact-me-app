import { Col } from "react-bootstrap";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ title, description, imgUrl, url, tags = [] }) => {
  return (
    <Col>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        <div className={styles.imageWrap}>
          <img src={imgUrl} alt={title} className={styles.image} />
          <div className={styles.overlay}>
            <p className={styles.overlayText}>{description}</p>
          </div>
        </div>
        <div className={styles.content}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
          {Array.isArray(tags) && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((t, i) => (
                <span key={i} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </Col>
  );
};
