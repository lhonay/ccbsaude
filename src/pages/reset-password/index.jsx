import Link from "next/link";

import { useForm } from "react-hook-form";
import { resetSchema, useResetPassword } from "@/modules/auth/reset-password";

import { AuthLayout, Alert, Errors, Input, Button } from "@/common/components";

const ResetPassword = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(resetSchema);
	const { loading, success, apiErrors, resetPassword } = useResetPassword();

	return (
		<AuthLayout page="recover">
			<Errors errors={apiErrors} />
			<Alert status="success" message={success} />

			<form className="mb-1" onSubmit={handleSubmit(resetPassword)}>
				<div className="form-inputs">
					<Input
						type="email"
						name="email"
						label="E-mail"
						errors={errors}
						register={register}
					/>
				</div>

				<div className="form-inputs mb-0 text-center">
					<Button
						label={loading ? "Reseting..." : "Reset Password"}
						loading={loading}
					/>
				</div>
			</form>

			<Link href="/login">
				<a className="text-muted">
					<small>Voltar para o login</small>
				</a>
			</Link>
		</AuthLayout>
	);
};

export default ResetPassword;
