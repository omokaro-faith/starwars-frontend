import services from '../services';
import actionTypes from './actionTypes';
import constants from '../constants';

const filmsRequest = () => ({
	type: actionTypes.FILMS_REQUEST,
});

const filmsRequestSuccess = (data = []) => ({
	type: actionTypes.FILMS_REQUEST_SUCCESS,
	data,
});

const filmsRequestError = () => ({
	type: actionTypes.FILMS_REQUEST_SUCCESS_FAILED,
	error: constants.ERROR,
});

const starShipsRequest = () => ({
	type: actionTypes.STARSHIPS_REQUEST,
});

const starShipsRequestSuccess = (data = []) => ({
	type: actionTypes.STARSHIPS_REQUEST_SUCCESS,
	data,
});

const starShipsRequestError = () => ({
	type: actionTypes.STARSHIPS_REQUEST_SUCCESS_FAILED,
	error: constants.ERROR,
});

const peopleRequest = () => ({
	type: actionTypes.PEOPLE_REQUEST,
});

const peopleRequestSuccess = (data = []) => ({
	type: actionTypes.PEOPLE_REQUEST_SUCCESS,
	data,
});

const peopleRequestError = () => ({
	type: actionTypes.PEOPLE_REQUEST_SUCCESS_FAILED,
	error: constants.ERROR,
});

const speciesRequest = () => ({
	type: actionTypes.SPECIES_REQUEST,
});

const speciesRequestSuccess = (data = []) => ({
	type: actionTypes.SPECIES_REQUEST_SUCCESS,
	data,
});

const speciesRequestError = () => ({
	type: actionTypes.SPECIES_REQUEST_SUCCESS_FAILED,
	error: constants.ERROR,
});

const vehicleRequest = () => ({
	type: actionTypes.VEHICLES_REQUEST,
});

const vehicleRequestSuccess = (data = []) => ({
	type: actionTypes.VEHICLES_REQUEST_SUCCESS,
	data,
});

const vehicleRequestError = () => ({
	type: actionTypes.VEHICLES_REQUEST_SUCCESS_FAILED,
	error: constants.ERROR,
});

const getFilms = () => async (dispatch) => {
	try {
		dispatch(filmsRequest());

		const data = await services.requestFilms();

		return dispatch(filmsRequestSuccess(data));
	} catch (err) {
		return dispatch(filmsRequestError());
	}
};

const getStarships = () => async (dispatch) => {
	try {
		dispatch(starShipsRequest());

		const data = await services.requestStarships();

		return dispatch(starShipsRequestSuccess(data));
	} catch (err) {
		return dispatch(starShipsRequestError());
	}
};

const getVehicles = () => async (dispatch) => {
	try {
		dispatch(vehicleRequest());

		const data = await services.requestVehicles();

		return dispatch(vehicleRequestSuccess(data));
	} catch (err) {
		return dispatch(vehicleRequestError());
	}
};

const getSpecies = () => async (dispatch) => {
	try {
		dispatch(speciesRequest());

		const data = await services.requestSpecies();

		return dispatch(speciesRequestSuccess(data));
	} catch (err) {
		return dispatch(speciesRequestError());
	}
};

const getPeople = () => async (dispatch) => {
	try {
		dispatch(peopleRequest());

		const data = await services.requestPeople();

		return dispatch(peopleRequestSuccess(data));
	} catch (err) {
		return dispatch(peopleRequestError());
	}
};

export default {
	getFilms,
	getStarships,
	getVehicles,
	getSpecies,
	getPeople,
};
