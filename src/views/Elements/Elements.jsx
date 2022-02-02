import React from 'react';
import { Link } from 'react-router-dom';
import DisplayedList from '../../components/DisplayedList/DisplayedList';
import './Elements.css';

export default function Elements({ displayed, setRtsNQurs }) {
  return (
    <div>
      <DisplayedList displayed={displayed} />
    </div>
  );
}
