import { useEffect, useState } from 'react';

function PersonList() {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your actual backend API URL
    fetch('http://localhost:3000/person')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); // Helps inspect data shape
        setPeople(data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err.message);
      });
  }, []); // Runs only once

  if (error) return <p>Error: {error}</p>;
  if (people.length === 0) return <p>No persons found.</p>;

  return (
    <div>
      <h2>Persons</h2>
      <ul>
        {people.map((p, index) => (
          <li key={index}>
            {p.name} - Age: {p.age} {p.lastName && `(${p.lastName})`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonList;
