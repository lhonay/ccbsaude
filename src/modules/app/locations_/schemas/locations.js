import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required().label("e-mail"),
	role_keys: yup.array().required().label("role"),
	password: yup.string().nullable(),
	password_confirmation: yup
		.string()
		.nullable()
		.oneOf([yup.ref("password")], "Suas senhas não conferem."),
	status: yup.boolean().required(),
});

const resolver = {
	resolver: yupResolver(schema),
};

export default resolver;
