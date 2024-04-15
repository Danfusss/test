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

const Question2: FC<StepProps> = ({ setCurrentStep }) => {
  const [value, setValue] = useState<string>(
    localStorage.getItem("step2") || ""
  );

  useEffect(() => {
    localStorage.setItem("step2", value || "");
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Stack>
      <Typography variant="h5" sx={{ textAlign: "left" }}>
        {
          "Какие из перечисленных технологий используются для стилизации веб-страниц?"
        }
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="CSS" control={<Radio />} label="CSS" />
          <FormControlLabel
            value="JavaScript"
            control={<Radio />}
            label="JavaScript"
          />
          <FormControlLabel value="HTML" control={<Radio />} label="HTML" />
          <FormControlLabel value="PHP" control={<Radio />} label="PHP" />
        </RadioGroup>
      </FormControl>
      <ButtonGroup setCurrentStep={setCurrentStep} />
    </Stack>
  );
};

export default Question2;
