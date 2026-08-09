# Summit House of Raleigh — static website

This is a plain HTML/CSS/JavaScript site intended to be easy to edit and easy to host on GitHub Pages.

## Files

- `index.html` — Home
- `apply.html` — Eligibility + preliminary inquiry form
- `contact.html` — Contact information + message form
- `styles.css` — all site styling
- `script.js` — small helper for the demo forms
- `assets/summit-house-logo.png` — cropped from the supplied Summit House branding artwork
- `assets/brand-background.svg` — lightweight decorative background
- `assets/favicon.svg` — simple browser icon
- `CNAME` — custom-domain file for GitHub Pages

## The first things to edit

Search the HTML files for `EDIT:` comments.

### Contact information
`contact.html` currently contains:
- Don Turner — 919-306-7019
- Larry Hinnant — 984-268-6366

Verify spelling, titles, and phone numbers before publishing.

### Forms
The Apply and Contact forms are intentionally disabled until you choose a form backend.

A static GitHub Pages site cannot process form submissions by itself. One easy option is Formspree:

1. Create a form at Formspree.
2. Formspree gives you an endpoint like `https://formspree.io/f/abcxyz`.
3. In `apply.html` and `contact.html`, replace:
   `https://formspree.io/f/REPLACE_ME`
   with your endpoint.
4. Remove `data-demo="true"` from the `<form>` tag.
5. Test a submission before publishing.

Because recovery status can be sensitive, the forms intentionally ask for very little information. Keep detailed medical/treatment information off ordinary email-style web forms.

## GitHub Pages

Put all of these files in the root of the repository and enable GitHub Pages for the branch you are using.

The included `CNAME` contains:

    summithouseraleigh.org

If you are not ready to use the custom domain yet, delete `CNAME`.

## Editing colors

The main colors are at the top of `styles.css`:

```css
--navy: #0b2d4f;
--gold: #c89639;
--cream: #f7f2e9;
--green: #2f5a3a;
```

## Editing text

All visible page text is directly in the three HTML files. There is no framework, build step, package manager, or CMS.

## Accessibility / mobile

The template includes:
- responsive layouts
- keyboard focus states
- semantic headings and navigation
- labeled form controls
- reduced dependence on JavaScript
- a skip-to-content link
