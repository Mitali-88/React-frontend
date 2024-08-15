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
        <div className="flex flex-col md:flex-row min-h-screen">
           <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center">
               <div className="absolute left-0 top-0 w-0 h-0 border-r-[100vw] border-r-blue-800 border-b-[100vh] border-b-transparent"></div>
                <div className="relative z-10 p-8 text-white">
                    <h1 className="text-2xl mb-4">Drop your queries here</h1>
                    <h2 className="text-xl mb-2">Contact number: 75678027466</h2>
                    <h3 className="text-lg mb-1">WhatsApp number: 648386593</h3>
                    <h3 className="text-lg">Visit: Kamal Singh Colony, Khati Baba, Jhansi, UP</h3>
                </div>
            </div>
            <div className="flex items-center justify-center p-8 w-full md:w-1/2" style={{ height: '50vh' }}>
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
    );
};
