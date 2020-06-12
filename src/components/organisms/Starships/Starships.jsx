import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

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
										<div>{item.name}</div>
									</td>
									<td>{item.model}</td>
									<td>{item.starship_class}</td>
									<td className="purple__text">
										{item.cost_in_credits}
										{item.cost_in_credits !== 'unknown' && ' GC'}
									</td>
									<td>{item.passengers}</td>
									<td>{item.length}</td>
									<td>{item.crew}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default Starships;
