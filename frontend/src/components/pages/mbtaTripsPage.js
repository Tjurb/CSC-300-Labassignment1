import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/trips?sort=headsign&filter%5Broute%5D=Red%2C%20Blue%2C%20Orange',
      );
      setTrips(result.data.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {trips.map(trip => (
        <Card
        body
        outline
        color="success"
        className="mx-1 my-2"
        style={{ width: "30rem" }}
      >
        <Card.Body>
        <Card.Title>Trip</Card.Title>
        <Card.Text>{trip.attributes.header}{trip.attributes.description}</Card.Text>
        </Card.Body>
      </Card>
      ))}

        <h1>Trips</h1>
      {trips.map(trip => (
        <div key={trip.id}>
          <h3>{trip.attributes.header}</h3>
          <p>{trip.attributes.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Trips;