import React, { useState, useEffect } from 'react';
import Details from './Details';

export default function DetailsList({ details, viewed, setViewed }) {
	console.log(details);

	useEffect(() => {
		setViewed(new Array(details.length).fill(false));
	}, []);

	function updateViewed(index) {
		const current = [...viewed];
		current[index] = !current[index];
		setViewed(current);
	}
	return (
		<div>
			{details.map((item, index) => {
				return (
					<div key={index}>
						<button
							onClick={() => {
								updateViewed(index);
							}}>
							{item.label}
						</button>
						{viewed[index] && <Details details={item} />}
					</div>
				);
			})}
			{/* {listItem && <Details details={details.list[2]} />}
			<button onClick={() => setListItem(!listItem)}>More</button> */}
		</div>
	);
}
