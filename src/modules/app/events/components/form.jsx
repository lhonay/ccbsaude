import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { useForm } from "react-hook-form";
import { eventSchema, useEvents } from "@/modules/app/events";
import { useLocations } from "@/modules/app/locations";

import { toast } from "react-toastify";

import { Input, Alerts, Checkbox, FooterForm } from "@/common/components";

const EventForm = ({ visible, event, isEdit, onClose }) => {
	const {
		control,
		register,
		setValue,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm(eventSchema);

	const { loading, apiErrors, success, initForm, save } = useEvents();

	const { search, listSearch } = useLocations();

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

	const INITIAL_DATA = {
		value: 0,
		label: "Selecione uma localidade",
	};

	const [selectData, setselectData] = useState(INITIAL_DATA);

	const mapResponseToValuesAndLabels = (data) => ({
		value: data.id,
		label: data.name,
	});

	async function callApi(value) {
		search(value);

		const options = [];
		listSearch?.forEach((permission) => {
			options.push({
				label: permission.name,
				value: permission.id,
			});
		});
		return options;

		// const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
		// 	.then((response) => response.json())
		// 	.then((response) => response.map(mapResponseToValuesAndLabels))
		// 	.then((final) =>
		// 		final.filter((i) =>
		// 			i.label.toLowerCase().includes(value.toLowerCase())
		// 		)
		// 	);

		return data;
	}

	// const loadOptions = async (input) => {
	// 	search(input);
	// 	const options = [];
	// 	listSearch?.forEach((permission) => {
	// 		options.push({
	// 			label: permission.name,
	// 			value: permission.id,
	// 		});
	// 	});
	// 	return options;
	// };

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
									{/* <Select
										placeholder="Selecione uma localidade"
										options={loadOptions()}
									/> */}
									<AsyncSelect
										cacheOptions
										loadOptions={callApi}
										onChange={(data) => {
											setselectData(data);
										}}
										value={selectData}
										defaultOptions
									/>
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

export default EventForm;
