import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function getSteps() {
	return ["Form 1 out of 3", "Form 2 out of 3", "Form 3 out of 3"];
}

function getStepContent(stepIndex: number, handleNext: () => void) {
	switch (stepIndex) {
		case 0:
			return <Form1 handleNext={handleNext} />;
		case 1:
			return <Form2 handleNext={handleNext} />;
		case 2:
			return <Form3 handleNext={handleNext} />;
		default:
			return "Unknown Step";
	}
}

const StepperComponent = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((active) => active + 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const handleBack = () => {
		setActiveStep((active) => active - 1);
	};

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<div>
				{activeStep === steps.length ? (
					<div>
						<Typography className={classes.instructions}>
							All steps completed
						</Typography>
						<Button onClick={() => handleReset()}>Reset</Button>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>
							{getStepContent(activeStep, handleNext)}
						</Typography>
					</div>
				)}
			</div>
		</div>
	);
};

export default StepperComponent;
