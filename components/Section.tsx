type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-8 rounded-[2rem] border-4 border-white/80 bg-white/60 p-5 shadow-y2k backdrop-blur">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-fuchsia-600">{eyebrow}</p>
        <h2 className="chrome-text mt-2 text-4xl font-black uppercase sm:text-6xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
