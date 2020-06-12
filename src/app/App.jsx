import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style.css';
const SignIn = lazy(() => import('../components/pages/SignIn/SignIn'));
const Starwars = lazy(() => import('../components/pages/Starwars/Starwars'));
const NotFound = lazy(() => import('../components/pages/NotFound/NotFound'));

function AppRoute() {
	return (
		<BrowserRouter>
			<div>
				<Suspense fallback={<div className="loader" />}>
					<Switch>
						<Route path="/" component={SignIn} exact />
						<Route path="/starwars/:id" component={Starwars} exact />
						<Route path="/starwars" component={Starwars} exact />
						<Route component={NotFound} />
					</Switch>
				</Suspense>
			</div>
		</BrowserRouter>
	);
}

export default AppRoute;
