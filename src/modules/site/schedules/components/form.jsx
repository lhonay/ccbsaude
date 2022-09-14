import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { scheduleSchema, useSchedules } from "@/modules/site/schedules";

import Select from "react-select";

import { Button, Input, Alert, Errors, Checkbox } from "@/common/components";

import { AiOutlineSave } from "react-icons/ai";

const Form = ({ visible, data }) => {
	const {
		control,
		register,
		handleSubmit,
		setApiErrors,
		reset,
		formState: { errors },
	} = useForm(scheduleSchema);

	const { loading, apiErrors, success, initForm, save } = useSchedules();

	useEffect(() => {
		reset();
		initForm(data);
	}, [visible]);

	useEffect(() => {
		if (success) {
			toast.success("Cadastro realizado com sucesso!");
			setApiErrors([]);
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
		<form>
			<Alert status="success" message={success} />
			<Errors errors={apiErrors} />
			<div className="col-12">
				<div className="form-row">
					<div className="form-group col-md-3">
						<label>Irmã/Irmão</label>
						<Select
							options={[
								{
									value: "F",
									label: "Irmã",
								},
								{
									value: "M",
									label: "Irmão",
								},
							]}
						/>
					</div>

					<div className="form-group col-md-12">
						<Input
							type="text"
							name="event_id"
							label="Evento *"
							errors={errors}
							register={register}
							model={data}
						/>
					</div>

					<div className="form-group col-md-12">
						<Input
							type="text"
							name="name"
							label="Nome Completo *"
							errors={errors}
							register={register}
							model={data}
						/>
					</div>

					<div className="form-group col-md-12">
						<Input
							type="text"
							name="nickname"
							label="Conhecido Por *"
							errors={errors}
							register={register}
							model={data}
						/>
					</div>

					<div className="form-group col-md-6">
						<Input
							type="text"
							name="birth_at"
							label="Data Nascimento *"
							errors={errors}
							register={register}
							model={data}
						/>
					</div>

					<div className="form-group col-md-6">
						<Input
							type="text"
							name="document_number"
							label="C.P.F *"
							errors={errors}
							register={register}
							model={data}
						/>
					</div>

					<div className="form-group col-md-12">
						<Input
							type="text"
							name="location_id"
							label="Comum"
							errors={errors}
							register={register}
							model={data}
						/>
					</div>

					<div className="form-group col-md-4">
						<Input
							type="text"
							name="zip_code"
							label="CEP"
							errors={errors}
							register={register}
							model={data}
						/>
					</div>

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

					<div className="form-group col-md-4">
						<Input
							type="text"
							name="number"
							label="Número"
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

					<div className="form-group col-md-6">
						<Input
							type="text"
							name="state_id"
							label="Estado"
							errors={errors}
							register={register}
							model={data}
						/>
					</div>

					<div className="form-group col-md-6">
						<Input
							type="text"
							name="city_id"
							label="Cidade"
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

					<div className="form-group col-md-6">
						<Input
							type="text"
							name="phone_number"
							label="Telefones"
							errors={errors}
							register={register}
							model={data}
						/>
					</div>

					<div className="form-group col-md-12">
						<Input
							type="text"
							name="event_day_id"
							label="Data Agendamento"
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
							name="observation"
							label="Observação"
							errors={errors}
							register={register}
							model={data}
						/>
					</div>
				</div>
			</div>
			<div className="form-row">
				<hr />
				<div className="form-group col-md-12 ml-4">
					<Button
						label={loading ? "Salvando..." : "Salva"}
						className="btn  btn-outline-primary"
						onClick={handleSubmit(save)}
					>
						<AiOutlineSave className="mr-1" />
					</Button>
				</div>
			</div>
			{/* <FooterForm
				loading={loading}
				save={handleSubmit(save)}
				back={"datas"}
			/> */}
		</form>
	);
};

export default Form;
