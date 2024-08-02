import { Lusitana, Montserrat, Inter } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin']});

export const lusitana = Lusitana({
    weight: ['400','700'],
    subsets: ['latin']
});

export const inter = Inter({ subsets: ['latin'] });