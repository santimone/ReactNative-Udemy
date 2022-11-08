import { useEffect, useState, useRef } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

export const useUsers = () => {
	const [usuarios, setUsuarios] = useState<User[]>([]);
	const pageRef = useRef(1);

	useEffect(() => {
		//llamado API con Axios
		cargarUsuarios();
	}, []);

	const cargarUsuarios = async () => {
		const resp = await reqResApi.get<ReqResList>('/users', {
			params: {
				page: pageRef.current,
			},
		});
		if (resp.data.data.length > 0) {
			setUsuarios(resp.data.data);
		} else {
			pageRef.current--;
			alert('No puedes avanzar mas bro');
		}
	};

	const paginaSiguiente = () => {
		pageRef.current++;
		cargarUsuarios();
	};

	const paginaAnterior = () => {
		if (pageRef.current > 1) {
			pageRef.current--;
			cargarUsuarios();
		} else {
			alert('No puedes retroceder mas bro');
		}
	};

	return { usuarios, paginaAnterior, paginaSiguiente };
};
