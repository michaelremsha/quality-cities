import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
const axios = require('axios').default;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Navigation({
	search,
	setSearch,
	citySearch,
	setCitySearch,
	details,
	setDetails,
}) {
	const handleSubmit = (e) => {
		e.preventDefault();
		let url = `https://api.teleport.org/api/cities/?search=${search}&limit=1&embed=city:search-results/city:item/{city:urban_area,city:timezone/tz:offsets-now`;

		axios.get(url).then((res) => {
			setCitySearch(
				res.data._embedded['city:search-results'][0]._embedded[`city:item`]
			);
			const slug =
				res.data._embedded['city:search-results'][0]._embedded[`city:item`]
					._embedded['city:urban_area'].slug;

			let url1 = `https://api.teleport.org/api/urban_areas/slug:${slug}/details/`;
			axios.get(url1).then((res) => {
				setDetails(res.data.categories);
			});
		});
	};

	return (
		<div>
			<Container>
				<Row className='show-grid'>
					<Col>
						<Link to='/'>
							<h1>Home</h1>
						</Link>
					</Col>
					<Col>
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
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</div>
	);
}
