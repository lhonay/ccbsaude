import { AiOutlineCheckSquare, AiOutlineBorder } from "react-icons/ai";

const Status = ({ status }) => {
	return status == 1 ? (
		<AiOutlineCheckSquare className="h3 text-success" />
	) : (
		<AiOutlineBorder className="h3 text-danger" />
	);
};

export default Status;
