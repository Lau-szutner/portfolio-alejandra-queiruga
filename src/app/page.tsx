import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Header from '@/app/components/Header';

export default function Home() {
  return (
    <div>
      <Navbar
        links={[
          { label: 'Mi carrera', href: '#mi-carrera' },
          { label: 'Cuando llamar', href: '#cuando-llamar' },
          { label: 'Contacto', href: '#contacto' },
        ]}
      />
      <Header />
    </div>
  );
}
