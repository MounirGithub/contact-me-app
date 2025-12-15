import React from "react";
import styles from "./Section.module.css";

export const Section = ({
  id,
  title,
  description,
  children,
  className = "",
  titleAlign = "left",
}) => {
  const headerClasses = [
    styles.header,
    titleAlign === "center" ? styles.center : "",
  ]
    .filter(Boolean)
    .join(" ");
  const titleClasses = [
    styles.title,
    titleAlign === "center" ? styles.center : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <section
      id={id}
      className={[styles.section, className].filter(Boolean).join(" ")}
    >
      <div className={headerClasses}>
        {title && <h2 className={titleClasses}>{title}</h2>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {children}
    </section>
  );
};

export default Section;
