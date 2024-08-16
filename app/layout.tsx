import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContextProvider from '@/utils/Context'
import ConditionalLayout from '@/components/Auth/ConditionalLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <ConditionalLayout>{children}</ConditionalLayout>
            <Footer />
          </div>
        </ContextProvider>
      </body>
    </html>
  )
}
