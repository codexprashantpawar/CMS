"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Heart,
  MapPin,
  Music2,
  ShieldCheck,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { highlights, images, pages, photo, stages } from "@/lib/school-data";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <i />
      {children}
      <i />
    </div>
  );
}
function SectionTitle({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-title">
      <Eyebrow>{label}</Eyebrow>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
function CardLink({ slug, eyebrow }: { slug: string; eyebrow?: string }) {
  const item = pages.find((x) => x.slug === slug)!;
  return (
    <Link href={`/${item.slug}`} className="link-card">
      {eyebrow && <span className="card-eyebrow">{eyebrow}</span>}
      <h3>{item.title}</h3>
      <p>{item.intro}</p>
      <span className="card-arrow">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div
          className="hero-image"
          style={{
            backgroundImage: `url('${photo("photo-1580582932707-520aed937b7b", 1800)}')`,
          }}
        />
        <div className="hero-shade" />
        <div className="hero-orb" />
        <div className="hero-content">
          <span className="hero-label">
            <Award size={15} /> CBSE AFFILIATED · EST. 1992
          </span>
          <h1>
            Empowering Young Minds.
            <br />
            <em>Building Bright Futures.</em>
          </h1>
          <p>
            Fostering future scientists, creative leaders and compassionate
            changemakers through rigorous academics, modern labs and vibrant
            student life.
          </p>
          <div className="hero-actions">
            <Link href="/about-us" className="button-gold">
              Explore our school <ArrowRight size={16} />
            </Link>
            <Link href="/admission-process" className="button-glass">
              Admissions 2027–28 <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="hero-image-caption">
          <span>LEARNING WITH PURPOSE</span>
          <strong>A place to belong, explore and become.</strong>
        </div>
        <div className="hero-stats">
          <div>
            <strong>
              32<span>+</span>
            </strong>
            <small>YEARS OF LEARNING</small>
          </div>
          <div>
            <strong>1:40</strong>
            <small>TEACHER–STUDENT RATIO</small>
          </div>
          <div>
            <strong>
              10<span>+</span>
            </strong>
            <small>SPORTS & ACTIVITIES</small>
          </div>
        </div>
      </section>
      <section className="welcome section-pad">
        <div className="welcome-photo">
          <Image
            src={`https://imgs.search.brave.com/vVGe6mjyP29m1p8dtzkY_rwSjq7uKHE3W4FxFA4J2ck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVt/aW5kY29tcGFueS5j/b20vX25leHQvaW1h/Z2U_dXJsPWh0dHBz/Oi8vaW1hZ2VzLmN0/ZmFzc2V0cy5uZXQv/ZGxwN3NwZzduOHBw/L3doYXQtaXMtbGlm/ZWxvbmctbGVhcm5p/bmcvMTlmMTZiODVm/ZjdiYTYxMjkxY2Nh/YTM0Njg3MmU4ZGIv/d2hhdC1pcy1saWZl/bG9uZy1sZWFybmlu/Zy53ZWJwP2ZtPXdl/YnAmdz0zODQwJnE9/NzU`}
            alt="Students gathered in a bright school courtyard"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="photo-seal">
            <span>32</span>
            <small>
              YEARS OF
              <br />
              EXCELLENCE
            </small>
          </div>
        </div>
        <div className="welcome-copy">
          <Eyebrow>WELCOME TO CMS SCHOOL</Eyebrow>
          <h2>Where learning becomes a lifelong way of seeing the world.</h2>
          <p>
            At CMS, education is not just about marks—it is about character,
            curiosity and confidence. Affiliated to CBSE, our school brings
            Indian values together with a global outlook and personal attention
            for every learner.
          </p>
          <p>
            From the first discoveries of the foundation years to focused senior
            secondary pathways, children grow in a happy, safe and future-ready
            campus.
          </p>
          <Link className="text-link" href="/about-us">
            Discover our story <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="pillars section-pad">
        <SectionTitle
          label="PILLARS OF DISTINCTION"
          title="A school experience built around your child"
          copy="Four thoughtful foundations for a confident, capable and compassionate future."
        />
        <div className="pillar-grid">
          {highlights.map((h, i) => (
            <article className="pillar-card" key={h.title}>
              <span className="pillar-number">{h.icon}</span>
              <div className="pillar-icon">
                {
                  [
                    <BookOpen key="a" />,
                    <FlaskConical key="b" />,
                    <Music2 key="c" />,
                    <Heart key="d" />,
                  ][i]
                }
              </div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="academics-home section-pad">
        <div className="academic-intro">
          <Eyebrow>LEARNING JOURNEY</Eyebrow>
          <h2>Room to grow at every stage.</h2>
          <p>
            A purposeful learning journey from playful discovery to confident
            specialisation.
          </p>
          <Link className="text-link" href="/academics">
            Explore academics <ArrowRight size={16} />
          </Link>
        </div>
        <div className="stage-list">
          {stages.map(([title, grade, copy], i) => (
            <div className="stage-row" key={title}>
              <span className="stage-index">0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <small>{grade}</small>
              </div>
              <p>{copy}</p>
              <ArrowUpRight className="stage-arrow" size={17} />
            </div>
          ))}
        </div>
      </section>
      <section className="facilities-home section-pad">
        <div className="facility-photo">
          <Image
            src={photo("photo-1580582932707-520aed937b7b", 1100)}
            alt="CMS School's sunlit campus and learning spaces"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="facility-copy">
          <Eyebrow>MADE FOR POSSIBILITY</Eyebrow>
          <h2>
            Spaces that make
            <br />
            curiosity feel natural.
          </h2>
          <p>
            From the first experiment to the final whistle, every corner of our
            campus invites students to participate, discover and belong.
          </p>
          <div className="facility-list">
            <span>
              <Check /> Smart classrooms & digital boards
            </span>
            <span>
              <Check /> Science, robotics & computer labs
            </span>
            <span>
              <Check /> Library, sports ground & indoor arena
            </span>
            <span>
              <ShieldCheck /> GPS transport & trained campus security
            </span>
          </div>
          <Link className="text-link" href="/infrastructure-facilities">
            Explore our campus <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="messages section-pad">
        <SectionTitle
          label="A MESSAGE FROM OUR LEADERS"
          title="A shared belief in every child’s potential"
        />
        <div className="message-grid">
          {["principals-message", "chairmans-message"].map((slug, i) => (
            <article className="message-card" key={slug}>
              <span className="quote-mark">“</span>
              <p>
                {i === 0
                  ? "Our aim is simple: when your child leaves CMS, they should leave with knowledge in mind, kindness in heart and courage to lead the world."
                  : "Education opens possibilities that reach far beyond the classroom. Together, we can help every student find the confidence to shape what comes next."}
              </p>
              <div className="message-author">
                <div className="author-avatar">{i === 0 ? "P" : "C"}</div>
                <div>
                  <strong>{i === 0 ? "Principal" : "Chairman"}</strong>
                  <small>CMS SCHOOL</small>
                </div>
                <Link
                  href={`/${slug}`}
                  aria-label={`Read ${i === 0 ? "principal" : "chairman"}’s message`}
                >
                  <ArrowUpRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="news-home section-pad">
        <div className="news-heading">
          <div>
            <Eyebrow>FROM OUR COMMUNITY</Eyebrow>
            <h2>News, moments & milestones.</h2>
          </div>
          <Link className="text-link" href="/news-announcements">
            All updates <ArrowRight size={16} />
          </Link>
        </div>
        <div className="news-grid">
          <article className="news-feature">
            <div className="news-image">
              <Image
                src={photo("photo-1509062522246-3755977927d7", 900)}
                alt="Students taking part in a classroom activity"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </div>
            <span className="news-tag">ADMISSIONS · 2027–28</span>
            <h3>Applications are open for the new academic session.</h3>
            <Link href="/admission-process">
              Plan your next step <ArrowRight size={15} />
            </Link>
          </article>
          <div className="upcoming">
            <span className="card-eyebrow">SAVE THE DATE</span>
            <h3>Coming up at CMS</h3>
            {[
              ["12", "AUG", "Annual Science Showcase"],
              ["24", "AUG", "Inter-house Sports Meet"],
              ["06", "SEP", "Grandparents’ Day"],
            ].map(([day, month, name]) => (
              <div className="event-row" key={name}>
                <span className="event-date">
                  <b>{day}</b>
                  <small>{month}</small>
                </span>
                <div>
                  <strong>{name}</strong>
                  <small>CMS School campus</small>
                </div>
                <ArrowUpRight size={15} />
              </div>
            ))}
            <Link className="text-link" href="/events-activities">
              Explore school life <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="gallery-home section-pad">
        <div className="gallery-heading">
          <div>
            <Eyebrow>THE CMS EXPERIENCE</Eyebrow>
            <h2>Small moments. Big discoveries.</h2>
          </div>
          <Link className="text-link" href="/gallery">
            Visit the gallery <ArrowRight size={16} />
          </Link>
        </div>
        <div className="gallery-strip">
          {images.slice(0, 4).map(([label, id], i) => (
            <Link
              href="/gallery"
              className={`gallery-tile tile-${i + 1}`}
              key={id}
            >
              <Image
                src={photo(id, 700)}
                alt={label}
                fill
                sizes="(max-width: 700px) 50vw, 25vw"
              />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="achievement-band">
        <div>
          <Trophy />
          <span>
            <small>CELEBRATING EVERY STEP</small>
            <strong>Effort, growth and achievement—every day.</strong>
          </span>
        </div>
        <Link href="/achievements">
          Meet our achievers <ArrowRight size={16} />
        </Link>
      </section>
      <section className="cbse-strip">
        <span>
          <ShieldCheck size={25} />
        </span>
        <div>
          <small>OUR AFFILIATION</small>
          <strong>Central Board of Secondary Education</strong>
          <p>
            Affiliation No. 1930248 <i /> School Code 45129
          </p>
        </div>
        <Link href="/mandatory-public-disclosure">
          Public disclosure <ArrowUpRight size={16} />
        </Link>
      </section>
      <section className="home-cta">
        <div className="cta-orb" />
        <Eyebrow>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
        <h2>
          Come see what makes CMS
          <br />
          <em>feel like home.</em>
        </h2>
        <p>Admissions are open for Nursery to Grade XII · Session 2027–28</p>
        <div>
          <Link className="button-gold" href="/admission-process">
            Book a campus tour <ArrowRight size={16} />
          </Link>
          <Link className="button-outline" href="/contact-us">
            Talk to our team
          </Link>
        </div>
      </section>
    </main>
  );
}

export function DetailPage({ slug }: { slug: string }) {
  const item = pages.find((p) => p.slug === slug);
  const [active, setActive] = useState<number | null>(null);
  if (!item)
    return (
      <main className="not-found">
        <h1>Page not found</h1>
        <Link href="/">
          Return home <ArrowRight />
        </Link>
      </main>
    );
  const gallery = slug === "gallery";
  const disclosures =
    slug === "mandatory-documents" ||
    slug === "mandatory-public-disclosure" ||
    slug === "transfer-certificate";
  const contact = slug === "contact-us";
  return (
    <main className="detail-main">
      <div className="breadcrumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>{item.title}</span>
      </div>
      <section className="detail-hero">
        <div
          className="detail-photo"
          style={{ backgroundImage: `url('${photo(item.image, 1500)}')` }}
        />
        <div className="detail-overlay" />
        <div className="detail-hero-copy">
          <Eyebrow>{item.group.toUpperCase()}</Eyebrow>
          <h1>{item.title}</h1>
          <p>{item.intro}</p>
        </div>
        <div className="detail-image-caption">
          CMS SCHOOL <i /> KNOWLEDGE · CHARACTER · CONFIDENCE
        </div>
      </section>
      <div className="detail-body">
        <article className="detail-copy">
          <Eyebrow>WELCOME TO CMS</Eyebrow>
          <h2>
            {item.title === "About Us"
              ? "A tradition of thoughtful learning."
              : item.title === "Academics"
                ? "Strong foundations. Bright possibilities."
                : item.title}
          </h2>
          <p>{item.body}</p>
          {item.title === "Academics" || item.title === "CBSE Curriculum" ? (
            <div className="detail-stages">
              {stages.map(([title, grade, copy], i) => (
                <div key={title}>
                  <span>0{i + 1}</span>
                  <section>
                    <h3>
                      {title} <small>{grade}</small>
                    </h3>
                    <p>{copy}</p>
                  </section>
                </div>
              ))}
            </div>
          ) : null}
          {disclosures && (
            <div className="disclosure-list">
              <h3>School information</h3>
              {[
                ["CBSE Affiliation Number", "1930248"],
                ["School Code", "45129"],
                ["Session", "2027–28"],
                ["Board", "Central Board of Secondary Education"],
              ].map(([a, b]) => (
                <div key={a}>
                  <span>{a}</span>
                  <strong>{b}</strong>
                </div>
              ))}
            </div>
          )}
          {contact && (
            <div className="contact-details">
              <p>
                <MapPin /> Knowledge Park, New Delhi, India
              </p>
              <p>
                <a href="tel:+911128945600">+91 (0) 11 2894 5600</a>
              </p>
              <p>
                <a href="mailto:admissions@cmsschool.edu.in">
                  admissions@cmsschool.edu.in
                </a>
              </p>
            </div>
          )}
          <div className="detail-callout">
            <span>
              <Heart size={20} />
            </span>
            <div>
              <strong>Every child will be known, nurtured and prepared.</strong>
              <p>
                For more information, our school team is always happy to help.
              </p>
              <Link href="/contact-us">
                Get in touch <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </article>
        <aside className="detail-aside">
          <span className="aside-label">EXPLORE CMS</span>
          <h3>More to discover</h3>
          {pages
            .filter((p) => p.group === item.group && p.slug !== slug)
            .slice(0, 5)
            .map((p) => (
              <Link key={p.slug} href={`/${p.slug}`}>
                {p.title}
                <ArrowUpRight size={15} />
              </Link>
            ))}
          <Link href="/admission-process" className="aside-cta">
            Admissions 2027–28 <ArrowRight size={15} />
          </Link>
        </aside>
      </div>
      {gallery && <GallerySection active={active} setActive={setActive} />}
      <section className="related-links">
        <div>
          <Eyebrow>KEEP EXPLORING</Eyebrow>
          <h2>Discover more about CMS.</h2>
        </div>
        <div>
          {pages
            .filter((p) => p.slug !== slug)
            .slice(0, 3)
            .map((p) => (
              <Link key={p.slug} href={`/${p.slug}`}>
                {p.title}
                <ArrowRight size={15} />
              </Link>
            ))}
        </div>
      </section>
      <GalleryLightbox active={active} setActive={setActive} />
    </main>
  );
}

function GallerySection({
  active,
  setActive,
}: {
  active: number | null;
  setActive: (n: number | null) => void;
}) {
  return (
    <section className="gallery-page section-pad">
      <SectionTitle
        label="LIFE AT CMS"
        title="A glimpse into our school days"
        copy="Learning, creating, playing and growing together."
      />
      <div className="gallery-grid">
        {images.map(([label, id], i) => (
          <button
            key={id}
            className="gallery-button"
            onClick={() => setActive(i)}
            aria-label={`View photo: ${label}`}
          >
            <Image
              src={photo(id, 900)}
              alt={label}
              fill
              sizes="(max-width: 700px) 50vw, 33vw"
            />
            <span>
              {label}
              <ArrowUpRight size={15} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
function GalleryLightbox({
  active,
  setActive,
}: {
  active: number | null;
  setActive: (n: number | null) => void;
}) {
  if (active === null) return null;
  const [label, id] = images[active];
  const go = (dir: number) =>
    setActive((active + dir + images.length) % images.length);
  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image"
      onClick={() => setActive(null)}
    >
      <button
        className="lightbox-close"
        aria-label="Close image"
        onClick={() => setActive(null)}
      >
        <X />
      </button>
      <button
        className="lightbox-prev"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
      >
        <ChevronLeft />
      </button>
      <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
        <Image src={photo(id, 1400)} alt={label} fill sizes="90vw" />
        <span>
          {label}{" "}
          <small>
            {active + 1} / {images.length}
          </small>
        </span>
      </div>
      <button
        className="lightbox-next"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
