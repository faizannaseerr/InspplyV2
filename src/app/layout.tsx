import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Inspply - Automated Job Applications',
  description: 'Upload your resume and let AI help you find and apply for jobs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-gray-50'>
      <body>
        <div>
          <NavBar />
          {children}
        </div>
      </body>
    </html >
  )
}
