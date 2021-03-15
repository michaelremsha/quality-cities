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
					<h3>{details[0].label}</h3>
					{details[0].data.map((item) => {
						return (
							<li key={item.id}>
								{item.id} = {item.float_value}
							</li>
						);
					})}
					{/* <li>
						{details[0].data[2].id} = {details[0].data[2].float_value}
					</li> */}
				</ul>
			</div>
		</div>
	);
}
