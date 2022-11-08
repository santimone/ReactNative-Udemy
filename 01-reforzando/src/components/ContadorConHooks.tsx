import { useCounter } from '../hooks/useCounter';

export const ContadorConHooks = () => {
	const { valor, acumular } = useCounter(0);
	return (
		<>
			<h3>
				Contador <small>{valor}</small>
			</h3>
			<button className="btn btn-primary" onClick={() => acumular(1)}>
				+1
			</button>
			&nbsp;
			<button className="btn btn-primary" onClick={() => acumular(-1)}>
				-1
			</button>
		</>
	);
};
