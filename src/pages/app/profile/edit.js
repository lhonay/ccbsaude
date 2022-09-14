import { AdminLayout } from "@/common/components";

const ProfileEdit = ({ user }) => {
	return (
		<AdminLayout>
			<div className="row">
				<div className="col-xl-12">
					<div className="card">
						<div className="card-body py-2">
							<h4 className="page-title">
								<i className="fa fa-user title-icon mr-1"></i>{" "}
								Edit Profile
							</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="card"></div>
		</AdminLayout>
	);
};

export default ProfileEdit;
