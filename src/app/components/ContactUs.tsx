import ContactCard from './ContactCard';

const ContactUs = () => {
  const tarjetas = [
    {
      heading: 'Detenciones y causas penales',
      text: 'Asesoría y defensa inmediata en casos de detención o citaciones judiciales. Acompañamos al cliente desde el primer momento para garantizar sus derechos.',
    },
    {
      heading: 'Robos, hurtos y estafas',
      text: 'Asesoría y defensa inmediata en casos de detención o citaciones judiciales. Acompañamos al cliente desde el primer momento para garantizar sus derechos.',
    },
    {
      heading: 'Detenciones y causas penales',
      text: 'Asesoría y defensa inmediata en casos de detención o citaciones judiciales. Acompañamos al cliente desde el primer momento para garantizar sus derechos.',
    },
    {
      heading: 'Detenciones y causas penales',
      text: 'Asesoría y defensa inmediata en casos de detención o citaciones judiciales. Acompañamos al cliente desde el primer momento para garantizar sus derechos.',
    },
    {
      heading: 'Detenciones y causas penales',
      text: 'Asesoría y defensa inmediata en casos de detención o citaciones judiciales. Acompañamos al cliente desde el primer momento para garantizar sus derechos.',
    },
    {
      heading: 'Detenciones y causas penales',
      text: 'Asesoría y defensa inmediata en casos de detención o citaciones judiciales. Acompañamos al cliente desde el primer momento para garantizar sus derechos.',
    },
  ];

  return (
    <section className="text-black px-10 py-20 grid gap-10 ">
      <div>
        <h2 className="text-3xl">Cuándo llamar</h2>
        <p>
          Estos son algunos de los motivos más comunes por los que las personas
          necesitan defensa penal en Argentina.
        </p>
      </div>
      {tarjetas.map((tarjeta, idx) => (
        <ContactCard key={idx} heading={tarjeta.heading} text={tarjeta.text} />
      ))}
    </section>
  );
};

export default ContactUs;
