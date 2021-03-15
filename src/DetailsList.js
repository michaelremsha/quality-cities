import React, { useState, useEffect } from 'react';
import Details from './Details';

export default function DetailsList(details) {
	console.log(details);

	const [listItem, setListItem] = useState(false);
	const [listItemPrev, setListItemPrev] = useState(false);

	return (
		<div>
			{listItem && <Details details={details.list[18]} />}
			<button
				onClick={() => {
					setListItem(!listItem);
					setListItemPrev(!listItemPrev);
				}}>
				More
			</button>
			{/* {listItem && <Details details={details.list[2]} />}
			<button onClick={() => setListItem(!listItem)}>More</button> */}
		</div>
	);
}
