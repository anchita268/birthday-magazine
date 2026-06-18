# Y2K Birthday Magazine Website

A beginner-friendly Next.js + Tailwind CSS birthday magazine website.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit text

Open:

```txt
data/magazineContent.ts
```

Change the friend name, cover title, captions, timeline, 20 things list, interview answers, and birthday messages.

## Replace photos

1. Put your photos inside:

```txt
public/photos
```

2. In `data/magazineContent.ts`, replace placeholder labels with image paths like:

```ts
photo: "/photos/photo1.jpg"
```

3. To actually render real images instead of placeholder boxes, update `components/PhotoBox.tsx` to use Next Image or a normal `<img>` tag. Beginner option:

```tsx
<img src={label} alt="Birthday memory" className="h-full w-full rounded-2xl object-cover" />
```

Then pass image paths instead of text labels.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial birthday magazine website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Deploy on Vercel

1. Go to Vercel.
2. Click Add New Project.
3. Import your GitHub repo.
4. Keep default Next.js settings.
5. Click Deploy.
