import actionTypes from '../actions/actionTypes';

const initialState = {
	filmsData: {
		isPending: false,
		isFulfilled: false,
		isRejected: false,
		data: null,
		error: null,
	},
	peopleData: {
		isPending: false,
		isFulfilled: false,
		isRejected: false,
		data: null,
		error: null,
	},
	speciesData: {
		isPending: false,
		isFulfilled: false,
		isRejected: false,
		data: null,
		error: null,
	},
	starshipsData: {
		isPending: false,
		isFulfilled: false,
		isRejected: false,
		data: null,
		error: null,
	},
	vehiclesData: {
		isPending: false,
		isFulfilled: false,
		isRejected: false,
		data: null,
		error: null,
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FILMS_REQUEST:
			return {
				...state,
				filmsData: {
					...initialState.filmsData,
					isPending: true,
				},
			};
		case actionTypes.FILMS_REQUEST_SUCCESS:
			return {
				...state,
				filmsData: {
					...initialState.filmsData,
					isFulfilled: true,
					data: action.data,
				},
			};
		case actionTypes.FILMS_REQUEST_SUCCESS_FAILED:
			return {
				...state,
				filmsData: {
					...initialState.filmsData,
					isRejected: true,
					error: action.error,
				},
			};
		case actionTypes.STARSHIPS_REQUEST:
			return {
				...state,
				starshipsData: {
					...initialState.starshipsData,
					isPending: true,
				},
			};
		case actionTypes.STARSHIPS_REQUEST_SUCCESS:
			return {
				...state,
				starshipsData: {
					...initialState.starshipsData,
					isFulfilled: true,
					data: action.data,
				},
			};
		case actionTypes.STARSHIPS_REQUEST_SUCCESS_FAILED:
			return {
				...state,
				starshipsData: {
					...initialState.starshipsData,
					isRejected: true,
					error: action.error,
				},
			};
		case actionTypes.VEHICLES_REQUEST:
			return {
				...state,
				vehiclesData: {
					...initialState.vehiclesData,
					isPending: true,
				},
			};
		case actionTypes.VEHICLES_REQUEST_SUCCESS:
			return {
				...state,
				vehiclesData: {
					...initialState.vehiclesData,
					isFulfilled: true,
					data: action.data,
				},
			};
		case actionTypes.VEHICLES_REQUEST_SUCCESS_FAILED:
			return {
				...state,
				vehiclesData: {
					...initialState.vehiclesData,
					isRejected: true,
					error: action.error,
				},
			};
		case actionTypes.PEOPLE_REQUEST:
			return {
				...state,
				peopleData: {
					...initialState.peopleData,
					isPending: true,
				},
			};
		case actionTypes.PEOPLE_REQUEST_SUCCESS:
			return {
				...state,
				peopleData: {
					...initialState.peopleData,
					isFulfilled: true,
					data: action.data,
				},
			};
		case actionTypes.PEOPLE_REQUEST_SUCCESS_FAILED:
			return {
				...state,
				peopleData: {
					...initialState.peopleData,
					isRejected: true,
					error: action.error,
				},
			};
		case actionTypes.SPECIES_REQUEST:
			return {
				...state,
				speciesData: {
					...initialState.speciesData,
					isPending: true,
				},
			};
		case actionTypes.SPECIES_REQUEST_SUCCESS:
			return {
				...state,
				speciesData: {
					...initialState.speciesData,
					isFulfilled: true,
					data: action.data,
				},
			};
		case actionTypes.SPECIES_REQUEST_SUCCESS_FAILED:
			return {
				...state,
				speciesData: {
					...initialState.speciesData,
					isRejected: true,
					error: action.error,
				},
			};
		default:
			return state;
	}
};
