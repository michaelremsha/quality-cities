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
	// const [isEnabled, setIsEnabled] = useState(false);
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
					{/* <Details details={details} /> */}
					{/* <button onClick={setIsEnabled(!isEnabled)}>Click to unmount</button> */}
					{/* {isEnabled === true ? (
						<Results citySearch={citySearch} />
					) : (
						<Details details={details} />
					)} */}

					<Map citySearch={citySearch} />
				</div>
			) : null}
			<link
				rel='stylesheet'
				href='https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
				integrity='sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=='
				crossOrigin=''
			/>
			<script
				src='https://unpkg.com/leaflet@1.7.1/dist/leaflet.js'
				integrity='sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=='
				crossOrigin=''></script>
		</div>
	);
}

export default App;
