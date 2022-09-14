import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	// gender: yup.string().required().label("irmão/irmã"),
	event_id: yup.string().required().label("evento"),
	name: yup.string().required().label("nome"),
	nickname: yup.string().required().label("conhecido por"),
	birth_at: yup
		.date()
		.transform(function (value, originalValue) {
			if (this.isType(value)) {
				return value;
			}
			const result = parse(originalValue, "dd.MM.yyyy", new Date());
			return result;
		})
		.typeError("please enter a valid date")
		.required()
		.min("1969-11-13", "Date is too early"),
	// birth_at: yup.date().required().label("data nascimento"),
	document_number: yup.string().required().label("C.P.F"),
	location_id: yup.string().required().label("comum"),
	mobile_number: yup.string().required().label("celular"),
	event_day_id: yup.string().required().label("data agendamento"),
});

const resolver = {
	resolver: yupResolver(schema),
};

export default resolver;
