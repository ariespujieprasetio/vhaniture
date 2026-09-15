import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=92"
        alt="Interior hunian premium dengan sentuhan kayu dan batu alam"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <div className="hero-shade" />
      <div className="hero-marker hero-marker--top" aria-hidden="true">VHN / 01</div>
      <div className="hero-marker hero-marker--side" aria-hidden="true">JAKARTA · INDONESIA</div>
      <div className="hero-content shell">
        <p className="eyebrow hero-eyebrow">INTERIOR · FURNITURE · BUILD</p>
        <h1 aria-label="Ruang yang Dirancang untuk Hidup Lebih Baik.">
          <span className="hero-title-desktop" aria-hidden="true">
            <span>Ruang yang Dirancang</span>
            <span>untuk Hidup <em>Lebih Baik.</em></span>
          </span>
          <span className="hero-title-mobile" aria-hidden="true">
            <span>Ruang yang</span>
            <span>Dirancang</span>
            <span>untuk Hidup</span>
            <span><em>Lebih Baik.</em></span>
          </span>
        </h1>
        <div className="hero-bottom">
          <div className="hero-copy">
            <p>Kami membantu mewujudkan interior hunian dan ruang bisnis melalui desain yang fungsional, detail yang terukur, dan pengerjaan yang terintegrasi.</p>
            <div className="hero-actions">
              <a href="#contact" className="button button--light">Konsultasikan Project <ArrowUpRight size={18} /></a>
              <a href="#projects" className="text-link">Lihat Portfolio <span>↗</span></a>
            </div>
          </div>
          <p className="hero-types">Residential <i /> Commercial <i /> Custom Furniture</p>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Lihat bagian berikutnya">
        <ArrowDown size={18} /> <span>Explore</span>
      </a>
    </section>
  );
}
