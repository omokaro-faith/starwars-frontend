import axios from 'axios';
import config from './config';

const requestFilms = async (url) => {
	try {
		const parsedElement = await axios.get(`${config.baseUrl}/films/`);
		return parsedElement.data;
	} catch (err) {
		return;
	}
};

const requestPeople = async (url) => {
	try {
		const parsedElement = await axios.get(`${config.baseUrl}/people/`);
		return parsedElement.data;
	} catch (err) {
		return;
	}
};

const requestPlanets = async (url) => {
	try {
		const parsedElement = await axios.get(`${config.baseUrl}/planets/`);
		return parsedElement.data;
	} catch (err) {
		return;
	}
};

const requestSpecies = async (url) => {
	try {
		const parsedElement = await axios.get(`${config.baseUrl}/species/`);
		return parsedElement.data;
	} catch (err) {
		return;
	}
};

const requestStarships = async (url) => {
	try {
		const parsedElement = await axios.get(`${config.baseUrl}/starships/`);
		return parsedElement.data;
	} catch (err) {
		return;
	}
};

const requestVehicles = async (url) => {
	try {
		const parsedElement = await axios.get(`${config.baseUrl}/vehicles/`);
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
