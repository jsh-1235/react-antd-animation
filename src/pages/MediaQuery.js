import styles from "./Common.module.css";

import React, { useState, useEffect } from "react";

import SideMenu, { getItem } from "../components/SideMenu";
import Painter from "../components/Painter";

import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

import Basic from "../mediaQuery/Basic";

const group = "Keyframes";

const menu = [{ key: "1", label: "Basic" }];

const items = [
  getItem(
    group,
    <AppstoreOutlined />,
    group,
    menu.map((item, index) => getItem(item.key, <SettingOutlined />, item.label)),
    group
  ),
];

export default function MediaQuery() {
  const [url, setURL] = useState({
    key: Number(menu[0].key) - 1,
    title: menu[0].label,
  });

  useEffect(() => {
    return () => {};
  }, []);

  const onSelect = (key) => {
    setURL({
      key: Number(key) - 1,
      title: menu[Number(key) - 1].label,
    });
  };

  useEffect(() => {}, [url]);

  const pages = [<Basic url={url} />];

  return (
    <>
      <SideMenu items={items} onSelect={onSelect} />
      <Painter pages={pages} url={url} />
    </>
  );
}
