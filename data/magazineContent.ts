// EDIT THIS FILE FIRST ✨
// Change your friend's name, page text, photos, captions, memories, and messages here.
// To use real photos: put image files inside /public/photos and change photo: "/photos/your-file-name.jpg"

export const magazine = {
  friendName: "Bestie",
  title: "Bestie Turns 20",
  subtitle: "The Birthday Issue",
  editorName: "Anchita",
  coverPhoto: "Replace with main cover photo",
  editorLetter:
    "Dear Bestie, this is placeholder text for your birthday letter. Replace this with a sweet message about your friendship, your favourite memories, and why she is iconic.",
  headlines: [
    "20 reasons she is THAT girl",
    "Exclusive: funniest memories revealed",
    "The glow-up issue",
    "Best looks, best laughs, best chaos",
    "Friendship archive unlocked"
  ]
};

export const photoSpread = [
  { label: "Replace with photo 1", caption: "Caption goes here" },
  { label: "Replace with photo 2", caption: "Caption goes here" },
  { label: "Replace with photo 3", caption: "Caption goes here" },
  { label: "Replace with photo 4", caption: "Caption goes here" },
  { label: "Replace with photo 5", caption: "Caption goes here" },
  { label: "Replace with photo 6", caption: "Caption goes here" }
];

export const timeline = [
  {
    date: "2022",
    title: "When we first became iconic",
    photo: "Replace with memory photo",
    text: "Write the memory here."
  },
  {
    date: "2023",
    title: "The funniest day ever",
    photo: "Replace with memory photo",
    text: "Write the memory here."
  },
  {
    date: "2024",
    title: "Main character moment",
    photo: "Replace with memory photo",
    text: "Write the memory here."
  }
];

export const loveList = Array.from({ length: 20 }, (_, index) => ({
  number: index + 1,
  text: `Reason ${index + 1}: replace this with something you love about her.`
}));

export const interview = [
  { question: "Most iconic moment?", answer: "Write answer here." },
  { question: "Most likely to...?", answer: "Write answer here." },
  { question: "Favourite memory together?", answer: "Write answer here." },
  { question: "Birthday wish for her?", answer: "Write answer here." }
];

export const birthdayMessages = [
  { name: "Friend 1", message: "Write birthday message here.", photo: "Optional photo" },
  { name: "Friend 2", message: "Write birthday message here.", photo: "Optional photo" },
  { name: "Friend 3", message: "Write birthday message here.", photo: "Optional photo" }
];
