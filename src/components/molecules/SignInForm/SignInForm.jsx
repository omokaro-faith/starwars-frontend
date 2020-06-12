import React from 'react';
import './style.css';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

const SignInForm = ({ onSubmit, disabled, emailOnchange, passwordOnchange, validPassword, validEmail }) => {
	return (
		<>
			<form onSubmit={onSubmit}>
				<Label htmlFor="email" text="Email address" />
				<Input
					type="email"
					id="email"
					name="firstname"
					placeholder="Email address"
					onChange={emailOnchange}
					required={true}
					valid={validEmail}
					errormsg="The email must be a valid email address"
				/>
				<Label htmlFor="password" text="Password" />
				<Input
					type="password"
					id="password"
					name="password"
					placeholder="Enter strong password"
					required={true}
					onChange={passwordOnchange}
					valid={validPassword}
					errormsg="Password must be a combination of letters and numbers, and must be at least 8 characters"
				/>
				<Input type="submit" value="Sign in" disabled={disabled} />
			</form>
		</>
	);
};

export default SignInForm;
