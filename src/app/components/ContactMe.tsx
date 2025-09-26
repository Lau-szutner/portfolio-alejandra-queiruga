import Image from 'next/image';

const ContactMe = () => {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="px-4 py-20 grid gap-30 xl:grid-cols-[1fr_1fr] place-items-center"
    >
      <div className="w-full max-w-md">
        <h3 id="contact-heading" className="text-4xl mb-4 text-black">
          Contacto
        </h3>
        <form
          method="POST"
          action="/api/contact"
          className="grid gap-6 bg-[var(--background-black)] p-6 lg:w-[600]"
          autoComplete="on"
        >
          <label htmlFor="name" className="font-semibold">
            Nombre completo
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              className="w-full p-2 mt-1 bg-[var(--background-white)] text-[#585858] rounded"
              placeholder="Tu nombre completo"
            />
          </label>
          <label htmlFor="phone" className="font-semibold">
            Teléfono
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              className="w-full p-2 mt-1 bg-[var(--background-white)] text-[#585858] rounded"
              placeholder="Ej: 11-2564-4681"
              pattern="[0-9\-]+"
            />
          </label>
          <label htmlFor="email" className="font-semibold">
            Email
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              className="w-full p-2 mt-1 bg-[var(--background-white)] text-[#585858] rounded"
              placeholder="tu@email.com"
            />
          </label>
          <label htmlFor="message" className="font-semibold">
            Mensaje
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full p-2 mt-1 bg-[var(--background-white)] text-[#585858] rounded"
              placeholder="Escribe tu consulta aquí"
            />
          </label>
          <button
            type="submit"
            className="bg-[var(--buttons-headings)] text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </div>

      <Image
        src="/lady-justicy.png"
        alt="foto de la abogada"
        width={1000}
        height={1000}
        className="self-end -m-20 -mx-10"
      />
    </section>
  );
};

export default ContactMe;
