import { Dispatch, SetStateAction } from "react";

export interface StepProps {
  setCurrentStep: Dispatch<SetStateAction<number>>;
}
