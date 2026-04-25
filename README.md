# Street Vendor QR App – Static Website

This folder contains the static marketing/presentation site for the Street Vendor QR App. It is plain HTML, CSS, and JavaScript (no build step).

## Hosting

You can host this site for free on **GitHub Pages** or **Netlify**.

### Option 1: GitHub Pages

1. Create a new repository (e.g. `street-vendor-qr-site`) or use an existing one.
2. Push the contents of this `website` folder to the repo. Either:
   - Put only the website files in the repo root (so the root has `index.html`, `css/`, `js/`, `assets/`), or
   - Push the whole project and set the source to the `website` folder (GitHub Pages can publish from a subfolder via **Settings → Pages → Source**: choose the branch and set the folder to `/website` if your repo structure is `VendorQr/website/`).
3. In the repo **Settings → Pages**, under "Build and deployment", choose **Source: Deploy from a branch**. Select the branch (e.g. `main`) and folder (e.g. `/ (root)` or `/website`), then Save.
4. The site will be available at `https://<username>.github.io/<repo-name>/`. If you use a subfolder like `website`, the URL will include that path unless you use a custom domain.

**Tip:** If the repo contains only the website files (e.g. `index.html` at root), use **Source: Deploy from a branch** and **Branch: main, / (root)**.

### Option 2: Netlify

1. Sign up at [netlify.com](https://www.netlify.com).
2. **Drag and drop:** Go to [app.netlify.com/drop](https://app.netlify.com/drop), drag the `website` folder (or a zip of it), and Netlify will deploy it.
3. Or **Git deploy:** Connect your repository (e.g. GitHub). Set **Base directory** to `website` if the site is in that subfolder. Build command can be left empty; publish directory is the same as base (e.g. `website`).
4. Netlify will give you a URL like `https://random-name.netlify.app`. You can add a custom domain in Site settings.

### After deploy

- Replace `YOUR_FORM_ID` in `contact.html` with your [Formspree](https://formspree.io) form ID so the contact form works.
- Add real images under `assets/images/` (see `assets/images/.gitkeep` for the list of suggested filenames).
- Replace placeholder testimonials and team/credits when you have real content.

## Local preview

Open `index.html` in a browser, or serve the folder locally:

- **Python 3:** `python -m http.server 8000` (then open `http://localhost:8000`; run from inside the `website` folder).
- **Node:** `npx serve website` from the project root.

## Structure

- `index.html` – Home (hero, overview, carousel, CTAs, why choose us, testimonials)
- `features.html` – Feature list with icons
- `how-it-works.html` – Vendor and customer guides (tabs)
- `about.html` – Story, FAQ, team, hosting note
- `contact.html` – Contact form (Formspree placeholder)
- `css/style.css` – Theme vars, layout, responsive, dark mode
- `js/script.js` – Nav toggle, carousel, tabs, theme toggle, hash handling
- `assets/images/` – Placeholder image paths (add real files as needed)
