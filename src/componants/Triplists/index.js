import React, { useEffect, useState } from "react";
import "./index.css";
import useFetch from "../../hooks/useFetch";

export default function Triplists() {
  let [url, setUrl] = useState("http://localhost:3001/trips");

  let { data: trips , loading , error } = useFetch(url);

  return (
    <div className="trip-list container">
      {error && <p>Something went wrong</p> }
      {!error && 
      <div className="trip-card">
        <h1>Ready to go</h1>
        {loading && <p>Loading</p> }
        <button onClick={() => setUrl("http://localhost:3001/trips")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:3001/trips?location=Myanmar")}
        >
          Trip to location
        </button>
        <ul>
          {trips &&  trips.map((trip) => (
            <li key={trip.id}>
              <h3>Trip name - {trip.name}</h3>
              <p>Trip price - {trip.price} ks</p>
            </li>
          ))}
        </ul>
      </div>
      
      }
    </div>
  );
}
