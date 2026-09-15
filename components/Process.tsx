import Reveal from "./Reveal";

const steps = [
  ["01", "Konsultasi", "Memahami kebutuhan, preferensi, fungsi ruang dan budget project."],
  ["02", "Konsep & Desain", "Mengembangkan konsep desain dan visual sesuai kebutuhan ruang."],
  ["03", "Material & Produksi", "Pemilihan material dilanjutkan dengan proses produksi dan persiapan pengerjaan."],
  ["04", "Installation", "Proses pengerjaan dan instalasi hingga ruang siap digunakan."],
];

export default function Process() {
  return (
    <section id="process" className="section process shell">
      <Reveal className="process-heading">
        <p className="eyebrow">OUR PROCESS</p>
        <h2>Bagaimana Kami <em>Bekerja</em></h2>
        <p>Proses yang transparan untuk menjaga setiap keputusan tetap terarah dari awal hingga ruang selesai.</p>
      </Reveal>
      <div className="timeline">
        {steps.map(([number, title, description], index) => (
          <Reveal key={number} className="timeline-step" delay={index * 100}>
            <span className="timeline-number">{number}</span>
            <span className="timeline-dot" />
            <h3>{title}</h3>
            <p>{description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
