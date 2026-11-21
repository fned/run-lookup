# Work Available

Lives in the `work/` folder of the run-lookup repo, next to Run Lookup. Nothing outside this folder is touched.

- Site: `https://fned.github.io/run-lookup/work/`
- Reads a screenshot of the open-work sheet on the phone (Tesseract OCR) and lists every shift.
- Routes come from the same paddles as Run Lookup (Fall 2026 and Winter 2027; weekday, Saturday, Sunday).
  The right set is picked from the sheet's Work Date; you can change it with the Paddles menu.
- Tap a shift to mark it booked / don't want.
- Works offline after the first visit. Add it to the home screen from Safari's Share menu.

## Updating the paddles

`paddles.json` is built from the paddle data inside Run Lookup's `index.html`.
When Run Lookup gets new paddles, ask Claude to rebuild `work/paddles.json` from it.

| File | What it is |
|---|---|
| `index.html` | The app |
| `paddles.json` | Route numbers for every trip of every run, all six paddle sets |
| `eng.traineddata.gz` | English data for the reader |
| `sw.js` | Saves the app for offline use (only inside `work/`) |
| `manifest.webmanifest`, `icon-*.png` | Home-screen app settings and icons |
