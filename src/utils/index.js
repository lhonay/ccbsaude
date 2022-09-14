import { confirmAlert } from "react-confirm-alert";

export const formatApiErrors = (errors) => {
	return Object.keys(errors).map((error) => [errors[error][0]]);
};

export const confirmDelete = ({
	title,
	message,
	labelConfirm,
	onConfirm,
	labelCancel,
	onCancel,
}) => {
	confirmAlert({
		title: title ?? "Atenção",
		message: message ?? "Deseja realmente excluir o registro selecionado?",
		buttons: [
			{
				label: labelConfirm ?? "Sim, Excluir",
				onClick: onConfirm,
			},
			{
				label: labelCancel ?? "Não",
				onClick: onCancel,
			},
		],
		closeOnEscape: true,
	});
};
