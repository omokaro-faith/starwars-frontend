import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Layout = () => (
	<h1 className="notfound__text">
		Nothing to see here, go back to <Link to="/starwars">dashboard page </Link>
	</h1>
);

export default Layout;
