import Navbar from '@/app/components/Navbar';
import Header from '@/app/components/Header';
import MiddleCta from '@/app/components/MiddleCta';
import About from '@/app/components/About';
import Cases from '@/app/components/Cases';
import ContactMe from './components/ContactMe';
import Footer from '@/app/components/Footer';
export default function Home() {
  return (
    <div className="h-full grid">
      <Navbar
        links={[
          { label: 'Mi carrera', href: '#mi-carrera' },
          { label: 'Cuando llamar', href: '#cuando-llamar' },
          { label: 'Contacto', href: '#contacto' },
        ]}
      />
      <div>
        <Header />
        <MiddleCta
          heading="Defensa inmediata para tu caso"
          text="Agendamos una sita hoy mismo"
        />
      </div>
      <About />
      <div className="h-12 bg-[var(--background-black)]"></div>
      <Cases />
      <MiddleCta
        heading="No pongas en peligro tu libertad"
        text="Si enfrentás una situación penal, no esperes:
una defensa temprana puede marcar la diferencia."
      />
      <ContactMe />
      <Footer />
    </div>
  );
}
