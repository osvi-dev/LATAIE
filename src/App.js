import React from 'react';
import Header from './components/Header/Header';
import './index.css'; // Import Tailwind CSS style
import BienvenidaSection from './components/Sections/Bienvenida';
import ENES from './components/Sections/ENES';
import Eventos from './components/Sections/Eventos';
import EquipoTrabajo from './components/Sections/EquipoTrabajo';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BienvenidaSection />
      <ENES />
      <Eventos />
      <EquipoTrabajo />
      <Footer />
      <h2>Este es un test</h2>      
    </div>
    
  );
}

export default App;
