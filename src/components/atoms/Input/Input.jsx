import React from 'react';
import './style.css';

const Input = ({ type, value, name, placeholder, id, disabled, onChange, required, valid, errormsg }) => {
	return (
		<>
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				disabled={disabled}
				onChange={onChange}
				required={required}
				className={valid === false ? 'display__error' : ''}
			/>
			{type !== 'submit' && valid === false && <p className="error__text">{errormsg}</p>}
		</>
	);
};

export default Input;
