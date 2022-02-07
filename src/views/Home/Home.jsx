import React from 'react';
import DisplayedList from '../../components/DisplayedList/DisplayedList';
import './Home.css';

export default function Home({ displayed }) {
  return (
    <>
      <h1>Ten Random Characters from Avatar: The Last Airbender</h1>
      <h3>Click on the name of one to see more details</h3>
      <DisplayedList displayed={displayed} />
    </>
  );
}
