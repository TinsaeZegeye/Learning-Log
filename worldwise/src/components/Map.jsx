import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";

import { useCities } from "../contexts/useCities";
import { useGeoLocation } from "../hooks/useGeoLocation";
import Button from "./Button";
import styles from "./Map.module.css";
import { usePosition } from "../hooks/usePosition";

export default function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const {
    isLoading: isLoadingGeoLocation,
    position: geoLocationPosition,
    getPosition,
  } = useGeoLocation();

  const [mapLat, mapLng] = usePosition();
  const { cities } = useCities();

  useEffect(() => {
    async function synchronizeMap() {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    }
    synchronizeMap();
  }, [mapLat, mapLng]);

  useEffect(() => {
    async function synchronizeGeoLocation() {
      if (geoLocationPosition)
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    }
    synchronizeGeoLocation();
  }, [geoLocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingGeoLocation ? "Loading..." : "Use Your Location"}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <NavigateToForm />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function NavigateToForm() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });

  return null;
}
