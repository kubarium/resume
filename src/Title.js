import React from "react";
import ReactHtmlParser from "react-html-parser";

const Title = props => {
  return (
    <h3 className="title">
      <span>{ReactHtmlParser(props.primary)}</span>
      <span>{props.secondary}</span>
    </h3>
  );
};

export default Title;
