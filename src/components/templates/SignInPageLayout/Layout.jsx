import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SignInForm from '../../molecules/SignInForm/SignInForm';
import SignInFooter from '../../molecules/SignInFooter/SignInFooter';

import './style.css';

const Layout = () => {
	const [disableButton, setDisableButton] = useState(true);
	const [validEmail, setValidEmail] = useState(null);
	const [validPassword, setValidPassword] = useState(null);

	const history = useHistory();

	const onSubmit = (e) => {
		e.preventDefault();

		history.push('/starwars');
	};

	const emailOnchange = (e) => {
		let regex = /\S+@\S+\.\S+/;
		setValidEmail(regex.test(e.target.value));
	};

	const passwordOnchange = (e) => {
		let regex = /^(?=.*\d)(?=.*[a-z-A-Z]).{8,}$/;
		setValidPassword(regex.test(e.target.value));
	};

	useEffect(() => {
		if (validEmail && validPassword) setDisableButton(false);
		else if (!validEmail || !validPassword) setDisableButton(true);
	}, [validEmail, validPassword]);

	return (
		<div className="signin_wrapper">
			<div className="left__container">
				<p>Welcome to Star Wars the Clone Wars</p>
				<div className="space_ship" />
				<div className="rectangle" />
			</div>
			<div className="middle__container">
				<p>Sign in to continue to your account.</p>
				<div className="form__container">
					<SignInForm
						onSubmit={onSubmit}
						disabled={disableButton}
						emailOnchange={emailOnchange}
						passwordOnchange={passwordOnchange}
						validEmail={validEmail}
						validPassword={validPassword}
					/>
				</div>
				<SignInFooter />
			</div>
			<div className="right__container" />
		</div>
	);
};

export default Layout;
