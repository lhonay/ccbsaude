import { Alert, Errors } from "@/common/components";

const Alerts = ({ success, errors }) => {
	return (
		<>
			{success && <Alert status="success" message={success} />}
			<Errors errors={errors} />
		</>
	);
};

export default Alerts;
