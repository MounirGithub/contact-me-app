import React from "react";
import styles from "./Button.module.css";

export const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
