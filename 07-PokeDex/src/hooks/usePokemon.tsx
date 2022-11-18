import { useState, useEffect } from 'react';
import { DetailedPokemon } from '../interfaces/pokemonInterfaces';
import { pokemonApi } from '../api/pokemonApi';
export const usePokemon = (id: string) => {
	const [isLoading, setIsLoading] = useState(true);
	const [detailedPokemon, setDetailedPokemon] = useState<DetailedPokemon>({} as DetailedPokemon);

	const loadPokemon = async () => {
		const res = await pokemonApi.get<DetailedPokemon>(
			`https://pokeapi.co/api/v2/pokemon/${id}`
		);
		setDetailedPokemon(res.data);
		setIsLoading(false);
	};

	useEffect(() => {
		loadPokemon();
	}, []);

	return {
		isLoading,
		detailedPokemon,
	};
};
