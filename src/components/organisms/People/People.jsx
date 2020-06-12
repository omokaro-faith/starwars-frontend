import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const People = () => {
	const people = useSelector((state) => state.peopleData.data);
	return (
		<div className="peopletable__section">
			<table className="peopletable__scroll">
				<thead>
					<tr>
						<th>Name</th>
						<th>Birth year</th>
						<th>Gender</th>
						<th>Eye color</th>
						<th>Hair color</th>
						<th>Height</th>
						<th>Mass</th>
						<th>Skin color</th>
						<th>Created</th>
					</tr>
				</thead>
				<tbody className="body-half-screen">
					{people &&
						people.results.map((item) => {
							return (
								<tr key={item.name + item.created}>
									<td>
										<div className="firstrow__circle" />
										<div>{item.name}</div>
									</td>
									<td>{item.birth_year}</td>
									<td>{item.gender}</td>
									<td>{item.eye_color}</td>
									<td>{item.hair_color}</td>
									<td>{item.height}</td>
									<td>{item.mass}</td>
									<td>{item.skin_color}</td>
									<td className="text__green">{item.created}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default People;
