import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header
      className="text-black px-10 py-20 pt-40 grid gap-10 xl:grid-cols-[1fr_1fr] xl:px-50 items-center"
      id="home"
    >
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
        <div className="grid gap-5 font-bold text-xl xl:grid-cols-2">
          <p>Atención en todo Buenos Aires</p>

          <div className="flex gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <p>11-2564-4681</p>
          </div>
        </div>

        <div className="w-full grid gap-5 md:grid-cols-2">
          <button className="bg-[var(--blue-btn)] text-white px-15 py-4 cursor-pointer w-full xl:w-fit hover:scale-110 transition-transform duration-300">
            Enviar email
          </button>
          <button className="bg-[var(--green-btn)] text-white px-15 py-4 cursor-pointer w-full xl:w-fit hover:scale-110 transition-transform duration-300">
            Enviar email
          </button>
        </div>
      </div>

      <div className="grid place-content-center gap-5">
        <Image
          src="/photo-lawyer.png"
          alt="foto de la abogada"
          width={500}
          height={500}
          className="border-4 border-b-black"
        />
        <p className="text-center text-2xl italic text-[var(--buttons-headings)]">
          Más de 20 años dedicados
          <br />
          Exclusivamente a la defensa penal
        </p>
      </div>
    </header>
  );
};

export default Header;
