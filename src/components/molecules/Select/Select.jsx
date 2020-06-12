import React, { Fragment } from 'react';
import './style.css';
import Options from '../../atoms/Options/Options';

const Select = ({ onChange, optionList }) => {
	return (
		<div className="custom-select">
			<select key="">
				{optionList.length &&
					optionList.map((item) => {
						return (
							<Fragment key={item.label}>
								<Options valueId={item.label} value={item.value} />
							</Fragment>
						);
					})}
			</select>
		</div>
	);
};

export default Select;
