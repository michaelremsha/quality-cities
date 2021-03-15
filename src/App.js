import './App.css';
import { Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Results from './Results';
import Map from './Map';
import Details from './Details';

function App() {
	const [search, setSearch] = useState();
	const [citySearch, setCitySearch] = useState({});
	const [details, setDetails] = useState({});
	const [isEnabled, setIsEnabled] = useState(false);
	// const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	// let isEnabled = true;

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
					{isEnabled && <Details details={details} />}
					<button onClick={() => setIsEnabled(!isEnabled)}>
						Click to unmount
					</button>
					<Map citySearch={citySearch} />
				</div>
			) : null}
		</div>
	);
}

export default App;
