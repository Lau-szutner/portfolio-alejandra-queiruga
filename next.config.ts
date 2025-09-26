import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'local-origin.dev',
    '*.local-origin.dev',
    '10.5.0.2', // <-- agrega tu IP local aquí
  ],
};

export default nextConfig;
