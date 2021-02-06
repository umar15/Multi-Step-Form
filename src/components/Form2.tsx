import React, { FC } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

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
				<Field
					className="field"
					name="email"
					type="email"
					placeholder="Email"
				/>
				<ErrorMessage name="email" />
				<br />
				<Field
					className="field"
					name="phone"
					type="phone"
					placeholder="Phone"
				/>
				<ErrorMessage name="phone" />
				<br />
				<Button type="submit" variant="contained" color="primary">
					Next
				</Button>
			</Form>
		</Formik>
	);
};

export default Form2;
