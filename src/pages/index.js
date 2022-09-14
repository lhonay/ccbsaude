import Head from "next/head";
import { SiteLayout, HeaderSiteLayout } from "@/common/components";

import { ScheduleForm, ScheduleInfo } from "@/modules/site/schedules";

const Home = () => {
	return (
		<SiteLayout>
			<Head>
				<title>Agendamentos - CCB Saúde - ADM Piauí</title>
			</Head>

			<HeaderSiteLayout />

			<div class="page-inner mt--5 col-12">
				<div class="col-md-12 col-xl-8 ml-auto mr-auto">
					<div class="card">
						<ScheduleInfo />
						<hr />
						<ScheduleForm />
					</div>
				</div>
			</div>
		</SiteLayout>
	);
};

export default Home;
