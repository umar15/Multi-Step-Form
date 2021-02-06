import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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
				<label htmlFor="firstName">First Name</label>
				<Field name="firstName" type="text" />
				<ErrorMessage name="firstName" />
				<br />
				<label htmlFor="lastName">Last Name</label>
				<Field name="lastName" type="text" />
				<ErrorMessage name="lastName" />
				<br />
				<button type="submit">submit</button>
			</Form>
		</Formik>
	);
};

export default Form1;
