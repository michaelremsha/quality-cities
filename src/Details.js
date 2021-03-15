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
					{/* <h3>{details.label}</h3> */}
					{details.data.map((item) => {
						return (
							<li key={item.id}>
								{item.id} : {item[`${item.type}_value`]}
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
