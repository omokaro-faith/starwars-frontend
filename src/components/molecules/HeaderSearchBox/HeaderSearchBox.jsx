import React from 'react';
import './style.css';
import Input from '../../atoms/Input/Input';
import { useParams } from 'react-router-dom';

const HeaderSearchBox = ({ onChange }) => {
	const { id } = useParams();
	return (
		<div className="searchbox__wrapper">
			<div>
				<Input type="text" placeholder={`search for ${id}`} name={id} />
				<div className="search__icon" />
			</div>
		</div>
	);
};

export default HeaderSearchBox;
