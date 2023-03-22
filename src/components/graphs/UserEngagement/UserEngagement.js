import React from 'react';
import Card from '../../storybookComponents/Card/Card';
import Heading from '../../storybookComponents/Heading/Heading';
import Tooltip from '../../storybookComponents/Tooltip/Tooltip';

const UserEngagement = () => {
    return (
        <div
        
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
};

export default UserEngagement;