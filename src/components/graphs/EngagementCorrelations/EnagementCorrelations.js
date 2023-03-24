import React from "react";
import Card from "../../storybookComponents/Card/Card";
import Heading from "../../storybookComponents/Heading/Heading";
import Tooltip from "../../storybookComponents/Tooltip/Tooltip";

const EnagementCorrelations = () => {
  return (
    <Card width="452px" height="649px">
      <div style={{ display: "flex" }}>
        <Heading label="Engagement Correlations"></Heading>
        <div style={{ marginLeft: "10px" }}>
          <Tooltip label="Tooltip text" />
        </div>
      </div>
    </Card>
  );
};

export default EnagementCorrelations;
