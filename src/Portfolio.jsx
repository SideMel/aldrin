import React, { useState, useEffect } from "react";

// --- Native SVG Icons ---
const IconGithub = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>);
const IconLinkedin = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
const IconInstagram = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const IconMenu = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>);
const IconX = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);
const IconArrowUpRight = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>);
const IconSun = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>);
const IconMoon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>);

// Updated Navigation Order (Added Contact here!)
const NAV = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "SEMINARS & CERTS" },
  { id: "contact", label: "CONTACT" },
];
const NAV_IDS = NAV.map(n => n.id);

const PROJECTS = [
  {
    title: "KATIPUDROID — 3D Story-Driven RPG",
    period: "Capstone Project",
    description:
      "An action-packed 3D story-driven RPG that immerses players in the heroic journey of Macario Sakay, a brave Katipunero who fights for freedom during the Spanish colonization. The game unfolds across four thrilling chapters, each packed with three missions of intense combat, stealth challenges, and historical storytelling.",
    role: "Lead Developer",
    note: "Live showcase available.",
    link: "https://katipudroidhub.netlify.app/",
    tags: ["Game Development", "3D RPG", "Capstone", "Story-driven"],
    img: "/Katipudroid.png"
  },
  {
    title: "Little Lion — SPED School Management System",
    period: "OJT",
    description:
      "A specialized administrative platform built for a Special Education school, covering requirements gathering, architecture, and delivery end-to-end. Five tailored portals (Admin, Staff, Teachers, Therapists, Parents) were designed around accessibility and clarity.",
    role: "Frontend Contributor",
    note: "Source code is confidential. Live demo shows the landing page only; login is disabled for this demo.",
    link: "https://little-lion.pages.dev/",
    tags: ["React", "Firebase", "Accessibility", "RBAC"],
    img: "/LittleLion.png" 
  },
  {
    title: "PCCI Valenzuela — Business Membership Platform",
    period: "Freelance",
    description:
      "A comprehensive membership platform built for the Philippine Chamber of Commerce and Industry, Valenzuela chapter. Built on a headless architecture that fully decouples frontend from backend, streamlining data flow and making the platform easier to scale and maintain.",
    role: "Frontend Contributor",
    note: "Source code is confidential. Live link is provided strictly as an interface demo.",
    link: "https://pcci-valenzuela.onrender.com/",
    tags: ["Headless Architecture", "React", "Scalability"],
    img: "/PCCI.png"
  },
  {
    title: "8Con Academy Website — Batch 6",
    period: "OJT",
    description:
      "A corporate frontend built from the ground up during OJT for 8Con Academy, a Forex trading company. Introduces the company's brand, showcases internship and career pathways, and streamlines new student registrations.",
    role: "Frontend Contributor",
    note: "Source code is confidential. Live link is provided strictly as a testing demo.",
    link: "https://8con-academy-website-batch6.vercel.app/",
    tags: ["React", "Vite", "Frontend Development"],
    img: "/8con.png"
  },
];

const EXPERIENCE = [
  {
    period: "2025",
    title: "Cyber Security Seminar",
    org: "",
    description: "",
    tags: [],
  },
  {
    period: "2025",
    title: "Intelligent Design — Converging Architecture, Security & AI",
    org: "",
    description: "",
    tags: [],
  },
  {
    period: "2025",
    title: "Understanding Agile Development",
    org: "Sprints, Roles, Code Reviews and CI/CD",
    description: "",
    tags: [],
  },
  {
    period: "2025",
    title: "Beyond Coding",
    org: "Exploring Business and Product Roles in the Tech Industry",
    description: "",
    tags: [],
  },
  {
    period: "2024",
    title: "IT Project Management Seminar",
    org: "",
    description: "",
    tags: [],
  },
];

