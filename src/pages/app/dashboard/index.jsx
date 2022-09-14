import { AdminLayout } from "@/common/components";
import { DashCard, PieChart, DoughnutChart } from "@/modules/app/dashboard";

const Dashboard = () => {
	const menus = [
		{
			icon: "users",
			label: "Users",
			amount: 1000,
		},
		{
			icon: "list",
			label: "Roles",
			amount: 1000,
		},
		{
			icon: "check",
			label: "Permissions",
			amount: 1000,
		},
	];

	return (
		<AdminLayout>
			<>
				<div className="panel-header bg-primary-gradient">
					<div className="page-inner py-5">
						<div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
							<div>
								<h2 className="text-white pb-2 fw-bold">
									Dashboard
								</h2>
								<h5 className="text-white op-7 mb-2">
									Free Bootstrap 4 Admin Dashboard
								</h5>
							</div>
							<div className="ml-md-auto py-2 py-md-0">
								
							</div>
						</div>
					</div>
				</div>
				<div className="page-inner mt--5">
					<div className="row mt--2">
						<div className="col-xl-4">
							<div className="card widget-flat">
								<div className="card-body">
									<h4 className="text-muted font-weight-normal mt-0">
										Idades
									</h4>
									<PieChart />
								</div>
							</div>
						</div>
						<div className="col-xl-4">
							<div className="card widget-flat">
								<div className="card-body">
									<h4 className="text-muted font-weight-normal mt-0">
										Idades
									</h4>
									<DoughnutChart />
								</div>
							</div>
						</div>

						{menus.map((menu, index) => (
							<DashCard key={index} {...menu} />
						))}
					</div>
				</div>
			</>
		</AdminLayout>
	);
};

export default Dashboard;
