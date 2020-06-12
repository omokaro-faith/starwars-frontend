import axios from 'axios';

const requestFilms = async (url) => {
	try {
		const parsedElement = await axios.get(`https://swapi.dev/api/films/`);
		return parsedElement.data;
	} catch (err) {
		return;
	}
};

const requestPeople = async (url) => {
	try {
		const parsedElement = await axios.get(`https://swapi.dev/api/people/`);
		return parsedElement.data;
	} catch (err) {
		return;
	}
};

const requestPlanets = async (url) => {
	try {
		const parsedElement = await axios.get(`https://swapi.dev/api/planets/`);
		return parsedElement.data;
	} catch (err) {
		return;
	}
};

const requestSpecies = async (url) => {
	try {
		const parsedElement = await axios.get(`https://swapi.dev/api/species/`);
		return parsedElement.data;
	} catch (err) {
		return;
	}
};

const requestStarships = async (url) => {
	try {
		const parsedElement = await axios.get(`https://swapi.dev/api/starships/`);
		return parsedElement.data;
	} catch (err) {
		return;
	}
};

const requestVehicles = async (url) => {
	try {
		const parsedElement = await axios.get(`https://swapi.dev/api/vehicles/`);
		return parsedElement.data;
	} catch (err) {
		return;
	}
};

export default {
	requestFilms,
	requestPeople,
	requestPlanets,
	requestSpecies,
	requestStarships,
	requestVehicles,
};
