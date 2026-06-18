import PhotoBox from "@/components/PhotoBox";
import Section from "@/components/Section";
import Sticker from "@/components/Sticker";
import { birthdayMessages, interview, loveList, magazine, photoSpread, timeline } from "@/data/magazineContent";

const navItems = [
  ["Cover", "#cover"],
  ["Letter", "#letter"],
  ["Photos", "#photos"],
  ["Timeline", "#timeline"],
  ["20 Things", "#love"],
  ["Quiz", "#quiz"],
  ["Messages", "#messages"],
  ["Final", "#final"]
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <nav className="sticky top-0 z-50 border-b-2 border-white/80 bg-white/55 px-3 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto text-xs font-black uppercase tracking-wider text-purple-700">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full border border-white bg-pink-100 px-3 py-2 shadow transition hover:-translate-y-1 hover:bg-white">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section id="cover" className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="absolute left-8 top-24 text-5xl">✦</div>
        <div className="absolute right-10 top-32 text-4xl">♡</div>
        <div className="absolute bottom-14 left-20 text-5xl">🦋</div>

        <div className="mag-card glitter-bg rounded-[2.5rem] p-6 sm:p-10">
          <p className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-black uppercase tracking-[.25em] text-fuchsia-600">Y2K special</p>
          <h1 className="chrome-text text-6xl font-black uppercase leading-none sm:text-8xl">{magazine.title}</h1>
          <p className="mt-4 text-3xl font-black uppercase text-purple-800">{magazine.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Sticker>birthday queen</Sticker>
            <Sticker>exclusive issue</Sticker>
            <Sticker>20 era</Sticker>
          </div>
        </div>

        <div className="relative">
          <PhotoBox label={magazine.coverPhoto} className="rotate-2" />
          <div className="mt-5 grid gap-3">
            {magazine.headlines.map((headline) => (
              <div key={headline} className="rounded-2xl border-2 border-white bg-fuchsia-100/80 p-3 text-lg font-black uppercase text-purple-700 shadow-lg transition hover:scale-105">
                ✨ {headline}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="letter" eyebrow="page 02" title="Letter from the Editor">
        <div className="mag-card rounded-[2rem] p-8 text-xl font-semibold leading-9">
          <p>{magazine.editorLetter}</p>
          <p className="mt-6 font-black text-fuchsia-600">— {magazine.editorName}</p>
        </div>
      </Section>

      <Section id="photos" eyebrow="page 03" title="Photo Spread">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photoSpread.map((photo, index) => (
            <figure key={photo.label} className={`${index % 2 === 0 ? "rotate-1" : "-rotate-1"} transition hover:rotate-0 hover:scale-[1.03]`}>
              <PhotoBox label={photo.label} />
              <figcaption className="mt-2 rounded-full bg-white/80 px-4 py-2 text-center text-sm font-bold text-purple-700">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="timeline" eyebrow="page 04" title="Memory Lane">
        <div className="space-y-6">
          {timeline.map((item) => (
            <article key={item.title} className="mag-card grid gap-5 rounded-[2rem] p-5 sm:grid-cols-[180px_1fr]">
              <PhotoBox label={item.photo} />
              <div>
                <p className="text-sm font-black uppercase tracking-[.25em] text-fuchsia-600">{item.date}</p>
                <h3 className="mt-2 text-3xl font-black text-purple-800">{item.title}</h3>
                <p className="mt-3 text-lg font-semibold leading-8">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="love" eyebrow="page 05" title="20 Things We Love About You">
        <div className="grid gap-3 sm:grid-cols-2">
          {loveList.map((item) => (
            <div key={item.number} className="rounded-3xl border-2 border-white bg-white/70 p-4 shadow-lg transition hover:-translate-y-1 hover:bg-pink-100">
              <span className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 font-black text-white">{item.number}</span>
              <span className="font-bold">{item.text}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="quiz" eyebrow="page 06" title="Friendship Interview">
        <div className="grid gap-5 md:grid-cols-2">
          {interview.map((qa) => (
            <div key={qa.question} className="mag-card rounded-[2rem] p-6">
              <h3 className="text-2xl font-black text-fuchsia-600">{qa.question}</h3>
              <p className="mt-3 text-lg font-semibold">{qa.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="messages" eyebrow="page 07" title="Birthday Messages">
        <div className="grid gap-5 lg:grid-cols-3">
          {birthdayMessages.map((message) => (
            <div key={message.name} className="mag-card rounded-[2rem] p-5 transition hover:-translate-y-2">
              <PhotoBox label={message.photo} />
              <h3 className="mt-4 text-2xl font-black text-purple-800">{message.name}</h3>
              <p className="mt-2 font-semibold leading-7">{message.message}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="final" className="glitter-bg mx-auto mb-12 max-w-6xl rounded-[3rem] border-4 border-white p-10 text-center shadow-y2k">
        <p className="text-5xl">🎂 ✨ 🦋 ♡</p>
        <h2 className="chrome-text mt-4 text-5xl font-black uppercase sm:text-7xl">Happy 20th Birthday, {magazine.friendName}!</h2>
        <p className="mx-auto mt-5 max-w-2xl text-xl font-bold text-purple-800">Final big birthday message goes here. Make it dramatic, sweet, chaotic, and very magazine-cover worthy.</p>
        <a href="#cover" className="mt-8 inline-block rounded-full bg-purple-700 px-8 py-4 font-black uppercase tracking-widest text-white shadow-xl transition hover:-translate-y-1 hover:bg-fuchsia-600">
          Back to Cover
        </a>
      </section>
    </main>
  );
}
