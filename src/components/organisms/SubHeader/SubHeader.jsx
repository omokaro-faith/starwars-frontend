import React from 'react';
import './style.css';
import Select from '../../molecules/Select/Select';
import HeaderSearchBox from '../../molecules/HeaderSearchBox/HeaderSearchBox';

const optionListOne = [
	{
		label: 'current_year',
		value: 'Current Year',
	},
	{
		label: 'last_year',
		value: 'Last Year',
	},

	{
		label: '2018',
		value: '2018',
	},

	{
		label: '2017',
		value: '2017',
	},
];

const optionListTwo = [
	{
		label: 'current_week',
		value: 'Current Week',
	},
	{
		label: 'last_week',
		value: 'Last Week',
	},

	{
		label: 'week_20',
		value: 'Week 20 - 04/19 - 04/25',
	},

	{
		label: 'week_19',
		value: 'Week 19 - 04/19 - 04/25',
	},
];
const SubHeader = ({ pageName }) => {
	return (
		<div>
			{pageName === 'Dashboard' ? (
				<div className="subheader__flexwrapper">
					<Select optionList={optionListOne} />
					<Select optionList={optionListTwo} />
				</div>
			) : (
				<div className="subheader__searchwrapper">
					<HeaderSearchBox onChange={() => {}} />
				</div>
			)}
		</div>
	);
};

export default SubHeader;
