import React from 'react';
import './style.css';

const Header = ({ pageName }) => {
	return (
		<div className="page__header">
			<p className="section__name">{pageName}</p>
			<div className="chat__icon" />
			<div className="notification__icon" />
			<div className="profile__icon" />
		</div>
	);
};

export default Header;
