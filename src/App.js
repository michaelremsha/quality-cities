import './App.css';
import { Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Results from './Results';
import Map from './Map';
import DetailsList from './DetailsList';
import { Button } from 'react-bootstrap';

function App() {
	const [search, setSearch] = useState();
	const [citySearch, setCitySearch] = useState({});
	const [details, setDetails] = useState({});
	const [isEnabled, setIsEnabled] = useState(false);
	const [viewed, setViewed] = useState([]);

	console.log(citySearch);
	console.log(details);
	return (
		<div>
			<Navigation
				search={search}
				setSearch={setSearch}
				citySearch={citySearch}
				setCitySearch={setCitySearch}
				details={details}
				setDetails={setDetails}
			/>
			{citySearch.geoname_id ? (
				<div>
					<Results citySearch={citySearch} />
					<Map citySearch={citySearch} />
					<Button bsStyle='primary' onClick={() => setIsEnabled(!isEnabled)}>
						See More
					</Button>
					{isEnabled && (
						<DetailsList
							details={details}
							viewed={viewed}
							setViewed={setViewed}
						/>
					)}
				</div>
			) : null}
		</div>
	);
}

export default App;
