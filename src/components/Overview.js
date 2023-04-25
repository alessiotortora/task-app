import React from "react";

const Overview = (props) => {
  return (
    <div>
      {props.list.map((item, index) => (
        <p key={index} >{item}</p>
      ))}
    </div>
  );
};

export default Overview;
