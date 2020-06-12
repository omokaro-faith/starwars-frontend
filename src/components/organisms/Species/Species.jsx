import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const Species = () => {
	const species = useSelector((state) => state.speciesData.data);
	return (
		<div className="speciestable__section">
			<table className="speciestable__scroll">
				<thead>
					<tr>
						<th>Name</th>
						<th>Classification</th>
						<th>Designation</th>
						<th>Average Height</th>
						<th>Average Lifespan</th>
						<th>Eye colors</th>
						<th>Hair colors</th>
						<th>Language</th>
					</tr>
				</thead>
				<tbody className="body-half-screen">
					{species &&
						species.results.map((item) => {
							return (
								<tr key={item.name + item.edited}>
									<td>
										<div className="firstrow__square" />
										<div>{item.name}</div>
									</td>
									<td>{item.classification}</td>
									<td>{item.designation}</td>
									<td>{item.average_height}</td>
									<td>{item.average_lifespan}</td>
									<td>{item.eye_colors}</td>
									<td>{item.hair_colors}</td>
									<td>{item.language}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default Species;
