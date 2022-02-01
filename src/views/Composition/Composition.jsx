import React from 'react';
import './Composition.css';
import Header from '../../components/composition/Header';
import Footer from '../../components/composition/Footer';

export default function Composition({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
