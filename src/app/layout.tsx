
import type { Metadata } from 'next';
import { Poppins, Signika_Negative, Parisienne } from 'next/font/google'; // Import Parisienne, remove Philosopher
import './globals.css';
import { MainLayout } from '@/components/layout/main-layout';
import { APP_NAME } from '@/lib/constants';

// Configure Poppins font
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins', // Define a CSS variable for Poppins, to be used by Tailwind
  display: 'swap',
});

// Configure Signika Negative font
const signikaNegative = Signika_Negative({
  weight: ['400', '600'], // Choose appropriate weights
  subsets: ['latin'],
  variable: '--font-signika-negative',
  display: 'swap',
});

// Configure Parisienne font
const parisienne = Parisienne({
  weight: ['400'], // Parisienne usually comes in a single weight
  subsets: ['latin'],
  variable: '--font-parisienne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${APP_NAME} - Share Your Skills`,
  description: 'A marketplace for learning and teaching skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${signikaNegative.variable} ${parisienne.variable}`} suppressHydrationWarning>
      {/* Poppins, Signika Negative, and Parisienne variables are available globally. Body will use Tailwind's default sans-serif. */}
      <body className="antialiased">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
