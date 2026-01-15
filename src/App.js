import React from 'react';
import Header from './components/Header/Header';
import './index.css'; // Import Tailwind CSS style
import BienvenidaSection from './components/Sections/Bienvenida';
import ENES from './components/Sections/ENES';
import Proyectos from './components/Sections/Proyectos';
import EquipoTrabajo from './components/Sections/EquipoTrabajo';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BienvenidaSection />
      <ENES />
      <Proyectos />
      <EquipoTrabajo />
      <Footer />
    </div>

  );
}

export default App;
