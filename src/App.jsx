import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarBlank,
  CaretLeft,
  CaretRight,
  ChatCircle,
  CheckCircle,
  Circle,
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  Heartbeat,
  InstagramLogo,
  LinkedinLogo,
  List,
  MapPin,
  PaperPlaneRight,
  Phone,
  ShieldCheck,
  Smiley,
  Sparkle,
  Star,
  Stethoscope,
  Tooth,
  UserCircle,
  X,
} from "@phosphor-icons/react";

const asset = (name) => `/assets/figma/${name}`;

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Treatments", "#treatments"],
  ["Our Team", "#team"],
  ["Insights", "#insights"],
  ["Contact", "#contact"],
];

const services = [
  {
    title: "Smile Design",
    note: "Veneers & digital previews",
    image: "raw-06.png",
  },
  {
    title: "Invisible Aligners",
    note: "Discreet orthodontics",
    image: "invisible-aligners-v2.png",
  },
  {
    title: "Dental Implants",
    note: "Guided, minimally invasive",
    image: "raw-04.png",
  },
];

const stats = [
  ["12,000+", "Patients treated"],
  ["25+", "Years of experience"],
  ["98%", "Patient satisfaction"],
  ["4", "Specialist dentists"],
];

const doctors = [
  ["dentist-dark-hair.png", "Dr Husain Sabbah", "Founder · Implantology & Smile Design"],
  ["dentist-brown-hair.png", "Dr Husain Sabbah", "Founder · Implantology & Smile Design"],
  ["raw-12.png", "Dr Husain Sabbah", "Founder · Implantology & Smile Design"],
  ["raw-20.png", "Dr Husain Sabbah", "Founder · Implantology & Smile Design"],
];
const carouselDoctors = [doctors.at(-1), ...doctors, doctors[0]];
const doctorActions = [
  [CalendarBlank, "View availability"],
  [Phone, "Call doctor"],
];
const socialLinks = [
  [FacebookLogo, "Facebook"],
  [LinkedinLogo, "LinkedIn"],
  [ChatCircle, "Chat"],
];

const treatmentIcons = [Tooth, ShieldCheck, Sparkle, Smiley, Heartbeat, Stethoscope, Star, UserCircle];
const treatments = [
  ["01", "General Dentistry", "Check-ups, cleaning, and preventive care."],
  ["02", "Implantology", "Guided implants with digital planning."],
  ["03", "Cosmetic Dentistry", "Veneers, bonding, and smile design."],
  ["04", "Orthodontics", "Clear aligners and modern braces."],
  ["05", "Endodontics", "Painless, microscope-assisted root canals."],
  ["06", "Pediatric Dentistry", "Gentle care for children and teens."],
  ["07", "Whitening", "Safe in-clinic and take-home whitening."],
  ["08", "Oral Surgery", "Extractions and wisdom-tooth care."],
];

const articles = [
  {
    category: "Cosmetic",
    date: "02 Jul 2026",
    title: "Veneers vs. bonding : which is right for your smile?",
    excerpt: "How we decide between the two most popular cosmetic treatments — and when neither is needed.",
    author: "Dr Mira Haddad",
    image: "veneer-shade-guide-v2.png",
    avatar: "raw-20.png",
  },
  {
    category: "Technology",
    date: "18 Jun 2026",
    title: "What a 3D scan reveals that an Xray can’t",
    excerpt: "Digital scanning catches early issues without discomfort — here’s what happens at your first visit.",
    author: "Dr Husain Sabbah",
    image: "raw-03.png",
    avatar: "raw-12.png",
  },
  {
    category: "Family Care",
    date: "05 Jun 2026",
    title: "A parent’s guide to first dental visits How to react?",
    excerpt: "When to bring your child in, what we check, and how to keep the visit fun and fear-free.",
    author: "Dr Ahmad Rahman",
    image: "pediatric-article.png",
    avatar: "dentist-dark-hair.png",
  },
];

