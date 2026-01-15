import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import eventsData from '../../data/proyectos.json';
import aprendiImg from '../../assets/Proyectos/AprendiIA.jpg';
import ilustracionImg from '../../assets/Proyectos/IlustracionP1F.jpg';
import materialesImg from '../../assets/Proyectos/MaterialesDigitales.png';

const EventsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const imageMap = {
        'aprendi': aprendiImg,
        'ilustracion': ilustracionImg,
        'materiales': materialesImg
    };

    // Prepare events with actual image paths
    const events = eventsData.map(event => ({
        ...event,
        image: imageMap[event.imageKey]
    }));

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

    return (
        <section id="eventos" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
                {/* Título de la sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Proyectos
                    </h2>
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

                                        {/* Información detallada (aparece en hover) */}
                                        <div className="absolute inset-0 bg-black bg-opacity-90 p-8 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <h3 className="text-3xl md:text-4xl font-bold text-center">
                                                {event.title}
                                            </h3>
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