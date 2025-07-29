import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0A3560] text-white py-8 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Columna 1: Directorio */}

                <div className="flex flex-col justify-center items-center w-full h-full">
                    <div className="flex justify-center gap-4">
                    {/* Facebook */}
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/EnesMoreliaUnam?fref=ts" className="text-white hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                            </svg>
                        </a>
                        {/* X */}
                        <a href="https://x.com/ENESMoreliaUNAM" className="text-white hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z"></path>
                            </svg>
                        </a>
                        {/* Youtube */}
                        <a href="https://www.youtube.com/channel/UCXgydscWFKG1nCiHz6jjajw" className="text-white hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/enesmoreliaunam/?hl=es-la" className="text-white hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                            </svg>
                        </a>
                    </div>
                    </div>
                </div>

                {/* Columna 2: Información de Contacto */}
                <div className='text-xs'>
                    <h3 className="mb-2">Escuela Nacional de Estudios Superiores</h3>
                    <p className="">Unidad Morelia</p>
                    <p className=" mt-4">Antigua Carretera a Pátzcuaro No. 8701</p>
                    <p className="">Col. Ex Hacienda de San José de la Huerta</p>
                    <p className="">C.P. 58190 Morelia, Michoacán, México</p>
                    <p className="mt-4">Teléfonos:</p>
                    <p className="">Desde Morelia (443) 6-89-35-00</p>
                    <p className="">Desde Ciudad de México (55) 5623-73-00</p>
                    <p className=" mt-4">
                        <a href="https://www.enesmorelia.unam.mx/mapa-de-ubicacion/" className="hover:underline">Mapa de ubicación</a>
                    </p>
                </div>

                {/* Columna 3: Aviso Legal y Créditos */}
                <div>
                    <p className="text-xs leading-relaxed text-justify">
                        Hecho en México. Coordinación de Comunicación Social y Difusión / ENES Morelia, UNAM. Todos los Derechos Reservados. Este sitio puede ser reproducido con fines no lucrativos, siempre y cuando no se mutile, se cite la fuente completa y su dirección electrónica; de otra forma, se requiere permiso por escrito de la institución. La responsabilidad de los contenidos publicados recae de manera exclusiva en sus autores.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;