import React from 'react';
import { ExternalLink, MapPin, Users, BookOpen, Award } from 'lucide-react';
import campus from "../../assets/Campus/campus.jpg";

const Enes = () => {
  const campusStats = [
    { icon: <Users className="w-6 h-6" />, number: "2,500+", label: "Estudiantes" },
    { icon: <BookOpen className="w-6 h-6" />, number: "15", label: "Programas Académicos" },
    { icon: <Award className="w-6 h-6" />, number: "120+", label: "Profesores e Investigadores" },
    { icon: <MapPin className="w-6 h-6" />, number: "45", label: "Hectáreas de Campus" }
  ];

  const handleVisitWebsite = () => {
    window.open('https://www.enesmorelia.unam.mx/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enes" className="py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Imagen con efecto elegante */}
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={campus}
            alt="Campus ENES Morelia"
            className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-6 group-hover:translate-y-0">
            <h3 className="text-3xl font-semibold mb-2">Campus ENES Morelia</h3>
            <p className="text-sm text-gray-200">Espacio moderno para la investigación y formación superior</p>
          </div>
        </div>

        {/* Texto y contenido */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
              ENES Morelia
            </h2>
            <p className="text-xl text-blue-600 font-medium mt-2">
              Escuela Nacional de Estudios Superiores
            </p>
          </div>

          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p>
              La ENES Unidad Morelia, de la UNAM, destaca por su enfoque multidisciplinario y compromiso con la excelencia académica.
            </p>
            <p>
              Ubicada en Morelia, Michoacán, fomenta un ambiente propicio para la formación profesional, la investigación de vanguardia y el desarrollo cultural.
            </p>
            <p>
              Con infraestructura de primer nivel, es un referente nacional en educación superior.
            </p>
          </div>

          {/* Estadísticas modernizadas */}
          <div className="grid grid-cols-2 gap-6">
            {campusStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-1 text-blue-700">
                  {stat.icon}
                  <span className="text-2xl font-bold text-gray-800">{stat.number}</span>
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Misión */}
          <div className="p-6 rounded-2xl border-l-4 border-blue-600 bg-white shadow">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Nuestra Misión</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Formar profesionales éticos y competentes que contribuyan al desarrollo sustentable mediante la investigación y el conocimiento.
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleVisitWebsite}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition hover:shadow-lg"
            >
              <span>Visitar Sitio Oficial</span>
              <ExternalLink className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 border border-gray-300 hover:border-blue-400 text-gray-800 bg-white px-6 py-3 rounded-xl transition hover:shadow">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Ver Ubicación</span>
            </button>
          </div>

          {/* Dirección */}
          <div className="pt-4 border-t border-gray-200 text-sm text-gray-600 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>
              Antigua Carretera a Pátzcuaro No. 8701, Col. Ex Hacienda de San José de la Huerta, Morelia, Michoacán
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enes;
