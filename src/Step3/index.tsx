import { ChangeEvent, FC, useEffect, useState } from "react";

import { Stack, TextField, Typography } from "@mui/material";

import ButtonGroup from "../ButtonGroup";
import { StepProps } from "../types";

const Step3: FC<StepProps> = ({ setCurrentStep }) => {
  const [value, setValue] = useState<string | null>(
    localStorage.getItem("step3")
  );

  useEffect(() => {
    localStorage.setItem("step3", value || "");
  }, [value]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };
  return (
    <Stack>
      <Typography variant="h5" sx={{ textAlign: "left" }}>
        {"Какой тег используется для создания ссылки в HTML?"}
      </Typography>
      <TextField
        onChange={(event) => {
          handleChange(event);
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

export default Step3;
