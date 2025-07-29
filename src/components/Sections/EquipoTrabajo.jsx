import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import teamData from '../../../src/data/equipo.json';
const TeamSection = () => {
  const [flippedCards, setFlippedCards] = useState({});

  // Datos dummy del equipo
  const teamMembers = teamData

  const handleCardClick = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="equipo" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Equipo de Trabajo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los investigadores y profesionales que conforman nuestro equipo multidisciplinario
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative h-96 perspective-1000 cursor-pointer"
              onClick={() => handleCardClick(member.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards[member.id] ? 'rotate-y-180' : ''
                }`}
              >
                {/* Frente de la tarjeta */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-32 h-32 mb-6 rounded-full overflow-hidden ring-4 ring-blue-100">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {member.position}
                    </p>
                    <p className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                      Click para más información
                    </p>
                  </div>
                </div>

                {/* Reverso de la tarjeta */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-[#023141] to-[#034657] rounded-2xl shadow-lg text-white">
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-blue-100 font-medium mb-4">{member.position}</p>
                      <p className="text-sm leading-relaxed mb-6 text-blue-50">
                        {member.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <Mail className="w-4 h-4 text-blue-200" />
                        <span className="text-blue-100">{member.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <Phone className="w-4 h-4 text-blue-200" />
                        <span className="text-blue-100">{member.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <MapPin className="w-4 h-4 text-blue-200" />
                        <span className="text-blue-100">{member.location}</span>
                      </div>
                    </div>
                    
                    <button className="mt-4 w-full bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>Ver perfil completo</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default TeamSection;