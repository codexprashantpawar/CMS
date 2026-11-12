
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

const siteDescription =
  'CMS School is a CBSE senior secondary school in Nigdi, Pune, Maharashtra, focused on academic excellence, character development and curiosity. Explore the school and admissions information.'

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,

  title: {
    default: 'CMS School | CBSE School in Nigdi, Pune',
    template: '%s | CMS School, Nigdi Pune',
  },

  description: siteDescription,

  applicationName: 'CMS School',

  keywords: [
    'CBSE School in Nigdi',
    'CBSE School in Pune',
    'CBSE School in Pimpri Chinchwad',
    'CBSE School in PCMC',
    'CBSE School Near Nigdi Pune',
    'English Medium CBSE School in Nigdi',
    'Senior Secondary CBSE School in Pune',
    'School Admission in Nigdi Pune',
    'CBSE School Near Akurdi',
    'CBSE School Near Pradhikaran',
    'Schools in Nigdi Pune Maharashtra',
  ],

  alternates: siteUrl
    ? {
        canonical: '/',
      }
    : undefined,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'CMS School',
    title: 'CMS School | CBSE School in Nigdi, Pune',
    description: siteDescription,
    url: siteUrl,
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CMS School | CBSE School in Nigdi, Pune',
    description: siteDescription,
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const schoolSchema = {
  '@context': 'https://schema.org',
  '@type': 'School',
  '@id': siteUrl ? `${siteUrl}/#school` : undefined,
  name: 'CMS School',
  description: siteDescription,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nigdi',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  ...(siteUrl
    ? {
        url: siteUrl,
        mainEntityOfPage: siteUrl,
      }
    : {}),
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CMS School',
  ...(siteUrl
    ? {
        url: siteUrl,
        publisher: {
          '@id': `${siteUrl}/#school`,
        },
      }
    : {}),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schoolSchema).replace(/</g, '\\u003c'),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
          }}
        />

        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
