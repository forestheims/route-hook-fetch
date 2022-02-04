import React from 'react';
import DisplayedList from '../../components/DisplayedList/DisplayedList';
import './Elements.css';

export default function Elements({ displayed }) {
  return (
    <>
      <DisplayedList displayed={displayed} />
    </>
  );
}
