import React from 'react';
import './style.css';

const SignInFooter = () => {
	return (
		<div className="footer">
			<div>
				<p>All rights reserved © 2020 STAR WARS</p>
			</div>
			<div>
				<p>Privacy | Terms</p>
			</div>
			<div>
				<p>
					English <span className="triangle__down"></span>
				</p>
			</div>
		</div>
	);
};

export default SignInFooter;
