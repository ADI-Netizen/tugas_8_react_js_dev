import React from 'react';
import './css/bootstrap.min.css'
import Navbar from './halaman/Navbar';
import Bread from './halaman/Bread';
import Slide from './halaman/Slide';
import Konten from './halaman/Konten';

function App() {
  return (
    <div>
      <Navbar />
      <Bread />
      <Slide />
      <Konten />
    </div>
  );
}

export default App;