const CERTIFICATES = [
  {
    period: "May 2026",
    title: "Certificate of Contribution",
    org: "8CON Academy",
    description: "In recognition of valuable contribution to the development of the PCCI Valenzuela Website.",
    tags: ["Frontend Development"],
    img: "/PCCI-Cert.png" 
  },
  {
    period: "2026",
    title: "Certificate of Contribution",
    org: "8CON Academy",
    description: "Contributed to the successful development of the Little Lions SPED School Monitoring System as part of the 8Con Academy Web Development Team serving as Frontend Developer.",
    tags: ["Frontend Development"],
    img: "/LittleLion-Cert.png"
  },
  {
    period: "April 2025",
    title: "Certificate of Participation",
    org: "Pambayang Dalubhasaan ng Marilao",
    description: "Seminar on Understanding Agile Development: From Sprints and Roles to Code Reviews and CI/CD.",
    tags: ["Agile", "Seminar"],
    img: "/Agile-Cert.png"
  },
  {
    period: "April 2025",
    title: "Certificate of Participation",
    org: "Pambayang Dalubhasaan ng Marilao",
    description: "Seminar on Beyond coding: Exploring Business and Product roles in the Tech Industry.",
    tags: ["Business", "Tech Industry"],
    img: "/Beyond Coding-Cert.png"
  },
  {
    period: "April 2025",
    title: "Certificate of Participation",
    org: "Pambayang Dalubhasaan ng Marilao",
    description: "Seminar on Intelligent Design: Converging Architecture, Security, & AI.",
    tags: ["Architecture", "Security", "AI"],
    img: "/Intelligent-Cert.png"
  }
];

const SKILLS = [
  {
    group: "Basic IT Skills",
    items: [
      "Typing & data entry",
      "File management",
      "Basic troubleshooting (Web & App)",
      "Basic UI/UX understanding",
    ],
  },
  {
    group: "Hardware Skills",
    items: [
      "Basic PC assembly",
      "Installing OS & software",
      "Basic maintenance & repair",
      "Troubleshooting common errors (Windows, apps, network)",
    ],
  },
  {
    group: "Software Skills",
    items: [
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Google Workspace (Docs, Sheets, Slides)",
      "Email management",
    ],
  },
  {
    group: "Technical Skills",
    items: [
      "Basic programming (Python / Java / C# / HTML / CSS)",
      "Basic networking (IP, router setup, LAN/WiFi)",
      "Version control (Git, GitHub)",
      "Basic database knowledge (MySQL / SQL)",
    ],
  },
];

function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 350; 
      
      let currentActive = ids[0];
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            currentActive = id;
          }
        }
      }
      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids]);

  return activeId;
}

