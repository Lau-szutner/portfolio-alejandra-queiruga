import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Alejandra Noemi Queiruga',
  description: 'Portfolio de la Abogada Alejandra Noemi Queiruga',
};

// Inicializar la fuente
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={libreBaskerville.className}>{children}</body>
    </html>
  );
}
