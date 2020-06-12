import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import constants from '../../../constants';

const Starships = () => {
	const starships = useSelector((state) => state.starshipsData.data);
	return (
		<div className="starshipstable__section">
			<table className="starshipstable__scroll">
				<thead>
					<tr>
						<th>Name</th>
						<th>Model</th>
						<th>Class</th>
						<th>Cost (in GC)</th>
						<th>Passengers</th>
						<th>Length</th>
						<th>Crew</th>
					</tr>
				</thead>
				<tbody className="body-half-screen">
					{starships &&
						starships.results.map((item) => {
							return (
								<tr key={item.name + item.cost_in_credits}>
									<td>
										<div className="firstrow__square" />
										<div>{item.name || constants.EMDASH}</div>
									</td>
									<td>{item.model || constants.EMDASH}</td>
									<td>{item.starship_class || constants.EMDASH}</td>
									<td className="purple__text">
										{item.cost_in_credits}
										{item.cost_in_credits !== 'unknown' && ' GC'}
									</td>
									<td>{item.passengers || constants.EMDASH}</td>
									<td>{item.length || constants.EMDASH}</td>
									<td>{item.crew || constants.EMDASH}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default Starships;
