import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

function MyMap(props) {
	const map = useMap();
	map.setView(props.center, props.zoom);
	return null;
}

export default function Map({ citySearch }) {
	const [coordinates, setCoordinates] = useState({
		lat: null,
		lon: null,
	});

	useEffect(() => {
		setCoordinates({
			lat: citySearch.location.latlon.latitude,
			lon: citySearch.location.latlon.longitude,
		});
	}, [citySearch]);

	// console.log(coordinates);
	// console.log(prevCoord);

	if (coordinates.lat === null) {
		return (
			<div>
				<h3>Loading</h3>
			</div>
		);
	}
	return (
		<div>
			{citySearch.geoname_id ? (
				<MapContainer
					scrollWheelZoom={true}
					style={{ width: '50%', height: '400px' }}>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<MyMap center={[coordinates.lat, coordinates.lon]} zoom={11} />
				</MapContainer>
			) : null}
		</div>
	);
}
