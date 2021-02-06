import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

interface Props {
	handleNext: () => void;
}

const Form1: React.FC<Props> = ({ handleNext }) => {
	return (
		<Formik
			initialValues={{ firstName: "", lastName: "" }}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(12, "less then 13 characters allowed")
					.required("Required"),
				lastName: Yup.string()
					.max(12, "less then 13 characters allowed")
					.required("Required"),
			})}
			onSubmit={() => handleNext()}
		>
			<Form>
				<Field
					className="field"
					name="firstName"
					type="text"
					placeholder="first name"
				/>
				<ErrorMessage name="firstName" />
				<br />
				<Field
					className="field"
					name="lastName"
					type="text"
					placeholder="last name"
				/>
				<ErrorMessage name="lastName" />
				<br />
				<Button type="submit" variant="contained" color="primary">
					Next
				</Button>
			</Form>
		</Formik>
	);
};

export default Form1;
