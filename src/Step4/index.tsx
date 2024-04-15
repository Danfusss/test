import { ChangeEvent, FC, useEffect, useState } from "react";

import { Stack, TextField, Typography } from "@mui/material";

import ButtonGroup from "../ButtonGroup";
import { StepProps } from "../types";

const Step4: FC<StepProps> = ({ setCurrentStep }) => {
  const [value, setValue] = useState<string | null>(
    localStorage.getItem("step4")
  );

  useEffect(() => {
    localStorage.setItem("step4", value || "");
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Stack>
      <Typography variant="h5" sx={{ textAlign: "left" }}>
        {
          "Объясните, как работает механизм наследования в JavaScript, сравнивая классовое и прототипное наследование."
        }
      </Typography>
      <TextField
        onChange={() => {
          handleChange;
        }}
        id="standard-multiline-flexible"
        label="Введите ваш вариант ответа"
        multiline
        maxRows={4}
        variant="standard"
      />
      <ButtonGroup setCurrentStep={setCurrentStep} />
    </Stack>
  );
};

export default Step4;
