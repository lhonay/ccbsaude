const Button = ({
	children,
	type = "submit",
	label,
	className,
	loading = false,
	disabled,
	onClick,
	...props
}) => {
	const buttonClass = className ?? "btn-success btn-block";
	const isDisabled = disabled ? "disabled=disabled" : ``;

	return (
		<button
			type={type}
			className={`btn ${buttonClass}`}
			disabled={`${isDisabled}`}
			onClick={onClick}
			{...props}
		>
			{children} {label}
		</button>
	);
};

export default Button;
