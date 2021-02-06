import React, { FC } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

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
				address: Yup.string().required("Required"),
			})}
		>
			<Form>
				<Field
					className="field"
					name="address"
					type="text"
					placeholder="address"
				/>
				<ErrorMessage name="address" />
				<br />
				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</Form>
		</Formik>
	);
};

export default Form3;
