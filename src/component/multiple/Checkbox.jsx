import  { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Form from "./Form";
import Debitcard from "./Debitcard";
import ReviewO from "./ReviewO";
import Finish from "./Finish";

const steps = ["Shopping Info", "Payment Detail", "Review Order"];

export default function Checkboxcd() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "70%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Typography sx={{ mt: 2, mb: 1 }}>
          <Finish formData={formData} />
        </Typography>
      ) : (
        <Typography sx={{ mt: 2, mb: 1 }}>
          {activeStep === 0 && (
            <Form handleNext={handleNext} formData={formData} setFormData={setFormData} />
          )}
          {activeStep === 1 && (
            <Debitcard handleNext={handleNext} handleBack={handleBack} formData={formData} setformData={setFormData} />
          )}
          {activeStep === 2 && (
            <ReviewO handleNext={handleNext} handleBack={handleBack} />
          )}
        </Typography>
      )}
    </Box>
  );
}
