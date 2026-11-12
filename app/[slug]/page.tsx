import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DetailPage } from '@/components/school-pages'
import { SiteShell } from '@/components/school-site'
import { pages } from '@/lib/school-data'

export function generateStaticParams() {
  return pages.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const page = pages.find((item) => item.slug === slug)
    return page ? { title: `${page.title} | CMS School`, description: page.intro } : { title: 'Page not found | CMS School' }
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!pages.some((item) => item.slug === slug)) notFound()
  return <SiteShell><DetailPage slug={slug} /></SiteShell>
}
