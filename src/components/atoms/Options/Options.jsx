import React from 'react';
import './style.css';

const Options = ({ valueId, value }) => {
	return <option value={valueId}>{value} </option>;
};

export default Options;
