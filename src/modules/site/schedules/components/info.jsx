import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { scheduleSchema, useSchedules } from "@/modules/site/schedules";

import Select from "react-select";

import {
	Modal,
	Button,
	Input,
	Alert,
	Errors,
	Checkbox,
} from "@/common/components";

import { AiOutlineSave } from "react-icons/ai";

const Info = ({ visible, data, isEdit, onClose }) => {
	const {
		control,
		register,
		setValue,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm(scheduleSchema);

	const { loading, apiErrors, success, initForm, save } = useSchedules();

	useEffect(() => {
		reset();
		initForm(data);
	}, [visible]);

	useEffect(() => {
		if (!isEdit) {
			reset();
		}
	}, [success]);

	const renderFooter = () => (
		<Button
			label={loading ? "Salvando..." : "Salva"}
			className="btn  btn-outline-primary"
			onClick={handleSubmit(save)}
		>
			<AiOutlineSave className="mr-1" />
		</Button>
	);

	return (
		<>
			<div className="card-header">
				<div className="card-title">Cadastro</div>
			</div>
			<div className="card-body">
				<h3>
					<b>A paz de Deus,</b>
				</h3>
				<h4>
					Comunicamos a nossa cara irmandade que na preparação de
					Deus, nos dias 04, 05 e 06 de novembro acontecerá na
					Congregação central de Teresina, (Prédio anexo) atendimento
					médico para nossa querida irmandade. Deus preparou alguns
					médicos de diversos estados que sentiram de realizarem
					consultas gratuitas a nossa irmandade, quem se fizer
					interessado deve fazer seu agendamento pelo site
					<b> saude.admpiaui.org.br</b> qualquer dúvida procurar o
					irmão diácono de sua comum congregação para orientação
					referente ao agendamento.
				</h4>
				<h3 className="pt-3">
					<b>Horário de atendimento:</b>
				</h3>
				<h4>Dia 04/11 - Sexta-feira de 07:30 hs até 17:30 hs</h4>
				<h4>Dia 05/11 - Sábado de 07:30 hs até 16:00 hs</h4>
				<h4>Dia 06/11 – Domingo de 07:30 hs até 11:30 hs</h4>
				<h3 className="pt-3">
					<b>Orientações gerais:</b>
				</h3>
				<h4>
					1. As consultas são destinadas à nossa querida irmandade.
				</h4>
				<h4>
					2. Quem vier para ser consultado deve ter o dia disponível
					para aguardar todos os procedimentos.
				</h4>
				<h4>3. Os atendimentos serão por ondem de chegada.</h4>
				<h4>
					4. Dúvidas consulte o(s) irmão(s) Diáconos(s) de sua comum.
				</h4>

				<h3 className="pt-3">
					<b>Especialidades:</b>
				</h3>
				<h4>
					Clínico geral, Cardiologista, Ginecologia, Pediatria,
					Psicóloga, nutricionista, Dentista
				</h4>
			</div>
		</>
	);
};

export default Info;
