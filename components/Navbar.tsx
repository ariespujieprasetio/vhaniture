"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Services", "Projects", "Process", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled || open ? "navbar--solid" : ""} ${open ? "navbar--open" : ""}`}>
      <a href="#home" className="wordmark" aria-label="Vhaniture home">
        VHANITURE<span>INTERIOR · FURNITURE · BUILD</span>
      </a>

      <nav className="desktop-nav" aria-label="Navigasi utama">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={activeSection === link.toLowerCase() ? "active" : ""}
            aria-current={activeSection === link.toLowerCase() ? "page" : undefined}
          >
            {link}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">
        Konsultasi Project <ArrowUpRight size={15} />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        <p className="mobile-menu-label">NAVIGATION · VHANITURE</p>
        <nav aria-label="Navigasi mobile">
          {links.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={activeSection === link.toLowerCase() ? "active" : ""}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <span>0{index + 1}</span><strong>{link}</strong><i>↗</i>
            </a>
          ))}
        </nav>
        <div className="mobile-menu-bottom">
          <a className="mobile-menu-cta" href="#contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            Konsultasi Project <ArrowUpRight size={18} />
          </a>
          <p>Jakarta, Indonesia<br />Interior · Furniture · Build</p>
        </div>
      </div>
    </header>
  );
}
