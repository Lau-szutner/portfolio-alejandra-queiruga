import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="text-black px-10 py-20  grid xl:grid-cols-[1fr_1fr] gap-10">
      <div></div>
      <div className="grid gap-5">
        <h2 className="text-3xl">Mi carrera</h2>
        <p>
          Mi carrera en el Derecho Penal comenzó al egresar de la Universidad
          Católica Argentina. Desde entonces he ejercido la profesión con
          dedicación exclusiva a la defensa penal, participando en numerosos
          procesos judiciales y brindando asesoramiento estratégico a clientes
          particulares y empresas.
        </p>
        <p>
          Mi trayectoria se sustenta en la ética, el compromiso y la búsqueda
          constante de la justicia.
        </p>
      </div>

      <div className="grid gap-10">
        <div className="grid grid-cols-2 place-items-center">
          <div>
            <p className="text-[var(--buttons-headings)] text-2xl">1240+</p>
            <p>Casos resueltos</p>
          </div>
          <div>
            <p className="text-[var(--buttons-headings)] text-2xl">120+</p>
            <p>Años de experiencia</p>
          </div>
        </div>
        <div className="place-items-center">
          <p className="text-[var(--buttons-headings)] text-2xl">Mis valores</p>
          <p>Confianza, etica, compromiso, respeto</p>
        </div>
      </div>
      <Image
        src="/titulo.jpg"
        alt="foto de la abogada"
        width={500}
        height={500}
      />
    </section>
  );
};

export default About;
