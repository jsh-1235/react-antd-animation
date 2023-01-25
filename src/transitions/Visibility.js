import styles from "./Visibility.module.css";

import React, { useState, useEffect } from "react";

import { Button, Space, Divider } from "antd";

export default function Translate({ url }) {
  const [visible, setVisible] = useState(true);

  const handleClick = (target) => {
    if (target === "show") {
      setVisible(true);
    } else {
      setVisible(false);
    }

    // console.log(target, visible);
  };

  useEffect(() => {
    console.log("visible", visible);
  }, [visible]);

  const hide = !visible
    ? {
        // display: "none",
        width: "0px",
        height: "0px",
        transitionDuration: "1s",
      }
    : null;

  return (
    <div className={styles.root}>
      <div className={styles.menu}>
        <Space align="center" direction="horizontal" split={<Divider type="vertical" />} wrap>
          <Button type="primary" className={styles.btn} danger name="show" disabled={visible} onClick={(e) => handleClick("show")}>
            Show
          </Button>
          <Button type="primary" className={styles.btn} danger name="hide" disabled={!visible} onClick={(e) => handleClick("hide")}>
            Hide
          </Button>
        </Space>
      </div>
      <Divider></Divider>
      <div className={`${styles.rounded} ${styles.image}`} style={hide}></div>
      <Divider></Divider>
      <div className={`${!visible && styles.effect} ${styles.image}`}></div>
    </div>
  );
}
