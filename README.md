# sampleRepo — FigHub WO-194 / WO-195 test fixture

Hand-authored design system content with **zero** FigHub stamps (`fighub:id`, `design/.fighub/`, component-spec JSON, Code Connect stubs).

Use this as the connected GitHub repo when live-testing:

1. **WO-195** — component push should write spec JSON (+ Code Connect if gated), **not** `design/generated/**/components/*.tsx`
2. **WO-194** — connect should classify **`external-mature`**, open ConnectWizard, match Button/Card/Badge by name, queue review conflicts, and push token ids only to `design/.fighub/token-ids.json`

## Layout

| Path | Role |
| --- | --- |
| `design/tokens.json` | Canonical tokens — **no** `extensions['fighub:id']` |
| `src/components/ui/button.tsx` | High-confidence name match for Figma **Button** |
| `src/components/ui/card.tsx` | High-confidence name match for Figma **Card** |
| `src/components/ui/badge.tsx` | High-confidence name match for Figma **Badge** |
| `src/components/ui/mystery-widget.tsx` | Repo-only / no canvas match (dropdown “Not found” cases) |

## Suggested live smoke

1. In a Figma file, create ComponentSets named **Button**, **Card**, **Badge** (variants optional but better if `variant`/`size` axes exist on Button).
2. Connect `https://github.com/JBabcock-DL/sampleRepo` in FigHub.
3. Expect ConnectWizard activity: discover → match → verify.
4. Changes: conflict tiles for unspecced components; typeahead can point at `src/components/ui/*.tsx`.
5. Push tokens → `tokens.json` stays without new ids; `design/.fighub/token-ids.json` appears.
6. Push a confirmed component → spec JSON under your specs path; **no** generated component code under `design/generated/`.

Repo URL: https://github.com/JBabcock-DL/sampleRepo
