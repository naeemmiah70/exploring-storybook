import React from "react";
import "./App.css";
import UserEngagement from "./components/graphs/UserEngagement/UserEngagement";
import TotalVsEngaged from "./components/graphs/TotalVsEngaged/TotalVsEngaged";
import QuartileGraph from "./components/graphs/QuartileGraph/QuartileGraph";
import TopSevenSession from "./components/graphs/TopSevenSession/TopSevenSession";
import EnagementCorrelations from "./components/graphs/EngagementCorrelations/EnagementCorrelations";
import LastSevenSession from "./components/graphs/LastSevenSession/LastSevenSession";

function App() {
  return (
    <section style={{backgroundColor:"#141415"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
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
          marginTop: "15px",
        }}
      >
        <div>
          <div>
            <TopSevenSession></TopSevenSession>
          </div>
          <div style={{ marginTop: "15px" }}>
            <LastSevenSession></LastSevenSession>
          </div>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <EnagementCorrelations></EnagementCorrelations>
        </div>
      </div>
    </section>
  );
}

export default App;
