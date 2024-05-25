import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Kauã Morais',
  description: 'Modern & Minimalist',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon/favicon.svg" />
      <body className={inter.className}>
        <Toaster
          toastOptions={{
            iconTheme: {
              primary: 'rgb(203 172 249)',
              secondary: 'black',
            },
            style: {
              backgroundColor: '#000319',
              color: 'white',
            },
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
