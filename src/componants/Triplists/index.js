import React, { useCallback, useEffect, useState } from "react";
import "./index.css";

export default function Triplists() {
  let [trips, setTrips] = useState([]);
  let [url, setUrl] = useState("http://localhost:3001/trips");

  let fetchTrips = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      });
  }, [url]);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  //   console.log(trips);
  return (
    <div className="trip-list container">
      <div className="trip-card">
        <h1>Ready to go</h1>

        <button onClick={() => setUrl("http://localhost:3001/trips")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:3001/trips?location=Myanmar")}
        >
          Trip to location
        </button>
        <ul>
          {trips.map((trip) => (
            <li key={trip.id}>
              <h3>Trip name - {trip.name}</h3>
              <p>Trip price - {trip.price} ks</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
