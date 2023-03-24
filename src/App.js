import React from "react";
import "./App.css";
import UserEngagement from "./components/graphs/UserEngagement/UserEngagement";
import TotalVsEngaged from "./components/graphs/TotalVsEngaged/TotalVsEngaged";
import QuartileGraph from "./components/graphs/QuartileGraph/QuartileGraph";
import SevenSession from "./components/graphs/SevenSession/SevenSession";

function App() {
  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <div>
          {" "}
          <UserEngagement></UserEngagement>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <TotalVsEngaged></TotalVsEngaged>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <QuartileGraph></QuartileGraph>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <SevenSession></SevenSession>
      </div>
    </section>
  );
}

export default App;
