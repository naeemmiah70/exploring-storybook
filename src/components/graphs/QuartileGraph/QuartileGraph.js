import React from "react";
import Card from "../../storybookComponents/Card/Card";
import Quartile from "../../storybookComponents/Quartile/Quartile";
import Heading from "../../storybookComponents/Heading/Heading";
import Tooltip from "../../storybookComponents/Tooltip/Tooltip";

const QuartileGrapH = () => {
  const labels = [
    "1st Quartile",
    "2nd Quartile",
    "3rd Quartile",
    "4th Quartile",
  ];
  const quater = [82, 65, 65, 50];
  const barColors = ["#8DC0F1", "#5BA4EB", "#328DE6", "#1974CE"];
  return (
    <div>
      <Card width="400px">
        <div style={{ display: "flex" }}>
          <Heading label="Total and Engaged"></Heading>
          <div style={{ marginLeft: "10px" }}>
            <Tooltip label="Tooltip text" />
          </div>
        </div>
        <Quartile
          labels={labels}
          quater={quater}
          barColors={barColors}
          height="215px"
          width="420px"
        ></Quartile>
      </Card>
    </div>
  );
};

export default QuartileGrapH;
