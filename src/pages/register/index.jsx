import Link from "next/link";

import { useForm } from "react-hook-form";

import { registerSchema, useRegister } from "@/modules/auth/register";

import { AuthLayout, Errors, Input, Button } from "@/common/components";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(registerSchema);
	const { loading, apiErrors, signUp } = useRegister();

	return (
		<AuthLayout page="register">
			<Errors errors={apiErrors} />

			<form className="mb-1" onSubmit={handleSubmit(signUp)}>
				<div className="form-inputs">
					<Input
						type="text"
						name="name"
						label="Name *"
						errors={errors}
						register={register}
					/>
				</div>

				<div className="form-inputs">
					<Input
						type="email"
						name="email"
						label="E-mail *"
						errors={errors}
						register={register}
					/>
				</div>

				<div className="form-inputs">
					<Input
						type="password"
						name="password"
						label="Senha *"
						errors={errors}
						register={register}
					/>
				</div>

				<div className="form-inputs">
					<Input
						type="password"
						name="password_confirmation"
						label="Confirmar Senha *"
						errors={errors}
						register={register}
					/>
				</div>

				<div className="form-inputs mb-0 text-center">
					<Button
						label={loading ? "Registrando..." : "Registrar"}
						loading={loading}
					/>
				</div>
			</form>

			<Link href="/login">
				<a className="text-muted">
					<small>Já tem uma conta?</small>
				</a>
			</Link>
		</AuthLayout>
	);
};

export default Register;
