export const TiposBasicos = () => {
	// let nombre: string | number = 'Santiago';
	// nombre = 123;

	const nombre: string = 'Santiago';
	const edad = 35;
	const estaActivo: boolean = true;
	const poderes: string[] = []; //['Velocidad', 'Volar', 'Respirar en el agua']

	return (
		<>
			<h3>Tipos Basicos</h3>
			<h5>
				{nombre}, {edad}, {estaActivo ? 'Activo' : 'No activo'}
				<br />
				{poderes.join(', ')}
			</h5>
		</>
	);
};
