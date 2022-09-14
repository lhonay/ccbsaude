import { useState } from "react";

import { getAPIClient } from "@/services";
import { AdminLayout, HeaderForm } from "@/common/components";

import { UserForm } from "@/modules/app/users";

export async function getServerSideProps(context) {
	const api = getAPIClient(context);

	const { data, meta } = await api.get("users", { params: context.query });

	return {
		props: {
			users: data,
			meta: meta,
		},
	};
}

const UserCreate = ({ users, meta }) => {
	const [user, setUser] = useState({});

	return (
		<AdminLayout>
			<HeaderForm
				module="Cadastros"
				menu="Usuários"
				link="users/create"
				form
			/>
			<div className="col-md-12">
				<UserForm user={user} />
			</div>
		</AdminLayout>
	);
};

export default UserCreate;
