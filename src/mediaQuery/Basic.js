import React from "react";

import styled from "styled-components";

const BREAK_POINT_PC = 1200;
const BREAK_POINT_MOBILE = 768;

const calcWidthPercent = (width) => {
  console.log("width", width);

  if (!width) {
    return;
  } else {
    return width;
  }
};

const Col = styled.div`
  float: left;
  color: white;
  padding: 1rem;

  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
    background: red;
  }

  // BREAK_POINT_TABLET
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) and (max-width: ${BREAK_POINT_PC}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
    background: green;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${BREAK_POINT_PC(sm)}%`};
    background: blue;
  }
`;

export default function Basic({ url }) {
  return <Col>미디어 쿼리는 단말기의 유형(출력물 vs. 화면)과, 어떤 특성이나 수치(화면 해상도, 뷰포트 너비 등)에 따라 웹 사이트나 앱의 스타일을 수정할 때 유용합니다.</Col>;
}
