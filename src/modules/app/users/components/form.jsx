import { useEffect } from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { userSchema, useUsers } from "@/modules/app/users";
import { useRoles } from "@/modules/app/roles";

import { toast } from "react-toastify";

import {
	Input,
	MultiSelect,
	Alerts,
	Checkbox,
	FooterForm,
} from "@/common/components";

const UserForm = ({ visible, user, isEdit, onClose }) => {
	const {
		control,
		register,
		setValue,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm(userSchema);

	const { roles, getRolesOptions } = useRoles();
	const { loading, apiErrors, success, initForm, save } = useUsers();

	const router = useRouter();

	useEffect(() => {
		reset();
		initForm(user);
		getRolesOptions();

		if (user?.roles) {
			setValue("role_keys", user.roles);
		}
	}, [visible]);

	useEffect(() => {
		if (success) {
			toast.success("Administração deletado com sucesso!");
			router.push("/app/users");
		}
	}, [success]);

	return (
		// <Modal
		// 	visible={visible}
		// 	title="Create a new User"
		// 	onClose={() => onClose(success)}
		// 	renderFooter={renderFooter}
		// >
		<>
			{/* <Alerts success={success} errors={apiErrors} /> */}

			<div className="card">
				<div className="card-header">
					<div className="card-title">Form Elements</div>
				</div>
				<div className="card-header">
					<form>
						<div className="col-12">
							<div className="form-row">
								<div className="form-group col-md-12">
									<Input
										type="text"
										name="name"
										label="Name *"
										errors={errors}
										register={register}
										model={user}
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-12">
									<Input
										type="email"
										name="email"
										label="E-mail *"
										errors={errors}
										register={register}
										model={user}
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-12">
									<MultiSelect
										label="Permissões *"
										name="role_keys"
										control={control}
										options={roles}
										errors={errors}
										selectedValues={user?.roles}
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<Input
										type="password"
										name="password"
										label="Senha *"
										errors={errors}
										register={register}
										model={user}
									/>
								</div>
								<div className="form-group col-md-6">
									<Input
										type="password"
										name="password_confirmation"
										label="Confirmar Senha *"
										errors={errors}
										register={register}
										model={user}
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-12">
									<Checkbox
										name="status"
										label="Status *"
										errors={errors}
										register={register}
										model={user}
									/>
								</div>
							</div>
						</div>
						<FooterForm
							loading={loading}
							save={handleSubmit(save)}
							back={"users"}
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default UserForm;
