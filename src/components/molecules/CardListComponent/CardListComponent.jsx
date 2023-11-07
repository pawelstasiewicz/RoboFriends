import React from 'react';
import CardComponent from '../CardComponent/CardComponent';

function CardListComponent({ robots }) {
	const cardsArray = robots.map((user, i) => {
		return (
			<CardComponent
				key={i}
				id={robots[i].id}
				name={robots[i].name}
				email={robots[i].email}
			/>
		);
	});

	return <>{cardsArray}</>;
}

export default CardListComponent;
