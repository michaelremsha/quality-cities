import React, { useState, useEffect } from 'react';
import Details from './Details';

export default function DetailsList({ details, viewed, setViewed }) {
	console.log(details);

	const [listItem, setListItem] = useState(false);
	// const [listItemPrev, setListItemPrev] = useState(false);

	return (
		<div>
			{listItem && <Details details={details[18]} />}

			<button
				onClick={() => {
					// const current = viewed.slice();
					// current.append();
					// console.log(current);
					setListItem(!listItem);
					// setViewed();
				}}>
				More
			</button>
			{/* {listItem && <Details details={details.list[2]} />}
			<button onClick={() => setListItem(!listItem)}>More</button> */}
		</div>
	);
}
