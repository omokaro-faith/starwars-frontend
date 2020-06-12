import React, { useEffect, lazy, useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../../actions';
import Header from '../../organisms/Header/Header';
import Sidebar from '../../organisms/Sidebar/Sidebar';
import { useParams, useHistory } from 'react-router-dom';

import './style.css';
import SubHeader from '../../organisms/SubHeader/SubHeader';

const Dashboard = lazy(() => import('../../organisms/Dashboard/Dashboard'));
const Starships = lazy(() => import('../../organisms/Starships/Starships'));
const People = lazy(() => import('../../organisms/People/People'));
const Vehicles = lazy(() => import('../../organisms/Vehicles/Vehicles'));
const Species = lazy(() => import('../../organisms/Species/Species'));

const Layout = ({ match, location }) => {
	const [pageName, setPageName] = useState('Dashboard');

	const { id } = useParams();
	const history = useHistory();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.getFilms());
		dispatch(actions.getStarships());
		dispatch(actions.getVehicles());
		dispatch(actions.getSpecies());
		dispatch(actions.getPeople());

		history.replace('/starwars/dashboard');
	}, [dispatch, history]);

	const handleClickDashboard = () => {
		setPageName('Dashboard');
	};

	const handleClickStarship = () => {
		setPageName('Starship');
	};

	const handleClickPeople = () => {
		setPageName('People');
	};

	const handleClickVehicles = () => {
		setPageName('Vehicles');
	};

	const handleClickSpecies = () => {
		setPageName('Species');
	};

	let RenderComponent;

	switch (id) {
		case 'dashboard':
			RenderComponent = Dashboard;
			break;
		case 'starship':
			RenderComponent = Starships;
			break;
		case 'people':
			RenderComponent = People;
			break;
		case 'vehicles':
			RenderComponent = Vehicles;
			break;
		case 'species':
			RenderComponent = Species;
			break;

		default:
			RenderComponent = Dashboard;
			break;
	}

	return (
		<div className="dashboard">
			<Sidebar
				handleClickDashboard={handleClickDashboard}
				handleClickStarship={handleClickStarship}
				handleClickPeople={handleClickPeople}
				handleClickVehicles={handleClickVehicles}
				handleClickSpecies={handleClickSpecies}
			/>

			<div className="content">
				<Header pageName={pageName} />
				<SubHeader pageName={pageName} />

				<div className="page__body">
					<RenderComponent />
				</div>
			</div>
		</div>
	);
};

export default Layout;
