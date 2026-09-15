import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="section services shell">
      <Reveal className="services-intro">
        <p className="eyebrow">OUR EXPERTISE</p>
        <h2>Dari Ide<br />Menjadi <em>Ruang Nyata.</em></h2>
        <p>Pendekatan menyeluruh untuk menghadirkan ruang yang selaras antara ide, fungsi, dan kualitas pengerjaan.</p>
      </Reveal>

      <div className="service-list">
        {services.map((service, index) => (
          <Reveal key={service.number} delay={index * 45}>
            <article className="service-row">
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ArrowUpRight className="service-arrow" size={22} />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
