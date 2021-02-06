import React, { FC } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

interface Props {
	handleNext: () => void;
}

const Form2: FC<Props> = ({ handleNext }) => {
	return (
		<Formik
			initialValues={{
				email: "",
				phone: "",
			}}
			onSubmit={() => handleNext()}
			validationSchema={Yup.object({
				email: Yup.string().required("Required"),
				phone: Yup.string().required("Required"),
			})}
		>
			<Form>
				<label htmlFor="email">Email</label>
				<Field name="email" type="email" />
				<ErrorMessage name="email" />
				<br />
				<label htmlFor="phone">Phone</label>
				<Field name="phone" type="phone" />
				<ErrorMessage name="phone" />
				<br />
				<button type="submit">submit</button>
			</Form>
		</Formik>
	);
};

export default Form2;
