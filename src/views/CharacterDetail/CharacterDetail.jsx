import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetail.css';

export default function CharacterDetail() {
  const { _id } = useParams();
  const [individual, setIndividual] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://last-airbender-api.herokuapp.com/api/v1/characters/${_id}`
      );
      const data = await response.json();
      setIndividual(data);
    };
    fetchData();
  }, [_id]);

  const { name, photoUrl, affiliation } = individual;

  return (
    <div>
      <h2>{name}</h2>
      <img src={photoUrl} alt={`image of ${name}`} />
      <h3>{affiliation}</h3>
    </div>
  );
}
