import React, { useContext, useEffect, useRef, useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import * as parkData from '../../../data/skateboard-parks.json';

const Events = (props) => {
  const [activePark, setActivePark] = useState();
  // var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  // https://blog.logrocket.com/how-to-use-react-leaflet/

  return (
    <div className='relative h-64 w-128 bg-red-200 shadow-lg rounded-lg overflow-scroll'>
      <Map center={[45.4, -75.7]} zoom={12}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {activePark && (
          <Popup
            position={[
              activePark.geometry.coordinates[1],
              activePark.geometry.coordinates[0],
            ]}
            onClose={() => {
              setActivePark(null);
            }}
          >
            <div>
              <h2>{activePark.properties.NAME}</h2>
              <p>{activePark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        )}
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0],
            ]}
            onClick={() => {
              setActivePark(park);
            }}
          />
        ))}
      </Map>
    </div>
  );
};

export default Events;
