import Link from "next/link";

import { useForm } from "react-hook-form";
import { loginSchema } from "@/modules/auth/login";

import { useAuth } from "@/hooks";

import { AuthLayout, Alert, Input, Button } from "@/common/components";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(loginSchema);
	const { loading, error, signIn } = useAuth();

	return (
		<AuthLayout page="login">
			{error && (
				<Alert status="danger" message="Usuário ou senha inválidos" />
			)}

			<h2>
				<b>CCB Saúde</b>
			</h2>
			<hr />
			<form className="mb-1" onSubmit={handleSubmit(signIn)}>
				<div className="form-inputs">
					<Input
						type="email"
						name="username"
						label="E-mail"
						errors={errors}
						register={register}
					/>
				</div>

				<div className="form-inputs">
					<Link href="/reset-password">
						<a className="text-muted float-right">
							<small>Esqueceu sua senha?</small>
						</a>
					</Link>

					<Input
						type="password"
						name="password"
						label="Senha"
						errors={errors}
						register={register}
					/>
				</div>

				<div className="form-inputs mb-0 text-center">
					<Button
						label={"Acessar"}
						disabled={loading ? "disabled" : ""}
					/>

					{loading && (
						<Button
							className={"btn-default btn-block"}
							label={"Carregando..."}
							loading={loading}
						/>
					)}
				</div>
			</form>

			<Link href="/register">
				<a className="text-muted">
					<small>{`Não tem uma conta?`}</small>
				</a>
			</Link>
		</AuthLayout>
	);
};

export default Login;
