"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const projectTypes = ["Residential", "Office", "Custom Furniture"];

export default function CTA() {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const message = `Halo Vhaniture, saya ingin konsultasi mengenai kebutuhan ${projectType}.`;
  const whatsappUrl = `https://wa.me/6281310429811?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="cta-section">
      <div className="cta-lines" aria-hidden="true" />
      <Reveal className="cta-content shell">
        <p className="eyebrow">START A PROJECT</p>
        <h2>Punya Ruang yang<br />Ingin Kamu <em>Wujudkan?</em></h2>
        <div className="cta-bottom">
          <div className="cta-copy">
            <p>Ceritakan kebutuhan project kamu. Kami siap berdiskusi mulai dari konsep hingga pengerjaan.</p>
            <div className="project-type" aria-label="Pilih jenis project">
              {projectTypes.map((type) => (
                <button key={type} type="button" className={projectType === type ? "active" : ""} onClick={() => setProjectType(type)}>
                  {type}
                </button>
              ))}
            </div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button--light">
            Konsultasi via WhatsApp <ArrowUpRight size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
