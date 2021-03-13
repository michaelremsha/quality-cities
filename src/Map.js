import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

export default function Map(citySearch) {
	const lat = citySearch.citySearch.location.latlon.latitude;
	const lon = citySearch.citySearch.location.latlon.longitude;

	return (
		<div>
			<MapContainer
				center={[lat, lon]}
				zoom={11}
				scrollWheelZoom={true}
				style={{ width: '50%', height: '400px' }}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
			</MapContainer>
		</div>
	);
}
