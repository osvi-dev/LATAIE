import React from 'react';
import logo from '../../assets/Bienvenida/logo_nombre.png'

const BienvenidaSection = () => {
  return (
    <section id="acerca" className="py-16 px-4 bg-gray-50 font-ubuntu">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Parte Izquierda - Bienvenido y Logo */}
          <div className="text-center lg:text-left space-y-8">
            {/* Texto de Bienvenida */}
            <div className="space-y-4">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-monstserrat"
              >
                Bienvenido a
              </h1>
            </div>

            {/* Logo del Laboratorio */}
            <div className="flex justify-center lg:justify-start items-center">
              <img
                src={logo}
                alt="Logo del Laboratorio"
                className="w-full max-w-md object-contain"
                style={{ height: 'auto' }}
              />
            </div>

          </div>

          {/* Parte Derecha - Texto Descriptivo */}
          <div className="space-y-6">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-3 text-center">
                Acerca del Laboratorio
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className="text-lg">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p className="text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>

              {/* Botón de Acción */}
              <div className="mt-8 flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BienvenidaSection;