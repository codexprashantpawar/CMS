'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X, School, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { pages } from '@/lib/school-data'

const menus = [
  { label: 'Our School', slugs: ['about-us', 'vision-mission', 'principals-message', 'chairmans-message', 'school-history'] },
  { label: 'Learning', slugs: ['academics', 'cbse-curriculum', 'faculty-staff'] },
  { label: 'Campus Life', slugs: ['infrastructure-facilities', 'gallery', 'events-activities', 'achievements'] },
  { label: 'Admissions', slugs: ['admission-process', 'fee-structure'] },
  { label: 'Information', slugs: ['academic-calendar', 'school-timings', 'news-announcements', 'mandatory-public-disclosure', 'mandatory-documents', 'transfer-certificate', 'contact-us'] },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  return <header className="site-header">
    <div className="topbar"><div className="topbar-inner"><div className="top-contact"><a href="tel:+911128945600"><Phone size={13}/> +91 (0) 11 2894 5600</a><a className="email-top" href="mailto:admissions@cmsschool.edu.in"><Mail size={13}/> admissions@cmsschool.edu.in</a></div><div className="top-right"><span className="affiliation-top">CBSE AFFILIATION NO: 1930248&nbsp; | &nbsp;SCHOOL CODE: 45129</span><span className="accreditation"><i/> ACCREDITED EXCELLENCE</span></div></div></div>
    <div className="nav-wrap"><Link href="/" className="brand" aria-label="CMS School home"><span className="brand-mark"><School size={25}/></span><span><b>CMS SCHOOL</b><small>CBSE SENIOR SECONDARY</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Link className="nav-home" href="/">Home</Link>{menus.map(menu => <div className="nav-menu" key={menu.label} onMouseEnter={() => setDropdown(menu.label)} onMouseLeave={() => setDropdown(null)}><button aria-expanded={dropdown === menu.label} onClick={() => setDropdown(dropdown === menu.label ? null : menu.label)}>{menu.label}<ChevronDown size={13}/></button>{dropdown === menu.label && <div className="dropdown">{menu.slugs.map(slug => {const page = pages.find(item => item.slug === slug)!; return <Link key={slug} href={`/${slug}`} onClick={() => setDropdown(null)}>{page.title}<ArrowUpRight size={13}/></Link>})}</div>}</div>)}</nav>
      <Link href="/admission-process" className="nav-cta">Admissions <ArrowRight size={15}/></Link><button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation"><Link href="/" onClick={() => setOpen(false)}>Home</Link>{menus.map(menu => <section key={menu.label}><h3>{menu.label}</h3>{menu.slugs.map(slug => {const page = pages.find(item => item.slug === slug)!; return <Link key={slug} href={`/${slug}`} onClick={() => setOpen(false)}>{page.title}</Link>})}</section>)}</nav>}
  </header>
}

export function SiteFooter() { return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Link href="/" className="brand"><span className="brand-mark"><School size={25}/></span><span><b>CMS SCHOOL</b><small>CBSE SENIOR SECONDARY</small></span></Link><p>Empowering young minds. Building bright futures. A learning community shaped by curiosity, character and confidence.</p><Link className="footer-visit" href="/admission-process">Plan your campus visit <ArrowRight size={15}/></Link></div><div><h3>Explore</h3><div className="footer-links">{['about-us','academics','infrastructure-facilities','admission-process','gallery','contact-us'].map(s => {const p=pages.find(x=>x.slug===s)!; return <Link key={s} href={`/${s}`}>{p.title}</Link>})}</div></div><div><h3>CBSE Information</h3><div className="footer-links">{['mandatory-public-disclosure','mandatory-documents','transfer-certificate','academic-calendar'].map(s => {const p=pages.find(x=>x.slug===s)!; return <Link key={s} href={`/${s}`}>{p.title}</Link>})}</div></div><div className="footer-contact"><h3>Get in touch</h3><p><MapPin size={15}/> Knowledge Park, New Delhi, India</p><a href="tel:+911128945600"><Phone size={15}/> +91 (0) 11 2894 5600</a><a href="mailto:admissions@cmsschool.edu.in"><Mail size={15}/> admissions@cmsschool.edu.in</a><span className="affiliation-chip">CBSE Affiliation No. 1930248</span></div></div><div className="footer-bottom"><span>© 2026 CMS School. All rights reserved.</span><span>Knowledge · Character · Confidence</span><Link href="/mandatory-public-disclosure">Mandatory Public Disclosure <ArrowUpRight size={13}/></Link></div></footer> }

export function SiteShell({ children }: { children: React.ReactNode }) { return <><SiteHeader/>{children}<SiteFooter/></> }
