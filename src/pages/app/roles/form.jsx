import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { useRoles, roleSchema } from "@/modules/app/roles";

import {
	Modal,
	Button,
	Input,
	Alert,
	Errors,
	Textarea,
} from "@/common/components";

const RoleForm = ({ visible, role, isEdit, onClose }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm(roleSchema);

	const { loading, apiErrors, success, initForm, save } = useRoles();

	useEffect(() => {
		reset();
		initForm(role);
	}, [visible]);

	useEffect(() => {
		if (!isEdit) {
			reset();
		}
	}, [success]);

	const renderFooter = () => (
		<Button
			label={loading ? "Saving..." : "Save"}
			className="btn-success"
			onClick={handleSubmit(save)}
		/>
	);

	return (
		<Modal
			visible={visible}
			title="Create a new Role"
			onClose={() => onClose(success)}
			renderFooter={renderFooter}
		>
			<form>
				<div className="col-12">
					<Alert status="success" message={success} />
					<Errors errors={apiErrors} />

					<div className="form-row">
						<div className="form-group col-md-12">
							<Input
								type="text"
								name="name"
								label="Name *"
								errors={errors}
								register={register}
								model={role}
							/>
						</div>

						<div className="form-group col-md-12">
							<Textarea
								name="description"
								label="Description *"
								errors={errors}
								register={register}
								model={role}
							/>
						</div>
					</div>
				</div>
			</form>
		</Modal>
	);
};

export default RoleForm;
