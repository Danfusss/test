import { ChangeEvent, FC, useEffect, useState } from "react";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

import ButtonGroup from "../ButtonGroup";
import { StepProps } from "../../types";

const Question1: FC<StepProps> = ({ setCurrentStep }) => {
  const [value, setValue] = useState<string>(
    localStorage.getItem("step1") || ""
  );

  useEffect(() => {
    localStorage.setItem("step1", value || "");
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Stack>
      <Typography variant="h5" sx={{ textAlign: "left" }}>
        {
          "Что должен знать фронтенд-разработчик? Назовите три ключевых технологий"
        }
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="HTML,CSS,JavaScript"
            control={<Radio />}
            label="HTML,CSS,JavaScript"
          />
          <FormControlLabel
            value="Kotlin,PHP,JavaScript"
            control={<Radio />}
            label="Kotlin,PHP,JavaScript"
          />
          <FormControlLabel
            value="PHP,HTML,СSS"
            control={<Radio />}
            label="PHP,HTML,СSS"
          />
        </RadioGroup>
      </FormControl>
      <ButtonGroup setCurrentStep={setCurrentStep} />
    </Stack>
  );
};

export default Question1;
