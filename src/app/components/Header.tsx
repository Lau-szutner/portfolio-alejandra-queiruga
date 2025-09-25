import React from 'react';

const Header = () => {
  return (
    <header className="text-black px-10 py-20 h-full grid gap-10 xl:grid-cols-[1fr_1fr]">
      <div>
        <p className="text-3xl">Dr Alejandra Noemi Queiruga</p>
        <div>
          <div>
            <h1 className="text-2xl">Abogada Penalista</h1>
            <p className="text-xl">
              Licenciada en Derecho por la Universidad Católica Argentina (UCA)
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <p className="font-bold">Atención en todo Buenos Aires</p>
          <p>11-2564-4681</p>
        </div>

        <div className="w-full flex justify-between">
          <button className="bg-[var(--blue-btn)] text-white px-15 py-5 cursor-pointer">
            Enviar email
          </button>
          <button className="bg-[var(--green-btn)] text-white px-15 py-5 cursor-pointer">
            Enviar email
          </button>
        </div>
      </div>

      <div className="w-100 h-100 bg-amber-500 "></div>
    </header>
  );
};

export default Header;
