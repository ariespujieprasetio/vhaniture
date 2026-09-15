import Image from "next/image";
import Reveal from "./Reveal";

const reasons = [
  ["Desain Personal", "Setiap project dikembangkan berdasarkan kebutuhan dan karakter client."],
  ["Terintegrasi", "Dari desain, produksi hingga instalasi dalam satu proses pengerjaan."],
  ["Detail & Material", "Pemilihan material dan detail pengerjaan menjadi bagian penting dari setiap project."],
  ["Fungsional", "Desain tidak hanya terlihat baik, tetapi juga nyaman digunakan dalam aktivitas sehari-hari."],
];

export default function WhyUs() {
  return (
    <section className="why">
      <div className="why-image">
        <Image src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90" alt="Detail interior premium dengan material alami" fill sizes="(max-width: 768px) 100vw, 45vw" />
      </div>
      <div className="why-content">
        <Reveal>
          <p className="eyebrow">WHY VHANITURE</p>
          <h2>Setiap Detail<br /><em>Punya Tujuan.</em></h2>
        </Reveal>
        <div className="reason-grid">
          {reasons.map(([title, description], index) => (
            <Reveal key={title} className="reason" delay={index * 70}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
