import './App.css';
import { Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Results from './Results';
import Map from './Map';
import DetailsList from './DetailsList';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
	const [search, setSearch] = useState();
	const [citySearch, setCitySearch] = useState({});
	const [details, setDetails] = useState({});
	const [isEnabled, setIsEnabled] = useState(false);
	const [viewed, setViewed] = useState([]);

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
					<Button bsstyle='primary' onClick={() => setIsEnabled(!isEnabled)}>
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
