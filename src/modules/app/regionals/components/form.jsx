import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { regionalSchema, useRegionals } from "@/modules/app/regionals";

import {
	Modal,
	Button,
	Input,
	Alert,
	Errors,
	Checkbox,
} from "@/common/components";

import { AiOutlineSave } from "react-icons/ai";

const Form = ({ visible, data, isEdit, onClose }) => {
	const {
		control,
		register,
		setValue,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm(regionalSchema);

	const { loading, apiErrors, success, initForm, save } = useRegionals();

	useEffect(() => {
		reset();
		initForm(data);
	}, [visible]);

	useEffect(() => {
		if (!isEdit) {
			reset();
		}
	}, [success]);

	const renderFooter = () => (
		<Button
			label={loading ? "Salvando..." : "Salva"}
			className="btn  btn-outline-primary"
			onClick={handleSubmit(save)}
		>
			<AiOutlineSave className="mr-1" />
		</Button>
	);

	return (
		<Modal
			visible={visible}
			title={isEdit ? "Editar regional" : "Criar uma nova regional"}
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
								model={data}
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-12">
							<Checkbox
								name="is_active"
								label="Status *"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>
					</div>
				</div>
			</form>
		</Modal>
	);
};

export default Form;
