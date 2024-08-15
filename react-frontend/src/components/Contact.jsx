import React from "react";
import GoogleMapReact from "google-map-react";

const key = 'YOUR_GOOGLE_MAPS_API_KEY';

const location = {
  address: "Kamal Singh Colony, Khati Baba, Jhansi, UP",
  lat: 25.4398199,
  lng: 78.5372663,
};

const LocationPin = ({ text }) => (
  <div className="pin">
    <p className="pin-text">{text}</p>
  </div>
);

export const Contact = () => {
  return (
    <div className="relative min-h-screen">
      <div className="relative flex h-full">
        <div className="left-half h-full w-1/2 bg-blue-800 text-white flex items-center justify-center p-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Drop your queries here</h1>
            <h2 className="text-xl mb-2">Contact number: 75678027466</h2>
            <h3 className="text-lg mb-2">WhatsApp number: 648386593</h3>
            <h3 className="text-lg">Visit: Kamal Singh Colony, Khati Baba, Jhansi, UP</h3>
          </div>
        </div>
        <div className="right-half h-full w-1/2 bg-gray-200 flex items-center justify-center p-8">
          <div className="h-full w-full">
            <GoogleMapReact
              bootstrapURLKeys={{ key: key }}
              defaultCenter={{ lat: location.lat, lng: location.lng }}
              defaultZoom={17}
            >
              <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};
