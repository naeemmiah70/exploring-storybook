import React from "react";
import Card from "../../storybookComponents/Card/Card";
import Heading from "../../storybookComponents/Heading/Heading";
import Tooltip from "../../storybookComponents/Tooltip/Tooltip";
import AttensionSpan from "../../storybookComponents/AttensionSpan/AttensionSpan";
import EngagementSpan from "../../storybookComponents/EnagagementSpan/EnagagementSpan";

const EngagementAndAttension = () => {
  return (
    <div>
      <Card width="950px" height="236px">
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <Heading label="Engagement and Attension"></Heading>
          <div style={{ marginLeft: "10px" }}>
            <Tooltip label="Tooltip text" />
          </div>
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: "35%" }}>
            <AttensionSpan
              value={[18, 20, 15, 15, 10]}
              pathColor="#1974CE"
              trailColor="#141415"
              textColor="#FFFFFF"
              height={8}
            ></AttensionSpan>
          </div>

          <div
            style={{
              width: "25%",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div className="middle-border">
                <Heading
                  label="Average Attention Span"
                  color="#FFFFFF"
                  fontWeight={400}
                  fontSize="12px"
                ></Heading>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                    gap: "5px",
                  }}
                >
                  <Heading
                    label="13.9"
                    color="#1974CE"
                    fontSize="24px"
                  ></Heading>
                  <Heading
                    label="minutes"
                    color="#1974CE"
                    fontSize="16px"
                    fontWeight={400}
                  ></Heading>
                </div>
              </div>

              <div>
                <Heading
                  label="Average Engagement"
                  color="#FFFFFF"
                  fontSize="12px"
                  fontWeight={400}
                ></Heading>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px",
                    gap: "5px",
                  }}
                >
                  <Heading
                    label="67.2"
                    color="#1974CE"
                    fontSize="24px"
                    fontWeight={500}
                  ></Heading>
                  <Heading
                    label="%"
                    color="#1974CE"
                    fontSize="16px"
                    fontWeight={400}
                  ></Heading>
                </div>
              </div>
            </div>
          </div>
          <div>
            <EngagementSpan
              value={[80, 73, 64, 63, 61]}
              height={8}
              pathColor="#1974CE"
              trailColor="#141415"
              textColor="#FFF"
            ></EngagementSpan>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EngagementAndAttension;
