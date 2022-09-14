const Form = ({
	children,
	type = "submit",
	icon = "check",
	label,
	className,
	loading = false,
	disabled,
	onClick,
	...props
}) => {
	const buttonClass = className ?? "btn-info";
	const iconClass = loading ? "fa-spin fa-spinner" : `fa-${icon}`;
	const isDisabled = disabled ? "disabled=disabled" : ``;

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={`${isDisabled}`}
			className={`btn btn-sm btn-icon mr-1 ${buttonClass}`}
			{...props}
		>
			<span className="btn-label">{children}</span>
			{label}
		</button>
	);
};

export default Form;
