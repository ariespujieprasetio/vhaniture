import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section about shell">
      <Reveal className="about-copy">
        <p className="eyebrow">ABOUT VHANITURE</p>
        <h2>Lebih dari sekadar<br /><em>menciptakan ruang.</em></h2>
        <div className="about-body">
          <p>Vhaniture menghadirkan solusi interior dan custom furniture yang menggabungkan estetika, fungsi, dan kebutuhan setiap client.</p>
          <p>Mulai dari tahap konsep, desain, produksi hingga instalasi, setiap project dirancang untuk menciptakan ruang yang nyaman, relevan dan memiliki karakter.</p>
        </div>
      </Reveal>
      <Reveal className="about-visual" delay={120}>
        <div className="about-image-main">
          <Image src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=88" alt="Ruang modern dengan detail material alami" fill sizes="(max-width: 768px) 82vw, 46vw" />
        </div>
        <div className="about-image-small">
          <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=88" alt="Detail kursi dan furnitur interior" fill sizes="(max-width: 768px) 45vw, 20vw" />
        </div>
        <p className="image-note">DESIGN WITH PURPOSE<br />BUILT WITH CARE</p>
      </Reveal>
    </section>
  );
}
