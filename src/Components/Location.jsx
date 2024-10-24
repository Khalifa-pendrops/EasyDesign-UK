// import React, { useState } from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";

// const containerStyle = {
//   width: "90%",
//   height: "70vh",
//   display: "flex",
//   margin: "3rem auto",
// };

// const center = {
//   lat: 52.4862,
//   lng: -1.8904,
// };

// const locations = [
//   {
//     name: "Birmingham Museum & Art Gallery",
//     position: { lat: 52.4814, lng: -1.9035 },
//   },
//   {
//     name: "Bullring & Grand Central",
//     position: { lat: 52.4778, lng: -1.895 },
//   },
//   {
//     name: "Edgbaston Cricket Ground",
//     position: { lat: 52.455, lng: -1.9025 },
//   },
//   {
//     name: "University of Birmingham",
//     position: { lat: 52.4508, lng: -1.9305 },
//   },
//   {
//     name: "Cadbury World",
//     position: { lat: 52.4322, lng: -1.9347 },
//   },
// ];

// function Location() {
//   const [selected, setSelected] = useState(null);
//   const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
//   return (
//     <LoadScript googleMapsApiKey={apiKey}>
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
//         {locations.map((location, index) => (
//           <Marker
//             key={index}
//             position={location.position}
//             onClick={() => setSelected(location)}
//             label={location.name}
//           />
//         ))}
//         {selected && (
//           <InfoWindow
//             position={selected.position}
//             onCloseClick={() => setSelected(null)}
//           >
//             <div>
//               <h4>{selected.name}</h4>
//               <p>Interesting place to visit in Birmingham!</p>
//             </div>
//           </InfoWindow>
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// }
// export default Location;

import React from "react";

function Location() {
  return (
    <div>
      <div
        className="container col-12 mt-5"
        data-aos="fade-Up"
        data-aos-delay="0.1s"
      >
        <div className="rounded h-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155456.01736159614!2d-2.0284370255623867!3d52.49723467351431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sng!4v1726748313375!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowffullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
