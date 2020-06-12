import React from 'react';
import './style.css';

const Label = ({ text, htmlFor }) => {
	return <label htmlFor={htmlFor}>{text}</label>;
};

export default Label;
