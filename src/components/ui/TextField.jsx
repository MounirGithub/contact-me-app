import React, { forwardRef } from "react";
import styles from "./TextField.module.css";

export const TextField = forwardRef(function TextField(
  { label, error, as = "input", className = "", ...props },
  ref
) {
  const InputTag = as;
  const classes = [styles.input, error ? styles.error : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={styles.field}>
      {label && <label className={styles.label}>{label}</label>}
      <InputTag ref={ref} className={classes} {...props} />
      {error && <div className={styles.feedback}>{error}</div>}
    </div>
  );
});

export default TextField;
