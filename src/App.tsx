import * as React from "react";

import { Wizard } from "react-use-wizard";
import Step1 from "./Step1";
import { Box, Typography } from "@mui/material";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Timer from "./Timer";
import { ReactNode, useEffect, useState } from "react";

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
        <Step1 setCurrentStep={setCurrentStep} />
        <Step2 setCurrentStep={setCurrentStep} />
        <Step3 setCurrentStep={setCurrentStep} />
        <Step4 setCurrentStep={setCurrentStep} />
      </WizardWithCount>
    </Box>
  );
};

export default App;
