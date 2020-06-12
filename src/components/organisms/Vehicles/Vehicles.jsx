import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const Vehicles = () => {
	const vehicles = useSelector((state) => state.vehiclesData.data);
	return (
		<div className="vehiclestable__section">
			<table className="vehiclestable__scroll">
				<thead>
					<tr>
						<th>Vehicle Name</th>
						<th>Vehicle Model</th>
						<th>Vehicle Class</th>
						<th>Vehicle Manufacturer</th>
						<th>Vehicle Length</th>
						<th>Crew</th>
						<th>Passengers</th>
						<th>Cargo Capacity</th>
					</tr>
				</thead>
				<tbody className="body-half-screen">
					{vehicles &&
						vehicles.results.map((item) => {
							return (
								<tr key={item.name + item.created}>
									<td>
										<div className="firstrow__square" />
										<div>{item.name}</div>
									</td>
									<td>{item.model}</td>
									<td>{item.vehicle_class}</td>
									<td>{item.manufacturer}</td>
									<td>{item.length}</td>
									<td>{item.crew}</td>
									<td>{item.passengers}</td>
									<td>{item.cargo_capacity}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default Vehicles;
