"use client";
import React from "react";
import A2bTailwindStyle from "./A2bTailwindStyle";
const A2bStyle = () => {
  return (
    <>
      <style jsx>{`
        li,
        ol,
        ul {
          list-style-type: none;
        }
        .stars {
          --percent: calc(var(--rating) / 5 * 91%);
          text-align: center;
        }
        .stars::before {
          content: "★★★★★";
          letter-spacing: 8px;
          background: linear-gradient(
            90deg,
            #f8c41c var(--percent),
            #fff var(--percent)
          );
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: #f8c41c 1px;
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
      <A2bTailwindStyle />
    </>
  );
};

export default A2bStyle;
