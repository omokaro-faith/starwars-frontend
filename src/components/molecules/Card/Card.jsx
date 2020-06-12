import React from 'react';
import './style.css';

const Card = ({ logo, title, count, increase, background }) => {
	return (
		<div className="card">
			<div className="top__section">
				<p>{title}</p>
				<div className={background}>
					<img src={logo} alt="" width="25" height="22" />
				</div>
			</div>

			<div className="bottom__section">
				<p>{count}</p>
				<div className="card__footerwrapper">
					<p>↑ {increase}</p>
					<p>More than yesterday</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
