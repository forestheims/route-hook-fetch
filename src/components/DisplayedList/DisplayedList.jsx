import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayedList.css';

export default function DisplayedList({ displayed }) {
  return (
    <>
      {displayed.map((detail) => (
        <div key={detail._id} className="list-item">
          <Link to={`/character/${detail._id}`}>
            <h2>{detail.name}</h2>
          </Link>
          <img src={detail.photoUrl} alt={`image of ${detail.name}`} />
          <h4>{detail.affiliation}</h4>
        </div>
      ))}
    </>
  );
}
