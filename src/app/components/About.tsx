import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="text-black px-10 py-20 grid gap-10 xl:grid-cols-[1fr_1fr] place-items-center xl:px-50">
      <div className="grid gap-20">
        <div className="grid gap-5">
          <h2 className="text-4xl">Mi carrera</h2>
          <p>
            Mi carrera en el Derecho Penal comenzó al egresar de la Universidad
            Católica Argentina. Desde entonces he ejercido la profesión con
            dedicación exclusiva a la <strong>defensa penal</strong>,
            participando en numerosos procesos judiciales y brindando
            asesoramiento estratégico a clientes particulares y empresas.
          </p>
          <p>
            Mi trayectoria se sustenta en la ética, el compromiso y la búsqueda
            constante de la justicia.
          </p>
        </div>

        <div className="grid gap-10">
          <div className="grid grid-cols-2 place-items-center">
            <div className="font-bold">
              <p className="text-[var(--buttons-headings)] text-2xl text-center">
                1240+
              </p>
              <p>Casos resueltos</p>
            </div>
            <div className="font-bold">
              <p className="text-[var(--buttons-headings)] text-2xl text-center">
                120+
              </p>
              <p>Años de experiencia</p>
            </div>
          </div>
          <div className="place-items-center font-bold">
            <p className="text-[var(--buttons-headings)] text-2xl">
              Mis valores:
            </p>
            <p>Confianza, etica, compromiso, respeto</p>
          </div>
        </div>
      </div>
      <Image
        src="/titulo.jpg"
        alt="foto de la abogada"
        width={500}
        height={500}
        className=""
      />
    </section>
  );
};

export default About;
