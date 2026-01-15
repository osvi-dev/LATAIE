import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/Bienvenida/logo_nombre.png';

const BienvenidaSection = () => {
  const [mostrarObjetivos, setMostrarObjetivos] = useState(false);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Izquierda */}
        <div className="space-y-8">
          <h1 className="text-5xl font-bold">Bienvenido a</h1>
          <img src={logo} alt="Logo" className="max-w-md" />
        </div>

        {/* Derecha */}
        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-5">

          {/* Misión */}
          <p className="text-lg">
            <strong>Misión:</strong> Explorar, implementar y evaluar soluciones tecnológicas que potencien la enseñanza y el aprendizaje, empoderando a estudiantes y educadores para alcanzar su máximo potencial en un mundo cada día más digitalizado. Fomentamos la colaboración multi, inter y transdisciplinaria y el intercambio de conocimientos para crear un impacto positivo y sostenible en la educación.
          </p>

          {/* Visión */}
            <p className="text-lg">
              <strong>Visión:</strong> Ser un referente en la integración de tecnologías emergentes en el ámbito educativo, fomentando la transformación hacia un sistema de enseñanza adaptativo, accesible y centrado en el estudiante. Aspiramos a crear un ecosistema educativo donde la tecnología potencie el aprendizaje continuo, inspire la creatividad y prepare a las futuras generaciones para enfrentar los retos que representa la evolución y el avance tecnológico.
            </p>

          <AnimatePresence>
            {mostrarObjetivos && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="mt-4">
                      <strong>Objetivo general:</strong> Desarrollar y promover el uso reflexivo de tecnologías innovadoras para transformar y mejorar los procesos educativos, fomentando una educación inclusiva, personalizada y de alta calidad que prepare a los estudiantes para los desafíos del futuro.
                </p>

                <p className="font-semibold mb-2">
                        Objetivos específicos:
                      </p>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>Identificar y analizar los problemas y necesidades del sistema educativo, tanto a nivel local como global.</li>
                        <li>Realizar investigaciones avanzadas en tecnologías emergentes aplicadas a la educación.</li>
                        <li>Investigar y desarrollar nuevas metodologías de enseñanza y aprendizaje.</li>
                        <li>Integrar tecnologías emergentes de manera efectiva en el proceso educativo.</li>
                        <li>Fomentar la inclusión en la educación apoyada por tecnologías.</li>
                        <li>Establecer alianzas estratégicas con instituciones educativas, organizaciones gubernamentales, empresas y la comunidad en general.</li>
                        <li>Implementar proyectos piloto e intervenciones educativas en entornos reales.</li>
                        <li>Diseñar y ofrecer programas de formación para docentes y estudiantes.</li>
                        <li>Capacitar a educadores en la integración de herramientas digitales.</li>
                        <li>Fomentar una cultura de innovación y mejora continua en la ENES Morelia.</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-center pt-6">
            <button
              onClick={() => setMostrarObjetivos(!mostrarObjetivos)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg"
            >
              {mostrarObjetivos ? 'Ocultar objetivos' : 'Conoce más'}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BienvenidaSection;
