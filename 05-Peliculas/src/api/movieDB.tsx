import axios from 'axios';

const movieDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie',
	params: {
		api_key: 'f373441b36ff69390abff11037532a9c',
		language: 'es-ES',
	},
});

export default movieDB;
