import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/reqRes';

export const Usuarios = () => {
	const { usuarios, paginaAnterior, paginaSiguiente } = useUsers();

	const renderItem = ({ id, first_name, last_name, email, avatar }: User) => {
		return (
			<tr key={id.toString()}>
				<td>
					<img
						src={avatar}
						alt={first_name}
						style={{
							width: 50,
							borderRadius: 100,
						}}
					/>
				</td>
				<td>{`${first_name} ${last_name}`}</td>
				<td>{email}</td>
			</tr>
		);
	};

	return (
		<>
			<h3>Usuarios</h3>
			<table className="table">
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Nombre</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
			</table>
			<button className="btn btn-primary" onClick={paginaAnterior}>
				Anteriores
			</button>
			&nbsp;
			<button className="btn btn-primary" onClick={paginaSiguiente}>
				Siguientes
			</button>
		</>
	);
};
