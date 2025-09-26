import { Props } from 'next/script';

type props = {
  heading: string;
  text: string;
};

const ContactCard: React.FC<props> = ({ heading, text }) => {
  return (
    <div className="bg-[var(--background-black)] p-5">
      <h3 className="text-xl text-[var(--buttons-headings)]">{heading}</h3>
      <p className="text-white">{text}</p>
    </div>
  );
};

export default ContactCard;
