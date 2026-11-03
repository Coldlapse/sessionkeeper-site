# sessionkeeper-site

Landing page and privacy policy for [Session Keeper for Claude Code](https://github.com/Coldlapse/session-keeper-for-claude-code). A static site served by GitHub Pages (no build step).

- URL: https://sessionkeeper.coldlapse.dev
- Privacy policy: https://sessionkeeper.coldlapse.dev/privacy.html (the URL submitted to the Microsoft Store)
- English / Korean. The page follows the browser language on first visit (Korean browsers get Korean, everyone else English); the KO/EN toggle overrides it and is remembered. `?lang=en` or `?lang=ko` forces a language.

| File | Contents |
|---|---|
| `index.html` | Landing page. Each sentence is written twice as `<span lang="ko">` / `<span lang="en">` and CSS shows one of them |
| `privacy.html` | Privacy policy, both languages |
| `style.css` | Styles, light and dark (follows the OS setting) |
| `main.js` | Language toggle |
| `assets/`, `favicon-32.png`, `apple-touch-icon.png` | Icons, generated from the app's `assets/icon.png` |
| `CNAME` | GitHub Pages custom domain |
| `.nojekyll` | Disables Jekyll |

The app window on the landing page is an HTML mock-up with demo data, not a screenshot, so no real folder names appear.

The Pretendard font is loaded from jsDelivr.
