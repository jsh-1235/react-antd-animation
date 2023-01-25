import styles from "./Rotate.module.css";

import React from "react";

export default function Rotate({ url }) {
  return (
    <div className={styles.root}>
      <div className={styles.bar}></div>
    </div>
  );
}
