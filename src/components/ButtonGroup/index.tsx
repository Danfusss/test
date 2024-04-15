import { FC } from "react";

import { useWizard } from "react-use-wizard";

import { Box, Button } from "@mui/material";

import { StepProps } from "../../types";

const ButtonGroup: FC<StepProps> = ({ setCurrentStep }) => {
  const { previousStep, nextStep } = useWizard();

  return (
    <Box
      sx={{
        marginTop: "2rem",
        width: "25vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        sx={{
          width: "11vw",
          height: "3vh",
          color: "white",
          backgroundColor: "red",
          fontSize: "0.7rem",
          fontWeight: 500,
          lineHeight: "1rem",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
        onClick={() => {
          previousStep();
          setCurrentStep((oldValue: number) => oldValue - 1);
        }}
      >
        {`Предыдущий вопрос`}
      </Button>
      <Button
        sx={{
          width: "11vw",
          height: "3vh",
          color: "white",
          backgroundColor: "red",
          fontSize: "0.7rem",
          fontWeight: 500,
          lineHeight: "1rem",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
        onClick={() => {
          nextStep();
          setCurrentStep((oldValue: number) => oldValue + 1);
        }}
      >
        {`Следующий вопрос`}
      </Button>
    </Box>
  );
};

export default ButtonGroup;
