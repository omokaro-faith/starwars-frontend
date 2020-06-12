import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../assets/video-camera.png';
import ufo from '../../../assets/ufo.png';
import student from '../../../assets/group-of-students.png';
import taxi from '../../../assets/taxi.png';
import phylogenetics from '../../../assets/phylogenetics.png';
import Card from '../../molecules/Card/Card';
import constants from '../../../constants';

import './style.css';

const Dashboard = () => {
	const films = useSelector((state) => state.filmsData.data);
	const starships = useSelector((state) => state.starshipsData.data);
	const vehicles = useSelector((state) => state.vehiclesData.data);
	const species = useSelector((state) => state.speciesData.data);
	const people = useSelector((state) => state.peopleData.data);

	return (
		<>
			<div className="flex__wrapper">
				<Card
					logo={logo}
					title="Films"
					count={(films && films.count) || constants.EMDASH}
					increase="20"
					background="card__logocontainer"
				/>
				<Card
					logo={ufo}
					title="Starships"
					count={(starships && starships.count) || constants.EMDASH}
					increase="20"
					background="card__ufocontainer"
				/>
				<Card
					logo={student}
					title="People"
					count={(people && people.count) || constants.EMDASH}
					increase="20"
					background="card__studentcontainer"
				/>
				<Card
					logo={taxi}
					title="Vehicles"
					count={(vehicles && vehicles.count) || constants.EMDASH}
					increase="20"
					background="card__taxicontainer"
				/>
				<Card
					logo={phylogenetics}
					title="Species"
					count={(species && species.count) || constants.EMDASH}
					increase="20"
					background="card__phylogeneticscontainer"
				/>
			</div>

			{!films ? (
				<div className="text__loading"> Please Wait.........</div>
			) : (
				<div className="table__section">
					<h2>Films</h2>

					<table className="table-scroll small-first-col">
						<thead>
							<tr>
								<th>Film Title</th>
								<th>Director</th>
								<th>Producer</th>
								<th>Release Date</th>
								<th>Episode ID</th>
								<th>Characters</th>
							</tr>
						</thead>
						<tbody className="body-half-screen">
							{films &&
								films.results.map((item) => {
									return (
										<tr key={item.episode_id}>
											<td>
												<div className="title_icon">
													<img src={logo} alt={item.director} width="25" height="22" />
												</div>
												<div className="film__title">{item.title}</div>
											</td>
											<td>{item.director || constants.EMDASH}</td>
											<td>{item.producer || constants.EMDASH}</td>
											<td>{item.release_date || constants.EMDASH}</td>
											<td>{item.episode_id || constants.EMDASH}</td>
											<td className="text__green">{item.url || constants.EMDASH}</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
};

export default Dashboard;
