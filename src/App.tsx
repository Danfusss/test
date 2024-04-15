import { ReactNode, useEffect, useState } from "react";
import * as React from "react";

import { Wizard } from "react-use-wizard";

import { Box, Typography } from "@mui/material";

import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Timer from "./components/Timer";

interface WizardWithCountProps {
  children: ReactNode;
  currentStep: number;
}

function WizardWithCount({ children, currentStep }: WizardWithCountProps) {
  const childrenCount = React.Children.count(children);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "25vw",
          height: "2vh",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {Array.from({ length: childrenCount }, (_, index) => (
          <Box
            key={index}
            sx={{
              width: "4vw",
              height: "1vh",
              backgroundColor: index < currentStep ? "red" : "gray",
            }}
          ></Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Wizard>{children}</Wizard>
      </Box>
    </Box>
  );
}

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    console.log(currentStep);
  }, [currentStep]);
  return (
    <Box
      sx={{
        width: "45vw",
        height: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          width: "22vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">{"Тестирование"}</Typography>
        <Timer />
      </Box>
      <WizardWithCount currentStep={currentStep}>
        <Question1 setCurrentStep={setCurrentStep} />
        <Question2 setCurrentStep={setCurrentStep} />
        <Question3 setCurrentStep={setCurrentStep} />
        <Question4 setCurrentStep={setCurrentStep} />
      </WizardWithCount>
    </Box>
  );
};

export default App;