function Logo({ compact = false }) {
  return (
    <a href="#home" className="group inline-flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green" aria-label="Dr Husain Sabbah, home">
      <img
        src={asset("raw-15.png")}
        alt=""
        className={`${compact ? "h-14 w-14" : "h-12 w-12"} object-contain transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105`}
      />
      <span className={`${compact ? "text-xl" : "text-lg"} font-extrabold tracking-[-0.03em] text-navy`}>Dr Husain Sabbah</span>
    </a>
  );
}

function Eyebrow({ children, hero = false }) {
  return (
    <span className={`eyebrow mb-4 inline-flex w-fit items-center rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-navy ${hero ? "eyebrow-hero gap-2" : "bg-green"}`}>
      {hero && <Circle size={9} weight="fill" className="text-green" aria-hidden="true" />}
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, copy, id }) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={id} className="max-w-[650px] text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-navy sm:text-4xl lg:text-[44px]">
          {title}
        </h2>
      </div>
      {copy && <p className="max-w-md text-sm leading-6 text-slate lg:pb-1">{copy}</p>}
    </div>
  );
}

function PrimaryButton({ href = "#appointment", children, variant = "dark", onClick }) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-5 text-xs font-extrabold transition duration-300 motion-reduce:transform-none ${
    variant === "light"
      ? "bg-white text-navy shadow-sm hover:-translate-y-0.5 hover:shadow-md"
      : "bg-navy text-white shadow-[0_10px_30px_rgba(6,74,113,.18)] hover:-translate-y-0.5 hover:bg-navy-2 hover:shadow-[0_14px_34px_rgba(6,74,113,.28)]"
  } focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green`;

  const content = (
    <>
      {children}
      <span className="grid h-6 w-6 place-items-center rounded-full bg-green text-navy transition-transform duration-300 group-hover:translate-x-0.5">
        <ArrowRight size={13} weight="bold" aria-hidden="true" />
      </span>
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="site-shell header-shell flex h-20 items-center justify-between lg:h-24">
        <Logo />
        <nav aria-label="Primary navigation" className="header-nav hidden items-center lg:flex">
          {navItems.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`nav-link ${index === 0 ? "nav-link-active" : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full bg-white/80 text-navy shadow-sm backdrop-blur focus-visible:outline-2 focus-visible:outline-green lg:hidden"
        >
          {open ? <X size={22} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>
      <div className={`site-shell overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav aria-label="Mobile navigation" className="rounded-3xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-bold text-navy hover:bg-sky focus-visible:outline-2 focus-visible:outline-green">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden bg-hero pt-28 lg:min-h-[860px] lg:pt-36">
      <Header />
      <div className="site-shell hero-content relative grid items-center gap-12 pb-44 lg:grid-cols-[.92fr_1.08fr] lg:gap-16 lg:pb-36">
        <div className="hero-copy relative z-10 pt-8 lg:pt-12">
          <Eyebrow hero>Advanced dental care</Eyebrow>
          <h1 className="max-w-[600px] text-[52px] font-extrabold leading-[.96] tracking-[-0.045em] text-navy sm:text-6xl lg:text-[66px]">
            Smile with lasting confidence
          </h1>
          <p className="mt-7 max-w-[520px] text-sm leading-7 text-slate sm:text-base">
            Precision dentistry in the heart of Dubai—from routine care to full smile design, delivered with gentle technique and modern digital diagnostics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton>Book an Appointment</PrimaryButton>
            <PrimaryButton href="#treatments" variant="light">Explore Treatments</PrimaryButton>
          </div>
        </div>

        <div className="hero-visual relative mx-auto min-h-[420px] w-full max-w-[650px] sm:min-h-[540px] lg:min-h-[650px]">
          <div className="hero-person-shell absolute bottom-2 left-1/2 h-[360px] w-[300px] -translate-x-1/2 rounded-[150px] bg-soft-blue sm:h-[500px] sm:w-[420px] sm:rounded-[220px] lg:h-[610px] lg:w-[510px]">
            <img src={asset("raw-16.png")} alt="Dr Husain Sabbah smiling in his clinic coat" className="absolute bottom-0 left-1/2 h-[92%] w-[115%] -translate-x-1/2 object-contain object-bottom" />
          </div>
          <div className="hero-tools absolute bottom-6 left-[2%] grid h-28 w-28 place-items-center overflow-hidden rounded-full border-[8px] border-white/50 bg-aqua shadow-lg sm:bottom-14 sm:left-[1%] sm:h-40 sm:w-40">
            <img src={asset("raw-13.png")} alt="Dental examination instruments" className="h-full w-full object-contain" />
          </div>
          <div className="hero-stat absolute left-[2%] top-[15%] rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:left-[8%] sm:top-[14%]">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-green/15 text-green"><Smiley size={17} weight="fill" /></span>
              <span><strong className="block text-sm text-navy">12,000+</strong><small className="text-[9px] text-slate">Smiles transformed</small></span>
            </div>
          </div>
          <div className="hero-rating absolute right-[0%] top-[5%] rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:right-[1%] sm:top-[9%]">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-white"><Star size={15} weight="fill" /></span>
              <span><strong className="block text-sm text-navy">4.9 / 5</strong><small className="text-[9px] text-slate">Patient rating</small></span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-service-rail absolute inset-x-0 bottom-0 translate-y-[42%] lg:translate-y-[35%]">
        <div className="site-shell grid gap-3 sm:grid-cols-3">
          {services.map((service) => (
            <a key={service.title} href="#treatments" className="service-card group flex min-h-36 items-center gap-3 rounded-[36px] border border-white bg-footer p-4 shadow-[0_18px_50px_rgba(9,86,126,.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(9,86,126,.16)] sm:min-h-44 sm:p-5 lg:min-h-52 lg:gap-5 lg:p-7">
              <img src={asset(service.image)} alt="" className="service-image h-24 w-24 shrink-0 rounded-2xl object-contain transition duration-500 group-hover:scale-105 sm:h-20 sm:w-20 lg:h-36 lg:w-36" />
              <span className="min-w-0 flex-1">
                <strong className="block text-sm font-extrabold text-navy lg:text-lg">{service.title}</strong>
                <small className="mt-1 block text-[9px] leading-4 text-slate lg:text-[10px]">{service.note}</small>
              </span>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-green text-navy transition duration-300 group-hover:bg-navy group-hover:text-white">
                <ArrowUpRight size={16} weight="bold" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <>
      <section id="about" aria-labelledby="about-title" className="about-section bg-cream pb-20 pt-[360px] sm:pt-52 lg:pb-28 lg:pt-64">
        <div className="about-inner site-shell grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <div className="about-media relative min-h-[380px] overflow-hidden rounded-[42px] sm:min-h-[500px]">
            <img src={asset("raw-18.png")} alt="A patient receiving gentle dental treatment" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <div className="about-date-card absolute bottom-5 left-5 max-w-52 rounded-[28px] border border-white/70 bg-white/82 p-6 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:max-w-64 sm:p-8">
              <span className="about-date-icon absolute grid h-16 w-16 place-items-center rounded-full border border-white bg-white/25 text-white"><Tooth size={28} weight="duotone" /></span>
              <p className="text-xs font-extrabold uppercase tracking-[.12em] text-navy">From</p>
              <p className="my-1 text-2xl font-extrabold text-green sm:text-3xl">28.10.2000</p>
              <p className="text-xs font-bold leading-5 text-navy">Committed to your health and wellbeing!</p>
            </div>
          </div>
          <div className="about-copy">
            <Eyebrow>About the clinic</Eyebrow>
            <h2 id="about-title" className="text-4xl font-extrabold uppercase leading-[.98] tracking-[-.04em] text-navy sm:text-5xl lg:text-[44px]">A calmer kind of dentistry</h2>
            <p className="mt-7 text-sm leading-7 text-slate sm:text-base">
              Led by Dr Husain Sabbah, our Dubai clinic pairs meticulous clinical standards with genuine warmth. Digital scanning, guided implantology, and minimally invasive techniques mean shorter visits, faster healing, and results that last.
            </p>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <a href="tel:+97147741747" className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-green">
                <span className="grid h-12 w-24 place-items-center overflow-hidden rounded-full bg-soft-blue text-navy transition group-hover:bg-green"><img src={asset("raw-11.png")} alt="" className="about-contact-asset h-full w-full object-cover" /></span>
                <span><small className="block text-[9px] font-bold uppercase tracking-[.1em] text-slate">For any questions</small><strong className="text-sm text-navy">+9714774747</strong></span>
              </a>
              <PrimaryButton href="#team">Learn More</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
      <section className="stats-section border-y border-white/70 bg-soft-blue py-9" aria-label="Clinic statistics">
        <div className="site-shell grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {stats.map(([value, label], index) => (
            <div key={value} className={`text-center ${index > 0 ? "sm:border-l sm:border-white/90" : ""}`}>
              <strong className="block text-3xl font-extrabold tracking-[-.04em] text-navy lg:text-4xl">{value}</strong>
              <span className="mt-1 block text-[10px] text-slate">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function DigitalSmile() {
  return (
    <section id="digital" aria-labelledby="digital-title" className="digital-section bg-cream py-20 lg:py-28">
      <div className="digital-inner site-shell grid gap-6 lg:grid-cols-[1.5fr_.8fr]">
        <div className="digital-main relative">
          <h2 id="digital-title" className="mb-6 max-w-[620px] text-3xl font-extrabold uppercase leading-[.98] tracking-[-.04em] text-navy sm:text-4xl lg:text-[48px]">Digital smile design & guided implants</h2>
          <div className="digital-picture group relative h-[380px] overflow-hidden rounded-[42px] bg-aqua sm:h-[520px]">
            <img src={asset("digital-smile-implants-v2.png")} alt="Digital jaw model showing four guided dental implants" loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between rounded-[24px] bg-navy/90 p-5 text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100 sm:inset-x-8 sm:bottom-8 sm:p-6">
              <div><strong className="block text-lg">Plan before we treat</strong><small className="text-white/70">3D diagnostics for predictable outcomes</small></div>
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>
        <div className="digital-side grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <a href="#team" className="digital-case group relative min-h-[240px] overflow-hidden rounded-[36px] bg-soft-blue p-7 sm:min-h-[280px] lg:min-h-0">
            <div className="relative z-10 max-w-[56%]">
              <strong className="block text-2xl font-extrabold text-navy">Case Review</strong>
              <p className="mt-3 text-xs leading-5 text-slate">Reviewed by our implantology team before every appointment is booked.</p>
            </div>
            <img src={asset("raw-05.png")} alt="Patient smiling after her dental treatment" loading="lazy" decoding="async" className="absolute bottom-0 right-[-5%] h-[94%] w-[62%] object-contain object-bottom transition duration-500 group-hover:scale-105" />
          </a>
          <div className="digital-success relative min-h-[240px] overflow-hidden rounded-[36px] bg-aqua p-7 sm:min-h-[280px] lg:min-h-0">
            <img src={asset("raw-02.png")} alt="Healthy tooth visualization" loading="lazy" decoding="async" className="absolute bottom-[-8%] left-[-4%] h-[80%] w-[58%] object-contain" />
            <div className="relative ml-auto max-w-[58%] pt-5 text-right">
              <strong className="block text-4xl font-extrabold tracking-[-.05em] text-white lg:text-5xl">98.6%</strong>
              <span className="mt-2 block text-[10px] font-bold uppercase tracking-[.1em] text-white/85">Success rate</span>
              <span className="mt-12 inline-flex rounded-full bg-green px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.08em] text-navy">Clinically tracked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorCard({ doctor, active }) {
  return (
    <article aria-current={active ? "true" : undefined} className={`doctor-card group min-w-[265px] max-w-[290px] flex-1 rounded-[34px] bg-white p-4 shadow-[0_16px_45px_rgba(9,86,126,.09)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(9,86,126,.16)] sm:min-w-[300px] ${active ? "doctor-card-active" : ""}`}>
      <div className={`doctor-image relative h-64 overflow-hidden rounded-[25px] ${active ? "bg-[#b9f6dc]" : "bg-soft-blue"}`}>
        <img src={asset(doctor[0])} alt={doctor[1]} loading="lazy" decoding="async" className="h-full w-full object-contain object-bottom transition duration-500 group-hover:scale-105" />
      </div>
      <div className="doctor-body px-2 pb-2 pt-5">
        <h3 className={`text-lg font-extrabold ${active ? "text-green" : "text-navy"}`}>{doctor[1]}</h3>
        <p className="mt-1 min-h-8 text-[10px] leading-4 text-slate">{doctor[2]}</p>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            {doctorActions.map(([Icon, label]) => (
              <button key={label} type="button" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-soft-blue text-navy transition hover:border-green hover:bg-green hover:text-navy focus-visible:outline-2 focus-visible:outline-green"><Icon size={16} /></button>
            ))}
            <a href="#appointment" aria-label="View profile" className="doctor-info inline-flex h-11 items-center gap-1 rounded-full bg-soft-blue px-3 text-[10px] font-extrabold text-navy transition hover:bg-green focus-visible:outline-2 focus-visible:outline-green"><UserCircle size={16} />info</a>
            <a href="#contact" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-soft-blue text-navy transition hover:border-green hover:bg-green focus-visible:outline-2 focus-visible:outline-green"><InstagramLogo size={16} /></a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Team() {
  const [active, setActive] = useState(1);
  const rowRef = useRef(null);
  useEffect(() => {
    const row = rowRef.current;
    if (!row || row.children.length < 2) return;
    const padding = Number.parseFloat(getComputedStyle(row).paddingLeft) || 0;
    row.scrollLeft = row.children[1].offsetLeft - padding;
  }, []);

  const move = (direction) => {
    const next = (active + direction + doctors.length) % doctors.length;
    setActive(next);
    const card = rowRef.current?.children[next + 1];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section id="team" aria-labelledby="team-title" className="team-section overflow-hidden bg-cream py-20 lg:py-28">
      <div className="site-shell">
        <div className="team-header mb-12 flex items-end justify-between gap-5">
          <div>
            <Eyebrow>Our team</Eyebrow>
            <h2 id="team-title" className="max-w-lg text-3xl font-extrabold uppercase leading-[.98] tracking-[-.04em] text-navy sm:text-4xl lg:text-[44px]">Meet your dental specialists</h2>
          </div>
          <div className="flex shrink-0 gap-3">
            <button type="button" aria-label="Previous specialist" onClick={() => move(-1)} className="carousel-button bg-white text-navy"><CaretLeft size={18} weight="bold" /></button>
            <button type="button" aria-label="Next specialist" onClick={() => move(1)} className="carousel-button bg-navy text-white"><CaretRight size={18} weight="bold" /></button>
          </div>
        </div>
      </div>
      <div ref={rowRef} className="team-row no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(20px,calc((100vw-1280px)/2))] py-3">
        {carouselDoctors.map((doctor, index) => <div key={`${doctor[0]}-${index}`} className="snap-center"><DoctorCard doctor={doctor} active={index === active + 1} /></div>)}
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section id="treatments" aria-labelledby="treatments-title" className="treatments-section bg-cream py-20 lg:py-28">
      <div className="content-shell site-shell">
        <SectionHeading eyebrow="Treatments" title="Explore our dental treatments" id="treatments-title" copy="A full range of preventive, restorative, and cosmetic dentistry—every treatment planned digitally and explained clearly." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map(([number, title, copy], index) => {
            const Icon = treatmentIcons[index];
            return (
              <a key={title} href="#appointment" className="group relative min-h-44 overflow-hidden rounded-[26px] border border-soft-blue bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-green hover:shadow-[0_18px_45px_rgba(9,86,126,.1)] focus-visible:outline-2 focus-visible:outline-green">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-extrabold text-pale-blue">{number}</span>
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky text-navy transition duration-300 group-hover:bg-green"><Icon size={17} weight="duotone" /></span>
                </div>
                <h3 className="mt-7 text-base font-extrabold text-navy">{title}</h3>
                <p className="mt-2 text-[10px] leading-4 text-slate">{copy}</p>
                <ArrowUpRight className="absolute bottom-5 right-5 translate-y-3 text-navy opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100" size={17} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section id="insights" aria-labelledby="insights-title" className="insights-section bg-cream pb-24 pt-12 lg:pb-32">
      <div className="content-shell site-shell">
        <SectionHeading eyebrow="Insights" title="Latest from the clinic" id="insights-title" copy="Practical guidance on oral health, cosmetic dentistry, and what to expect from modern treatment." />
        <div className="grid gap-7 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="group">
              <a href="#contact" className="block overflow-hidden rounded-[28px] focus-visible:outline-2 focus-visible:outline-green">
                <img src={asset(article.image)} alt="" loading="lazy" decoding="async" className="article-image aspect-[1.55] w-full object-cover transition duration-700 group-hover:scale-105" />
              </a>
              <div className="pt-5">
                <div className="flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[.1em]">
                  <span className="rounded-full bg-soft-blue px-2.5 py-1 text-navy">{article.category}</span>
                  <span className="text-slate">{article.date}</span>
                </div>
                <h3 className="mt-4 text-xl font-extrabold leading-tight tracking-[-.02em] text-navy"><a href="#contact" className="transition hover:text-green focus-visible:outline-2 focus-visible:outline-green">{article.title}</a></h3>
                <p className="mt-3 text-xs leading-5 text-slate">{article.excerpt}</p>
                <div className="mt-5 flex items-center gap-2 text-[10px] font-bold text-navy">
                  <img src={asset(article.avatar)} alt="" loading="lazy" decoding="async" className="h-7 w-7 rounded-full bg-soft-blue object-cover object-top" />
                  {article.author}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  const [time, setTime] = useState("Afternoon");
  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    setTime("Afternoon");
  };

  return (
    <section id="appointment" aria-labelledby="appointment-title" className="appointment-section bg-soft-blue py-20 lg:py-28">
      <div className="appointment-inner site-shell grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div>
          <Eyebrow>Appointment</Eyebrow>
          <h2 id="appointment-title" className="max-w-lg text-4xl font-extrabold uppercase leading-[.98] tracking-[-.04em] text-navy sm:text-5xl lg:text-[44px]">Book your visit today</h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-slate">Most new patients are seen within 48 hours. Tell us what you need and we’ll confirm your slot by phone or WhatsApp.</p>
          <div className="mt-8 space-y-4 text-xs font-semibold text-navy">
            <p className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-white text-navy"><MapPin size={16} weight="fill" /></span>Jumeirah, Dubai, United Arab Emirates</p>
            <p className="flex items-center gap-3"><span className="inline-flex items-center gap-3 rounded-full bg-white/70 pr-4 font-extrabold"><span className="grid h-9 w-9 place-items-center rounded-full bg-white text-navy"><Clock size={16} weight="fill" /></span>Clinic hours</span><strong>Sat · Thu</strong><strong>9:00</strong><strong>21:00</strong></p>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-[34px] border border-white bg-white/62 p-5 shadow-[0_18px_60px_rgba(9,86,126,.08)] backdrop-blur sm:p-8" aria-label="Book an appointment">
          {submitted && (
            <div role="status" className="mb-5 flex items-start gap-3 rounded-2xl bg-green/20 p-4 text-sm font-bold text-navy">
              <CheckCircle className="mt-0.5 shrink-0 text-green" size={20} weight="fill" />
              Thanks — your request is in. Our clinic team will call you shortly to confirm.
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">Treatment<select name="treatment" className="field-control" required defaultValue=""><option value="" disabled aria-label="Select treatment"></option>{treatments.map((item) => <option key={item[1]}>{item[1]}</option>)}</select></label>
            <label className="field-label">Preferred doctor<select name="doctor" className="field-control" required defaultValue=""><option value="" disabled aria-label="Select doctor"></option>{doctors.map((item) => <option key={item[0]} value={item[0]}>{item[1]}</option>)}</select></label>
            <label className="field-label">Full name<input name="name" autoComplete="name" className="field-control" placeholder="Your name" required /></label>
            <label className="field-label">Phone<input name="phone" autoComplete="tel" className="field-control" placeholder="+971 5X XXX XXXX" type="tel" required /></label>
            <label className="field-label">Email<input name="email" autoComplete="email" className="field-control" placeholder="you@example.com" type="email" required /></label>
            <label className="field-label">Date<input name="date" className="field-control" type="date" required /></label>
          </div>
          <fieldset className="mt-5">
            <legend className="field-label mb-2">Preferred time</legend>
            <div className="flex flex-wrap gap-2">
              {["Morning", "Afternoon", "Evening"].map((option) => (
                <button key={option} type="button" onClick={() => setTime(option)} aria-pressed={time === option} className={`rounded-full px-4 py-2 text-[10px] font-extrabold transition focus-visible:outline-2 focus-visible:outline-green ${time === option ? "bg-green text-navy" : "bg-white text-slate hover:bg-soft-blue hover:text-navy"}`}>{option}</button>
              ))}
            </div>
            <input type="hidden" name="preferredTime" value={time} />
          </fieldset>
          <button type="submit" className="group mt-6 flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-navy px-6 text-xs font-extrabold text-white transition duration-300 hover:bg-navy-2 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green">
            Book Appointment
            <span className="grid h-6 w-6 place-items-center rounded-full bg-green text-navy transition group-hover:translate-x-0.5"><ArrowRight size={13} weight="bold" /></span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer-section bg-footer py-14 lg:py-20">
      <div className="content-shell site-shell">
        <div className="grid gap-12 border-b border-navy/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr]">
          <div>
            <Logo compact />
            <p className="mt-5 max-w-xs text-xs leading-5 text-slate">Subscribe for oral-health tips and clinic updates.</p>
            <form className="mt-5 flex max-w-sm gap-2" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Your email</label>
              <input id="newsletter-email" type="email" placeholder="Your email" className="min-w-0 flex-1 rounded-xl border border-white bg-white/75 px-4 py-3 text-xs text-navy placeholder:text-slate/60 focus:border-green focus:outline-none" />
              <button type="submit" aria-label="Subscribe" className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-green transition hover:bg-green hover:text-navy focus-visible:outline-2 focus-visible:outline-green"><PaperPlaneRight size={16} weight="fill" /></button>
            </form>
            <div className="mt-5 flex gap-2">
              <a href="#contact" aria-label="Instagram" className="inline-flex h-9 items-center gap-2 rounded-full border-[3px] border-green bg-[#2998dc] px-3 text-xs font-extrabold text-white transition hover:bg-navy focus-visible:outline-2 focus-visible:outline-green"><InstagramLogo size={15} />instagram</a>
              {socialLinks.map(([Icon, label]) => <a key={label} href="#contact" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-navy transition hover:bg-green focus-visible:outline-2 focus-visible:outline-green"><Icon size={15} /></a>)}
            </div>
          </div>
          <div><h3 className="footer-title">Clinic</h3><ul className="footer-list"><li><a href="#about">About Us</a></li><li><a href="#team">Our Team</a></li><li><a href="#insights">Insights</a></li><li><a href="#contact">Careers</a></li></ul></div>
          <div><h3 className="footer-title">Treatments</h3><ul className="footer-list"><li><a href="#treatments">Implants</a></li><li><a href="#treatments">Veneers</a></li><li><a href="#treatments">Orthodontics</a></li><li><a href="#treatments">Whitening</a></li></ul></div>
          <div><h3 className="footer-title">Contact</h3><ul className="footer-list"><li className="flex gap-2"><MapPin className="mt-0.5 shrink-0 text-green" size={13} />Jumeirah, Dubai, UAE</li><li><a className="flex gap-2" href="tel:+97147741747"><Phone className="shrink-0 text-green" size={13} />+971 4 000 0000</a></li><li><a className="flex gap-2" href="mailto:care@drsabbah.ae"><EnvelopeSimple className="shrink-0 text-green" size={13} />care@drsabbah.ae</a></li><li className="flex gap-2"><Clock className="shrink-0 text-green" size={13} />Sat–Thu · 9:00–21:00</li></ul></div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-[9px] text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dr Husain Sabbah Dental Clinic. All rights reserved.</p>
          <div className="flex gap-5"><a href="#contact" className="hover:text-navy">Privacy Policy</a><a href="#contact" className="hover:text-navy">Terms of Use</a></div>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <main>
      <Hero />
      <About />
      <DigitalSmile />
      <Team />
      <Treatments />
      <Insights />
      <Appointment />
      <Footer />
    </main>
  );
}
