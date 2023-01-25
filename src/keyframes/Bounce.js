import styles from "./Bounce.module.css";

import React from "react";

export default function Bounce({ url }) {
  return (
    <div>
      <div className={styles.ball_small}></div>
      <div className={styles.ball_middle}></div>
      <div className={styles.ball_large}></div>
    </div>
  );
}
