import React from 'react';

type props = {
  heading: string;
  text: string;
};

const ContactCard: React.FC<props> = ({ heading, text }) => {
  return (
    <div className="bg-[#353535] p-6 w-full max-w-xs xl:max-w-md h-80 shadow-xl/50 cursor-pointer hover:scale-110 transition-transform duration-300">
      <h3 className="text-xl text-[var(--buttons-headings)]">{heading}</h3>
      <p className="text-white">{text}</p>
    </div>
  );
};

export default ContactCard;
