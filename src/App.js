import React from "react";
import "./App.css";
import UserEngagement from "./components/graphs/UserEngagement/UserEngagement";
import TotalVsEngaged from "./components/graphs/TotalVsEngaged/TotalVsEngaged";

function App() {
  return (
    <section
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <div>
        {" "}
        <UserEngagement></UserEngagement>
      </div>
      <div style={{marginLeft:"15px"}}>
        <TotalVsEngaged></TotalVsEngaged>
      </div>
    </section>
  );
}

export default App;
