import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	regional_id: yup.string().required().label("regional"),
	name: yup.string().required().label("nome"),
	is_active: yup.boolean().required(),
});

const resolver = {
	resolver: yupResolver(schema),
};

export default resolver;
