import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	location_id: yup.string().required().label("localização"),
	name: yup.string().required().label("nome"),
	slug: yup.string().required().label("sloga"),
	is_active: yup.boolean().required(),
});

const resolver = {
	resolver: yupResolver(schema),
};
export default resolver;
