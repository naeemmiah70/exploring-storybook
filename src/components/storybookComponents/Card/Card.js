import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ children, width, height, backgroundColor, borderRadius }) => {
  const style = {
    height: height,
    width: width,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
  };
  return (
    <div style={style} className="card-style">
      {children}
    </div>
  );
};

Card.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default Card;
