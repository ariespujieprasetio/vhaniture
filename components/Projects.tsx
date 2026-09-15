"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((selected + 1) % projects.length);
      if (event.key === "ArrowLeft") setSelected((selected - 1 + projects.length) % projects.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const move = (direction: number) => {
    if (selected === null) return;
    setSelected((selected + direction + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section projects">
      <div className="shell">
        <Reveal className="section-heading projects-heading">
          <div>
            <p className="eyebrow">CURATED SPACES · 2026</p>
            <h2>Selected <em>Projects</em></h2>
          </div>
          <p>Beberapa inspirasi ruang yang menggambarkan pendekatan kami terhadap desain, material, dan fungsi.</p>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.name} className={`project-card project-card--${project.size}`} delay={(index % 2) * 100}>
              <button className="project-open" type="button" onClick={() => setSelected(index)} aria-label={`Lihat detail ${project.name}`}>
                <div className="project-image">
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-arrow"><ArrowUpRight size={18} /></span>
                </div>
                <div className="project-meta">
                  <h3>{project.name}</h3>
                  <p>{project.category}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        <p className="demo-note">Visual dan nama project pada bagian ini digunakan sebagai materi konsep.</p>
      </div>

      {selected !== null && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-label={`Detail ${projects[selected].name}`}>
          <button className="project-modal-backdrop" type="button" onClick={() => setSelected(null)} aria-label="Tutup detail project" />
          <div className="project-modal-panel">
            <div className="project-modal-image">
              <Image src={projects[selected].image} alt={projects[selected].alt} fill priority sizes="(max-width: 768px) 100vw, 72vw" />
            </div>
            <div className="project-modal-info">
              <span>0{selected + 1} / 0{projects.length}</span>
              <div>
                <p>{projects[selected].category}</p>
                <h3>{projects[selected].name}</h3>
                <small>Concept portfolio · Demo visual</small>
              </div>
              <div className="project-modal-nav">
                <button type="button" onClick={() => move(-1)} aria-label="Project sebelumnya"><ArrowLeft /></button>
                <button type="button" onClick={() => move(1)} aria-label="Project berikutnya"><ArrowRight /></button>
              </div>
            </div>
            <button className="project-modal-close" type="button" onClick={() => setSelected(null)} aria-label="Tutup detail project"><X /></button>
          </div>
        </div>
      )}
    </section>
  );
}
