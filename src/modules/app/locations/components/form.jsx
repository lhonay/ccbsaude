import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { useForm } from "react-hook-form";
import { eventSchema, useEvents } from "@/modules/app/events";
import { useRoles } from "@/modules/app/roles";

import { toast } from "react-toastify";

import { Input, Alerts, Checkbox, FooterForm } from "@/common/components";

const LocationForm = ({ visible, event, isEdit, onClose }) => {
	const {
		control,
		register,
		setValue,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm(eventSchema);

	const { loading, apiErrors, success, initForm, save } = useEvents();

	const router = useRouter();

	useEffect(() => {
		reset();
		initForm(event);
		console.log("🚀 ~ file: form.jsx ~ line 29 ~ useEffect ~ event", event);
		// getRolesOptions();

		// if (event?.roles) {
		// 	setValue("role_keys", event.roles);
		// }
	}, [visible]);

	useEffect(() => {
		if (success) {
			toast.success(success);
			router.push("/app/events");
		}
	}, [success]);

	const loadOptions = () => {
		console.log("on load options function");
		return axios
			.get(`https://jsonplaceholder.typicode.com/users`)
			.then((response) => {
				const options = [];
				response.data.forEach((permission) => {
					options.push({
						label: permission.username,
						value: permission.id,
					});
				});
				return options;
			});
	};

	return (
		<>
			<Alerts errors={apiErrors} />

			<div className="card">
				<div className="card-header">
					<div className="card-title">Form Elements</div>
				</div>
				<div className="card-header">
					<form>
						<div className="col-12">
							<div className="form-row">
								<div className="form-group col-md-12">
									<AsyncSelect
										// isMulti
										cacheOptions
										defaultOptions
										loadOptions={loadOptions}
									/>
									{/* <Select
										defaultValue={selectedOption}
										options={options}
										name="location_id"
										placeholder="Selecione uma localidade"
										isSearchable={true}
										onChange={value => {
											if (value) getDataUsingSimpleGetCall(value)
											else getDataUsingSimpleGetCall('')
										  }
									/> */}
									{/* <Input
										type="text"
										name="location_id"
										label="location_id *"
										errors={errors}
										register={register}
										model={event}
									/> */}
								</div>
								<div className="form-group col-md-12">
									<Input
										type="text"
										name="name"
										label="Name *"
										errors={errors}
										register={register}
										model={event}
									/>
								</div>
							</div>

							<div className="form-row">
								<div className="form-group col-md-12">
									<Input
										type="text"
										name="slug"
										label="Sloga"
										errors={errors}
										register={register}
										model={event}
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
										model={event}
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
										model={event}
									/>
								</div>
							</div>
						</div>
						<FooterForm
							loading={loading}
							save={handleSubmit(save)}
							back={"events"}
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default LocationForm;
