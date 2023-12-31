import { Oswald } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata = {
  title: 'Athletic Programmer',
  description:
    'A page for a personal trainer who offers differents types of trainings, clothings and programs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
