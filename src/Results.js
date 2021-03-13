import React from 'react';

export default function Results(citySearch, setCitySearch) {
	return (
		<div>
			<ul>
				<li>Name: {citySearch.citySearch.full_name}</li>
				<li>Id: {citySearch.citySearch.geoname_id}</li>
				<li>Population: {citySearch.citySearch.population}</li>
				<li>
					Mayor: {citySearch.citySearch._embedded['city:urban_area'].mayor}
				</li>
				<li>
					Time Zone:{' '}
					{
						citySearch.citySearch._embedded['city:timezone']._embedded[
							'tz:offsets-now'
						].short_name
					}
				</li>
			</ul>
		</div>
	);
}
