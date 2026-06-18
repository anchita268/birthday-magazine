export default function Sticker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rotate-[-3deg] rounded-full border-2 border-white bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 px-4 py-2 text-sm font-black uppercase text-purple-800 shadow-lg transition hover:rotate-3 hover:scale-105">
      {children}
    </span>
  );
}
