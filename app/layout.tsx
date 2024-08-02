import './ui/global.css';
import { montserrat } from './ui/fonts';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className="py-10 flex justify-center items-center">
          Hecho con ♥ por Astronaut
        </footer>
      </body>
    </html>
  );
}
