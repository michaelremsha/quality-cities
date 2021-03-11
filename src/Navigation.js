import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
const axios = require('axios').default;

export default function Navigation() {
	const [search, setSearch] = useState('');
	const [citySearch, setCitySearch] = useState({});
	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `https:api.teleport.org/api/cities/?search=${search}&limit=1&embed=city:search-results/city:item/{city:urban_area,city:timezone/tz:offsets-now`;

		//api.teleport.org/api/cities/?search=${search}

		axios.get(url).then((res) => {
			setCitySearch(
				res.data._embedded['city:search-results'][0]._embedded[`city:item`]
			);
		});
	};

	console.log(citySearch);

	return (
		<div className='front'>
			<Link to='/'>
				<h1>Home</h1>
			</Link>
			<form onSubmit={handleSubmit}>
				<label>
					City:
					<input
						type='text'
						placeholder='Type City name'
						onChange={(e) => setSearch(e.target.value)}
					/>
				</label>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
}
