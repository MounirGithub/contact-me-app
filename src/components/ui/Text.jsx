import React from "react";
import styles from "./Typography.module.css";

export const Text = ({
  variant = "body",
  className = "",
  children,
  as = "p",
  ...props
}) => {
  const Comp = as;
  const classes = [styles[variant], className].filter(Boolean).join(" ");
  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
};

export default Text;
