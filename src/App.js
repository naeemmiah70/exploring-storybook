import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Heading from "./components/Heading/Heading";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <Card
        height="300px"
        width="200px"
        backgroundColor="black"
        borderRadius="10px"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Heading
            label="User engagement"
            color="#FFFFFF"
            fontSize="16px"
            fontWeight={700}
          ></Heading>
          <Tooltip
            label="Tooltip Text"
            color="gray"
            backgroundColor="white"
          ></Tooltip>
        </div>
      </Card>
    </div>
  );
}

export default App;
