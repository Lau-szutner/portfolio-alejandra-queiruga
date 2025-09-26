import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="text-black px-10 py-20 grid gap-10 xl:grid-cols-[1fr_1fr] xl:px-50 items-center">
      <div className="grid h-fit gap-10">
        <p className="text-4xl">Dr Alejandra Noemi Queiruga</p>
        <div>
          <div className="grid gap-5">
            <h1 className="text-2xl">Abogada Penalista</h1>
            <p className="text-xl">
              Licenciada en Derecho por la Universidad Católica Argentina (UCA)
            </p>
          </div>
        </div>
        <div className="grid gap-5 font-bold text-xl">
          <p>Atención en todo Buenos Aires</p>
          <p>11-2564-4681</p>
        </div>

        <div className="w-full grid gap-5 md:grid-cols-2">
          <button className="bg-[var(--blue-btn)] text-white px-15 py-4 cursor-pointer w-full xl:w-fit">
            Enviar email
          </button>
          <button className="bg-[var(--green-btn)] text-white px-15 py-4 cursor-pointer w-full xl:w-fit">
            Enviar email
          </button>
        </div>
      </div>

      <div className="grid place-content-center">
        <Image
          src="/photo-lawyer.png"
          alt="foto de la abogada"
          width={500}
          height={500}
          className="border-4 border-b-black"
        />
        <p className="text-center text-2xl italic text-[var(--buttons-and-headings)]">
          Más de 20 años dedicados
          <br />
          Exclusivamente a la defensa penal
        </p>
      </div>
    </header>
  );
};

export default Header;
