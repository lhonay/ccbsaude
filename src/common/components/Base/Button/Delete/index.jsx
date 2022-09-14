import { AiFillDelete } from "react-icons/ai";

const Delete = ({
	type = "submit",
	icon = "check",
	label,
	className,
	loading = false,
	disabled,
	onClick,
	...props
}) => {
	const buttonClass = className ?? "btn-success btn-block";
	const iconClass = loading ? "fa-spin fa-spinner" : `fa-${icon}`;
	const isDisabled = disabled ? "disabled=disabled" : ``;

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={`${isDisabled}`}
			className={`btn btn-icon btn-danger ${buttonClass}`}
			{...props}
		>
			<AiFillDelete />
		</button>
	);
};

export default Delete;
