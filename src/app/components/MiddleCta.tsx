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
      <button className="bg-[var(--buttons-headings)] text-white px-15 py-4 cursor-pointer font-bold">
        Enviar email
      </button>
    </div>
  );
};

export default MiddleCta;
