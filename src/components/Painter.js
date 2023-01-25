import styles from "./Painter.module.css";

import React, { useState, useEffect } from "react";

// import Bounce from "../keyframes/Bounce";
// import Rotate from "../keyframes/Rotate";
// import Translate from "../keyframes/Translate";

export default function Painter({ ...props }) {
  const [html, setHTML] = useState("");

  useEffect(() => {
    // console.log(props);

    return () => {};
  }, []);

  useEffect(() => {
    console.log(props);

    return () => {};
  }, [props.url]);

  console.log(props.url.key);

  // const pages = [<Bounce url={props.url} />, <Rotate url={props.url} />, <Translate url={props.url} />];

  return <div className={styles.painter}>{props.pages[props.url.key]}</div>;
}
