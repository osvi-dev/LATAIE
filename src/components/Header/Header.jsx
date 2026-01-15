import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/Header/logo_no_bg.png';
import fondo from '../../assets/Header/ENES.jpg';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Imagen Superior */}
      <div className="w-full h-72 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
        <img
          src={fondo}
          alt="Fondo"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            Laboratorio de Tecnologías Aplicadas a la Innovación Educativa
          </h1>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div>
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-1/3 w-1/4 "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block font-header">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#acerca"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md"
                >
                  Acerca de
                </a>
                <a
                  href="#enes"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md"
                >
                  ENES Morelia
                </a>
                <a
                  href="#eventos"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md"
                >
                  Proyectos
                </a>
                <a
                  href="#equipo"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md"
                >
                  Equipo de trabajo
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
              <a
                href="#acerca"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md"
                onClick={toggleMenu}
              >
                Acerca de
              </a>
              <a
                href="#enes"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md"
                onClick={toggleMenu}
              >
                ENES Morelia
              </a>
              <a
                href="#eventos"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md"
                onClick={toggleMenu}
              >
                Eventos
              </a>
              <a
                href="#publicaciones"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md"
                onClick={toggleMenu}
              >
                Publicaciones
              </a>
              <a
                href="#equipo"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md"
                onClick={toggleMenu}
              >
                Equipo de trabajo
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;