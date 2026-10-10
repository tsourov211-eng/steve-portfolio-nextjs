import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tanvir Ahammed Sourov - Front-End Developer & CS Student',
  description: 'Portfolio of Tanvir Ahammed Sourov, a Computer Science student and Front-End Developer building responsive, user-friendly web applications and automation solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#111111] text-white min-h-screen selection:bg-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
