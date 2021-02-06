import React, { FC } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

interface Props {
	handleNext: () => void;
}

const Form3: FC<Props> = ({ handleNext }) => {
	return (
		<Formik
			initialValues={{
				email: "",
				phone: "",
			}}
			onSubmit={() => handleNext()}
			validationSchema={Yup.object({
				description: Yup.string().required("Required"),
			})}
		>
			<Form>
				<label htmlFor="description">Description</label>
				<Field name="description" type="text" />
				<ErrorMessage name="description" />
				<br />
				<button type="submit">submit</button>
			</Form>
		</Formik>
	);
};

export default Form3;
