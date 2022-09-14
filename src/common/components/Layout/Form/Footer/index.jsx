import { useRouter } from "next/router";
import { Button } from "@/common/components";
import { AiOutlineRollback, AiOutlineSave } from "react-icons/ai";

const Footer = ({ loading, save, back }) => {
	const router = useRouter();
	return (
		<div className="modal-footer">
			<button
				type="button"
				className="btn btn-outline-primary"
				onClick={save}
			>
				<AiOutlineSave className="mr-1" />
				{loading ? "Salvando..." : "Salvar"}
			</button>

			<button
				type="button"
				className="btn btn-outline-primary"
				onClick={() => router.push(`/app/${back}`)}
			>
				<AiOutlineRollback className="mr-1" />
				Voltar
			</button>
		</div>
	);
};

export default Footer;
