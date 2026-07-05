# OMBW — Online Meditation & Breath Workshop landing page

A single static page for the Art of Living Online Meditation & Breath Workshop
(**19–22 July, 6:30–8:30 AM**). No build tools — it runs as plain HTML/CSS/JS.

## Edit your details (do this first)

Open **`config.js`** — it's the only file you normally need to touch:

| Setting | What to put |
|---|---|
| `WHATSAPP_NUMBER` | Your number, country code + digits only, **no `+`/spaces/dashes** (e.g. `919876543210`) |
| `WHATSAPP_MSG_GENERAL` | Pre-filled text for the "Message me" buttons |
| `WHATSAPP_MSG_INTRO_TALK` | Pre-filled text for the "intro talk" button |
| `REGISTRATION_URL` | Link to your registration form |
| `VIDEO_EMBED_URL` | YouTube/Vimeo **embed** URL (swap anytime to change the video) |
| `DATES` / `TIME` / `TIMEZONE` / `YEAR` | Workshop details |

**Your photo:** replace `assets/teacher.jpg` with your own (keep the same filename).
**Your bio & name:** edit the "Meet your teacher" section in `index.html`.

### Video URL format
- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO_ID`

## Preview locally
From this folder:
```bash
python3 -m http.server 8000
```
Then open <http://localhost:8000>. (Opening `index.html` directly works too.)

## Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "OMBW landing page"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```
Then on GitHub: **Settings → Pages → Source: `main` / root**.
Your site goes live at `https://<username>.github.io/<repo>/` within a minute or two.
