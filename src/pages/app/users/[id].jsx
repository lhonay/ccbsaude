import { useState } from "react";

import { AdminLayout, HeaderForm } from "@/common/components";

import { UserForm } from "@/modules/app/users";

import { getAPIClient } from "@/services";

export async function getServerSideProps(context) {
	const api = getAPIClient(context);

	const { data } = await api.get(`users/${context.query.id}`);

	return {
		props: {
			users: data,
		},
	};
}

const UserEdit = ({ users }) => {
	const [user, setUser] = useState(users);

	return (
		<AdminLayout>
			<HeaderForm
				icon="users"
				module="Cadastros"
				title="Usuários"
				link="users"
			/>
			<div className="col-md-12">
				<UserForm user={user} isEdit={!!user?.id} />
			</div>
		</AdminLayout>
	);
};

export default UserEdit;
