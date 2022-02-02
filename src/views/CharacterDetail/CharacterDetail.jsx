import React from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetail.css';

export default function CharacterDetail({ displayed, setRtsNQurs }) {
  const { _id } = useParams();
  setRtsNQurs(_id);

  return <div></div>;
}
