import React from "react";
import Card from "../../storybookComponents/Card/Card";
import Heading from "../../storybookComponents/Heading/Heading";
import Tooltip from "../../storybookComponents/Tooltip/Tooltip";

const UserEngagement = () => {
  return (
    <div>
      <Card
        height="240px"
        width="197px"
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

        <div
          style={{
            width: "100%",
            height: "90%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div>
              <div className="middle-border">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                    gap: "5px"
                  }}
                >
                  <Heading
                    label="450"
                    color="#1974CE"
                    fontSize="20px"
                  ></Heading>
               
                    <Heading
                      label="Hrs"
                      color="#1974CE"
                      fontSize="13px"
                      fontWeight={400}
                    ></Heading>
                 
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Heading
                    label="11"
                    color="#3F9729"
                    fontSize="20px"
                  ></Heading>
                  <Heading
                    label="%"
                    color="#3F9729"
                    fontSize="16px"
                    fontWeight={500}
                  ></Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserEngagement;
