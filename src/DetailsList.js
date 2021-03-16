import React, { useState, useEffect } from 'react';
import Details from './Details';

export default function DetailsList({ details, viewed, setViewed }) {
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
		</div>
	);
}