export default function Portfolio() {
  const active = useActiveSection(NAV_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [experienceTab, setExperienceTab] = useState("SEMINAR"); 
  
  // State to manage the full-screen image lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle body scroll locking and Esc key for lightbox
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const t = isDark ? {
    bg: "bg-slate-900",
    text: "text-slate-400",
    selection: "selection:bg-sky-400 selection:text-slate-900",
    topbar: "bg-slate-900/90",
    mobileMenu: "bg-slate-900/95 border-slate-800",
    heading: "text-slate-200",
    navIndicatorActive: "bg-slate-200",
    navIndicatorInactive: "bg-slate-600 group-hover:bg-slate-200",
    navTextActive: "text-slate-200",
    navTextInactive: "text-slate-500 group-hover:text-slate-200",
    socialIcon: "text-slate-400 hover:text-slate-200",
    sectionHeader: "bg-slate-900/75 text-slate-200",
    card: "bg-slate-800 border-slate-700 shadow-black/50 hover:border-slate-600",
    cardHeader: "text-slate-500",
    cardTitle: "text-slate-200",
    cardLink: "text-slate-200 hover:text-sky-400 focus-visible:text-sky-400",
    tag: "bg-sky-400/10 text-sky-400",
    bullet: "text-sky-400",
    themeButton: "bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 shadow-lg shadow-black/50",
    imageBorder: "border-slate-700/50 hover:border-sky-400/50 bg-slate-900/50",
    tabContainer: "border-slate-700",
    tabActive: "bg-slate-200 text-slate-900",
    tabInactive: "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50",
    divider: "border-slate-800"
  } : {
    bg: "bg-white",
    text: "text-gray-600",
    selection: "selection:bg-green-200 selection:text-green-900",
    topbar: "bg-white/90",
    mobileMenu: "bg-white/95 border-gray-200",
    heading: "text-gray-800",
    navIndicatorActive: "bg-green-600",
    navIndicatorInactive: "bg-gray-300 group-hover:bg-green-600",
    navTextActive: "text-gray-800",
    navTextInactive: "text-gray-500 group-hover:text-gray-800",
    socialIcon: "text-gray-500 hover:text-green-600",
    sectionHeader: "bg-white/75 text-gray-800",
    card: "bg-gray-100 border-gray-200 shadow-gray-200/50 hover:border-gray-300",
    cardHeader: "text-gray-500",
    cardTitle: "text-gray-800",
    cardLink: "text-gray-800 hover:text-green-600 focus-visible:text-green-600",
    tag: "bg-green-600 text-white",
    bullet: "text-green-600",
    themeButton: "bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-gray-200/50",
    imageBorder: "border-gray-200 hover:border-green-400 bg-white",
    tabContainer: "border-gray-300",
    tabActive: "bg-green-600 text-white",
    tabInactive: "text-gray-500 hover:text-gray-800 hover:bg-gray-200/50",
    divider: "border-gray-200"
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${t.bg} ${t.text} ${t.selection} leading-relaxed antialiased min-h-screen transition-colors duration-300`}>
      
      {/* Lightbox Modal Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full flex justify-center items-center">
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              aria-label="Close image"
            >
              <IconX />
            </button>
            
            {/* Full Image */}
            <img 
              src={selectedImage} 
              alt="Full certificate view" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

      {/* Mobile top bar */}
      <div className={`lg:hidden flex items-center justify-between px-6 py-4 sticky top-0 z-30 ${t.topbar} backdrop-blur transition-colors duration-300`}>
        <span className={`font-bold text-lg ${t.heading}`}>
          Aldrin Mel Alanzalonn
        </span>
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className={`${t.heading} transition-colors`}>
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`lg:hidden px-6 pb-6 pt-2 flex flex-col gap-4 sticky top-14 z-30 ${t.mobileMenu} backdrop-blur border-b border-t-0 transition-colors duration-300`}>
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className={`text-left text-xs font-bold uppercase tracking-widest ${
                active === n.id ? t.navTextActive : t.navTextInactive
              }`}
            >
              {n.label}
            </button>
          ))}
          {/* Mobile Theme Toggle Button */}
          <button 
            onClick={() => setIsDark(!isDark)} 
            className={`mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${t.themeButton}`}
          >
            {isDark ? <><IconSun /> Switch to Light Mode</> : <><IconMoon /> Switch to Dark Mode</>}
          </button>
        </div>
      )}

      {/* Main Container */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-4">
        
        {/* Left Sidebar */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl ${t.heading}`}>
              Aldrin Mel Alanzalon
            </h1>
            <h2 className={`mt-3 text-lg font-medium tracking-tight sm:text-xl ${t.heading}`}>
              IT Support Specialist | Admin Staff | Aspring Frontend Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I provide reliable IT support, manage administrative tasks efficiently, and ensure smooth daily technical operations.
            </p>

            <nav className="nav hidden lg:block mt-16">
              <ul className="flex w-max flex-col gap-6">
                {NAV.map((n) => {
                  const isActive = active === n.id;
                  return (
                    <li key={n.id}>
                      <button
                        onClick={() => scrollTo(n.id)}
                        className="group flex items-center py-1"
                      >
                        <span
                          className={`mr-4 h-px transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                            isActive
                              ? `w-16 ${t.navIndicatorActive}`
                              : `w-8 ${t.navIndicatorInactive}`
                          }`}
                        />
                        <span
                          className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                            isActive
                              ? t.navTextActive
                              : t.navTextInactive
                          }`}
                        >
                          {n.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="mt-8 lg:mt-0 flex flex-col gap-8">
            <ul className="flex items-center gap-5">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className={`block transition-colors ${t.socialIcon}`}>
                  <span className="sr-only">GitHub</span>
                  <IconGithub />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={`block transition-colors ${t.socialIcon}`}>
                  <span className="sr-only">LinkedIn</span>
                  <IconLinkedin />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`block transition-colors ${t.socialIcon}`}>
                  <span className="sr-only">Instagram</span>
                  <IconInstagram />
                </a>
              </li>
            </ul>

            {/* Desktop Theme Toggle Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => setIsDark(!isDark)} 
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${t.themeButton}`}
              >
                {isDark ? <><IconSun /> Light Mode</> : <><IconMoon /> Dark Mode</>}
              </button>
            </div>
          </div>
        </header>

        {/* Right Content Area */}
        <main className="pt-24 lg:w-[52%] lg:py-24">
          
          {/* About Section */}
          <section id="about" className="scroll-mt-16 lg:scroll-mt-24">
            <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${t.sectionHeader}`}>
              <h2 className="text-sm font-bold uppercase tracking-widest">About</h2>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                I am a motivated IT Support Specialist and Administrative Staff member with a strong foundation in problem-solving and communication. I excel at troubleshooting hardware, software, and network issues to keep systems running smoothly and securely.
              </p>
              <p>
                Alongside my core technical skills—like PC assembly, OS installation, and network setup—I am highly organized and capable of handling administrative workflows. Whether I am resolving a complex network error or streamlining daily office tasks, my goal is always to provide reliable, friendly support that helps the whole team succeed.
              </p>

              {/* Education Card */}
              <div className={`mt-8 p-6 relative group grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 rounded-xl shadow-lg ${t.card}`}>
                <header className={`z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 ${t.cardHeader}`}>
                  2022 — 2026
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className={`font-medium leading-snug ${t.cardTitle}`}>
                    BS Information Technology <span className={t.cardHeader}>· Pambayang Dalubhasaan ng Marilao</span>
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {["Networking", "Database Mgmt", "Cybersecurity"].map((tag) => (
                      <li key={tag} className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${t.tag}`}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <hr className={`my-12 md:my-16 lg:my-24 border-t-2 ${t.divider}`} />

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-16 lg:scroll-mt-24">
            <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${t.sectionHeader}`}>
              <h2 className="text-sm font-bold uppercase tracking-widest">Projects</h2>
            </div>

            <ul className="group/list flex flex-col gap-6">
              {PROJECTS.map((p, i) => (
                <li key={i} className={`p-6 relative group grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 rounded-xl shadow-lg lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${t.card}`}>
                  
                  {/* Thumbnail Image Left */}
                  <div className="z-10 sm:col-span-2 mb-4 sm:mb-0">
                    <img 
                      src={p.img} 
                      alt={`${p.title} logo`} 
                      className={`w-full h-auto aspect-square object-contain rounded-full border-2 p-2 transition-all duration-300 sm:translate-y-1 ${
                        isDark 
                          ? "border-slate-700/50 group-hover:border-sky-400/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                          : "border-gray-200 group-hover:border-green-400 drop-shadow-md"
                      }`}
                    />
                  </div>
                  
                  {/* Content Right */}
                  <div className="z-10 sm:col-span-6">
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${t.cardHeader}`}>
                      {p.period} · {p.role}
                    </p>
                    
                    <h3 className="font-medium leading-snug">
                      <a href={p.link} target="_blank" rel="noreferrer" className={`inline-flex items-baseline font-medium leading-tight group/link text-base transition-colors ${t.cardLink}`}>
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{p.title} <IconArrowUpRight /></span>
                      </a>
                    </h3>
                    
                    <p className="mt-2 text-sm leading-normal">{p.description}</p>
                    <p className={`mt-2 text-xs italic ${t.cardHeader}`}>
                      🔒 {p.note}
                    </p>
                    
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <li key={tag} className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${t.tag}`}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Divider */}
          <hr className={`my-12 md:my-16 lg:my-24 border-t-2 ${t.divider}`} />

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-16 lg:scroll-mt-24">
            <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${t.sectionHeader}`}>
              <h2 className="text-sm font-bold uppercase tracking-widest">Skills</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {SKILLS.map((s) => (
                <div key={s.group} className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${t.card}`}>
                  <h4 className={`text-sm font-semibold mb-4 ${t.cardTitle}`}>
                    {s.group}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {s.items.map((it) => (
                      <li key={it} className="text-sm flex gap-2">
                        <span className={t.bullet}>▹</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <hr className={`my-12 md:my-16 lg:my-24 border-t-2 ${t.divider}`} />

          {/* Seminars & Certifications Section */}
          <section id="experience" className="scroll-mt-16 lg:scroll-mt-24">
            <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${t.sectionHeader}`}>
              <h2 className="text-sm font-bold uppercase tracking-widest">Seminars & Certifications</h2>
            </div>
            
            {/* Nav Pill Toggle */}
            <div className="flex justify-center mb-8">
              <div className={`inline-flex items-center rounded-full border p-1 ${t.tabContainer}`}>
                <button
                  onClick={() => setExperienceTab("SEMINAR")}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    experienceTab === "SEMINAR" ? t.tabActive : t.tabInactive
                  }`}
                >
                  SEMINAR
                </button>
                <button
                  onClick={() => setExperienceTab("CERTIFICATES")}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    experienceTab === "CERTIFICATES" ? t.tabActive : t.tabInactive
                  }`}
                >
                  CERTIFICATES
                </button>
              </div>
            </div>

            <ul className="group/list flex flex-col gap-6">
              {(experienceTab === "SEMINAR" ? EXPERIENCE : CERTIFICATES).map((e, i) => (
                <li key={i} className={`p-6 relative group grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 rounded-xl shadow-lg lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${t.card}`}>
                  
                  {/* Left Column for Timeframe & Optional Image */}
                  <div className="z-10 sm:col-span-2 mb-4 sm:mb-0">
                    <header className={`mb-2 mt-1 text-xs font-semibold uppercase tracking-wide ${t.cardHeader}`}>
                      {e.period}
                    </header>
                    {e.img && (
                      <img 
                        src={e.img} 
                        alt={`${e.title} visual`} 
                        onClick={() => setSelectedImage(e.img)}
                        title="Click to view full image"
                        className={`w-full h-auto object-cover rounded border-2 mt-3 cursor-pointer transition-all duration-300 hover:opacity-75 ${t.imageBorder}`}
                      />
                    )}
                  </div>
                  
                  {/* Right Column for Info */}
                  <div className="z-10 sm:col-span-6">
                    <h3 className={`font-medium leading-snug ${t.cardTitle}`}>
                      <div>
                        {e.title} {e.org && <span className={t.cardHeader}>· {e.org}</span>}
                      </div>
                    </h3>
                    {e.description && (
                      <p className="mt-2 text-sm leading-normal">{e.description}</p>
                    )}
                    {e.tags && e.tags.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {e.tags.map((tag) => (
                          <li key={tag} className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${t.tag}`}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Divider */}
          <hr className={`my-12 md:my-16 lg:my-24 border-t-2 ${t.divider}`} />

          {/* Contact Section Added Here */}
          <section id="contact" className="scroll-mt-16 lg:scroll-mt-24">
            <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${t.sectionHeader}`}>
              <h2 className="text-sm font-bold uppercase tracking-widest">Contact</h2>
            </div>

            <div className={`p-8 rounded-xl shadow-lg transition-colors duration-300 border-2 ${t.imageBorder} ${t.card}`}>
              <h3 className={`text-2xl font-bold leading-snug mb-3 ${t.cardTitle}`}>
                Let's Connect!
              </h3>
              <p className="mb-6 text-base leading-normal">
                I'm currently looking for new opportunities in IT Support and Administrative roles. Whether you have a question or just want to say hi, my inbox is always open!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="mailto:aldrinmel20@gmail.com" className={`inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 ${t.themeButton}`}>
                 <span className="text-lg">✉</span> aldrinmel20@gmail.com
                </a>
                <a href="tel:+639071846866" className={`inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 ${t.themeButton}`}>
                  <span className="text-lg">☏</span> +63 907-184-6866
                </a>
              </div>
            </div>
          </section>

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 mt-20">
            <p>
              Built with <span className={`font-medium ${t.heading}`}>React</span> and <span className={`font-medium ${t.heading}`}>Tailwind CSS</span>.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}