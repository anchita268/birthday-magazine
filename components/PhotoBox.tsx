type PhotoBoxProps = {
  label: string;
  className?: string;
};

export default function PhotoBox({ label, className = "" }: PhotoBoxProps) {
  return (
    <div className={`photo-frame group ${className}`}>
      <div className="flex h-full min-h-48 items-center justify-center rounded-2xl border-2 border-dashed border-fuchsia-300 bg-gradient-to-br from-white via-pink-100 to-blue-100 p-4 text-center text-sm font-black uppercase tracking-widest text-fuchsia-500 transition group-hover:scale-[1.02]">
        {label}
      </div>
    </div>
  );
}
