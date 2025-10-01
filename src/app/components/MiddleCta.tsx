import React from 'react';

type props = {
  text: string;
  heading: string;
};

const MiddleCta: React.FC<props> = ({ heading, text }) => {
  return (
    <div className="grid bg-[var(--background-black)] place-items-center py-5 gap-2 h-fit px-10">
      <h2 className="text-2xl text-center">{heading}</h2>
      <p>{text}</p>
      <a
        href="https://wa.me/5491126930421?text=Hola%2C%20vi%20tu%20p%C3%A1gina%20y%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios%20en%20defensa%20penal.%20Me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20trabaj%C3%A1s%20y%20en%20qu%C3%A9%20casos%20pod%C3%A9s%20asistir.%20Gracias."
        target="_blank"
        className="bg-[var(--green-btn)] text-white font-bold cursor-pointer xl:w-[300px] hover:scale-110 transition-transform duration-300 flex items-center justify-center text-center h-[70px]"
      >
        Contactar por WhatsApp
      </a>
    </div>
  );
};

export default MiddleCta;
