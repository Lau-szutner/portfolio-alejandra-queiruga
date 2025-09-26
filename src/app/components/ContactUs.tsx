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
      heading: 'Homicidios culposos o dolosos',
      text: 'Asesoría y defensa inmediata en casos de detención o citaciones judiciales. Acompañamos al cliente desde el primer momento para garantizar sus derechos.',
    },
    {
      heading: 'Delitos vinculados a drogas',
      text: 'Intervención en procesos por tenencia, transporte o comercialización de estupefacientes. Estrategias de defensa adaptadas a cada caso.',
    },
    {
      heading: 'Violencia y lesiones',
      text: 'Asistencia en causas de lesiones leves o graves, violencia en conflictos personales, familiares o en el ámbito público.',
    },
    {
      heading: 'Amenazas y extorsiones',
      text: 'Acompañamiento legal en denuncias por amenazas, coacciones o extorsiones que afectan la libertad y tranquilidad de las personas.',
    },
  ];

  return (
    <section className="text-black px-10 py-20 grid gap-10 xl:px-50 items-center">
      <div>
        <h2 className="text-3xl">Cuándo llamar</h2>
        <p>
          Estos son algunos de los motivos más comunes por los que las personas
          necesitan defensa penal en Argentina.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 place-items-evenly">
        {tarjetas.map((tarjeta, idx) => (
          <ContactCard
            key={idx}
            heading={tarjeta.heading}
            text={tarjeta.text}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
