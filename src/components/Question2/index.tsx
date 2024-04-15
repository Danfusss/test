import { FC, useEffect, useState } from "react";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";

import ButtonGroup from "../ButtonGroup";
import { StepProps } from "../../types";

const Question2: FC<StepProps> = ({ setCurrentStep }) => {
  const [value, setValue] = useState<string[]>(
    JSON.parse(localStorage.getItem("step2") || "[]")
  );
  useEffect(() => {
    console.log("Value updated:", value);
  }, [value]);
  useEffect(() => {
    console.log(value);
    localStorage.setItem("step2", JSON.stringify(value) || "");
  }, [value]);

  const handleChange = (event: React.SyntheticEvent, checked: boolean) => {
    const newValue = (event.target as HTMLInputElement).value;
    setValue((prevValue) => {
      if (checked) {
        return [...prevValue, newValue];
      } else {
        return prevValue.filter((val) => val !== newValue);
      }
    });
  };
  return (
    <Stack>
      <Typography variant="h5" sx={{ textAlign: "left" }}>
        {
          "Какие из перечисленных технологий используются для стилизации веб-страниц?"
        }
      </Typography>
      <FormControl>
        <FormControlLabel
          value="CSS"
          control={<Checkbox />}
          label="CSS"
          onChange={(event, checked) => handleChange(event, checked)}
        />
        <FormControlLabel
          value="JavaScript"
          control={<Checkbox />}
          label="JavaScript"
          onChange={(event, checked) => handleChange(event, checked)}
        />
        <FormControlLabel
          value="HTML"
          control={<Checkbox />}
          label="HTML"
          onChange={(event, checked) => handleChange(event, checked)}
        />
        <FormControlLabel
          value="PHP"
          control={<Checkbox />}
          label="PHP"
          onChange={(event, checked) => handleChange(event, checked)}
        />
      </FormControl>
      <ButtonGroup setCurrentStep={setCurrentStep} />
    </Stack>
  );
};

export default Question2;
