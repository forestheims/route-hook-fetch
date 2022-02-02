import React from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetail.css';

export default function CharacterDetail({ individual, setRtsNQurs }) {
  const { _id } = useParams();
  setRtsNQurs(`api/v1/characters/${_id}`);

  const { name, photoUrl, affiliation, allies, enemies } = individual;

  return (
    <div>
      <h2>{name}</h2>
      <img src={photoUrl} alt={`image of ${name}`} />
      <h3>{affiliation}</h3>
    </div>
  );
}
