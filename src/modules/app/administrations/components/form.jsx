import { useEffect } from "react";

import { useForm } from "react-hook-form";

import {
	administrationSchema,
	useAdministrations,
} from "@/modules/app/administrations";

import { useRegionals } from "@/modules/app/regionals";

import {
	Modal,
	Button,
	Input,
	Select,
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
	} = useForm(administrationSchema);

	const { regionals, getRegionalsOptions } = useRegionals();

	const { loading, apiErrors, success, initForm, save } =
		useAdministrations();

	useEffect(() => {
		reset();
		initForm(data);
		getRegionalsOptions();

		if (data?.regional_id) {
			setValue("regional_id", data.regional_id);
		}
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
			title={
				isEdit ? "Editar Administração" : "Criar uma nova Administração"
			}
			onClose={() => onClose(success)}
			renderFooter={renderFooter}
		>
			<form>
				<div className="col-12">
					<Alert status="success" message={success} />
					<Errors errors={apiErrors} />

					<div className="form-row">
						<div className="form-group col-md-12">
							<Select
								name="regional_id"
								label="Regional *"
								errors={errors}
								register={register}
								options={regionals}
								model={data}
							/>
						</div>
					</div>
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
						<div className="form-group col-md-6">
							<Input
								type="text"
								name="document_number"
								mask="99.999.999/9999-99"
								label="CNPJ *"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>
						<div className="form-group col-md-6">
							<Input
								type="text"
								name="municipal_registration_number"
								label="Inscrição Municipal *"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-6">
							<Input
								type="text"
								name="state_registration_number"
								label="Inscrição Estadual *"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-6">
							<Input
								type="text"
								name="zip_code"
								label="CEP"
								mask="99999-999"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-12">
							<Input
								type="text"
								name="address"
								label="Endereço"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-4">
							<Input
								type="text"
								name="number"
								label="Numero"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>
						<div className="form-group col-md-4">
							<Input
								type="text"
								name="complement"
								label="Complemento"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>

						<div className="form-group col-md-4">
							<Input
								type="text"
								name="district"
								label="Bairro"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-12">
							<Input
								type="text"
								name="reference"
								label="Referencia"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-6">
							<Input
								type="text"
								name="district"
								label="Estados"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>

						<div className="form-group col-md-6">
							<Input
								type="text"
								name="number"
								label="Cidade"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-6">
							<Input
								type="text"
								name="phone_number"
								label="Telefone"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>

						<div className="form-group col-md-6">
							<Input
								type="text"
								name="mobile_number"
								label="Celular"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-6">
							<Input
								type="text"
								name="latitude"
								label="Latitude"
								errors={errors}
								register={register}
								model={data}
							/>
						</div>

						<div className="form-group col-md-6">
							<Input
								type="text"
								name="longitude"
								label="Longitude"
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
