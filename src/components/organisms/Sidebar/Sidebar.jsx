import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

const Sidebar = ({
	match,
	location,
	handleClickDashboard,
	handleClickStarship,
	handleClickPeople,
	handleClickVehicles,
	handleClickSpecies,
}) => {
	return (
		<div className="sidebar">
			<Link to="/starwars">
				<div className="dashboard__logo" />
			</Link>
			<div className="nav__items">
				<NavLink to="/starwars/dashboard" activeStyle={{ color: '#000' }} onClick={handleClickDashboard}>
					<div className="dashboard__icon" /> <span> Dashboard</span>
				</NavLink>
				<NavLink onClick={handleClickStarship} activeStyle={{ color: '#000' }} to="/starwars/starship">
					<div className="building__icon" /> <span> Starships</span>
				</NavLink>
				<NavLink onClick={handleClickPeople} to="/starwars/people" activeStyle={{ color: '#000' }}>
					<div className="shoppingbasket__icon" /> <span> People</span>
				</NavLink>
				<NavLink onClick={handleClickVehicles} to="/starwars/vehicles" activeStyle={{ color: '#000' }}>
					<div className="unkwown__icon" /> <span> Vehicles</span>
				</NavLink>
				<NavLink onClick={handleClickSpecies} to="/starwars/species" activeStyle={{ color: '#000' }}>
					<div className="menu__icon" /> <span> Species</span>
				</NavLink>
			</div>
		</div>
	);
};

export default Sidebar;
