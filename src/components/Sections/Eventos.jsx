import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from 'lucide-react';
import eventsData from '../../../src/data/eventos.json';

const EventsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Datos dummy de eventos
    const events = eventsData

        // Auto-play del carrusel
        useEffect(() => {
            if (isAutoPlaying) {
                const interval = setInterval(() => {
                    setCurrentIndex((prevIndex) =>
                        prevIndex === events.length - 1 ? 0 : prevIndex + 1
                    );
                }, 3000);

                return () => clearInterval(interval);
            }
        }, [currentIndex, isAutoPlaying, events.length]);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? events.length - 1 : currentIndex - 1);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === events.length - 1 ? 0 : currentIndex + 1);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const getCategoryColor = (category) => {
        const colors = {
            'Conferencia': 'bg-blue-500',
            'Workshop': 'bg-green-500',
            'Simposio': 'bg-purple-500',
            'Mesa Redonda': 'bg-orange-500',
            'Curso': 'bg-red-500',
            'Presentación': 'bg-indigo-500'
        };
        return colors[category] || 'bg-gray-500';
    };

    return (
        <section id="eventos" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
                {/* Título de la sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Eventos
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Descubre los próximos eventos, conferencias y actividades académicas de nuestro laboratorio
                    </p>
                </div>

                {/* Carrusel */}
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {events.map((event) => (
                                <div key={event.id} className="w-full flex-shrink-0 relative group">
                                    <div className="relative h-96 md:h-[500px]">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Overlay gradiente */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                                        {/* Información básica (siempre visible) */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(event.category)}`}>
                                                    {event.category}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                                {event.title}
                                            </h3>
                                            <div className="flex items-center space-x-4 text-sm text-gray-200">
                                                <div className="flex items-center space-x-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{event.time}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Información detallada (aparece en hover) */}
                                        <div className="absolute inset-0 bg-black bg-opacity-90 p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <div className="max-w-2xl mx-auto text-center space-y-4">
                                                <div className="flex items-center justify-center space-x-2 mb-4">
                                                    <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${getCategoryColor(event.category)}`}>
                                                        {event.category}
                                                    </span>
                                                </div>

                                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                                    {event.title}
                                                </h3>

                                                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                                                    {event.description}
                                                </p>

                                                <div className="space-y-2 text-blue-200">
                                                    <div className="flex items-center justify-center space-x-2">
                                                        <Calendar className="w-5 h-5" />
                                                        <span className="font-medium">{event.date}</span>
                                                    </div>
                                                    <div className="flex items-center justify-center space-x-2">
                                                        <Clock className="w-5 h-5" />
                                                        <span>{event.time}</span>
                                                    </div>
                                                    <div className="flex items-center justify-center space-x-2">
                                                        <MapPin className="w-5 h-5" />
                                                        <span>{event.location}</span>
                                                    </div>
                                                </div>

                                                <div className="mt-6">
                                                    <p className="text-sm text-gray-300 mb-4">
                                                        <strong>Ponente:</strong> {event.speaker}
                                                    </p>
                                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                                                        Más información
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controles de navegación */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicadores */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {events.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-blue-600 w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Control de auto-play */}
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                            {isAutoPlaying ? 'Pausar auto-play' : 'Iniciar auto-play'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsCarousel;