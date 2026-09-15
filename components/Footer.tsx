import { ArrowUpRight } from "lucide-react";

const links = ["About", "Services", "Projects", "Contact"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <a href="#home">VHANITURE</a>
          <p>Interior · Furniture · Build</p>
        </div>
        <div className="footer-col">
          <span>LOCATION</span>
          <p>Jakarta, Indonesia</p>
        </div>
        <div className="footer-col">
          <span>CONTACT</span>
          <a href="https://wa.me/6281310429811" target="_blank" rel="noreferrer">+62 813-1042-9811 <ArrowUpRight size={13} /></a>
          <a href="#">Instagram <ArrowUpRight size={13} /></a>
        </div>
        <nav className="footer-col footer-nav" aria-label="Navigasi footer">
          <span>NAVIGATE</span>
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
        </nav>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Vhaniture. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
        <p className="credit">Website concept by Aries Pujie Prasetio</p>
      </div>
    </footer>
  );
}
