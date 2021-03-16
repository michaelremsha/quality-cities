import React from 'react';

export default function Details({ details }) {
	console.log(details);
	if (!details) {
		return (
			<div>
				<h3>Loading</h3>
			</div>
		);
	}
	return (
		<div>
			<div>
				<h3>Detail Component</h3>
				<ul>
					{details.data.map((item) => {
						return (
							<li key={item.id}>
								{item.id} : {item[`${item.type}_value`]}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
