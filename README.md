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
| `src/components/ui/mystery-widget.tsx` | Repo-only / no canvas match |
| `src/components/ui/snack-notice.tsx` | **Name mismatch** — pairs with Figma **Callout** (not SnackNotice) |

## Figma canvas checklist

| Figma ComponentSet | Repo file | Expected Changes path |
| --- | --- | --- |
| **Button**, **Card**, **Badge** | matching `*.tsx` names | auto-confirm → plain push |
| **Toast** | *(none)* | Missing in repo → Push to repo |
| **Callout** (`variant`: default / destructive / info) | `snack-notice.tsx` (**SnackNotice**) | Missing in repo → pick file → **Confirm** → Keep Figma / Keep Repo |
| *(none)* | `mystery-widget.tsx` | Missing in Figma / Restore (when orphan rows ship) |

**Callout** must not be named SnackNotice — the mismatch is the point of the Confirm flow.

## Suggested live smoke

1. Create the Figma ComponentSets in the table above (Callout needs the three `variant` values).
2. Connect `https://github.com/JBabcock-DL/sampleRepo` in FigHub.
3. Button/Card/Badge auto-confirm; Toast = push-as-new; Callout → select `src/components/ui/snack-notice.tsx` → Confirm → Keep Figma or Keep Repo.
4. Push tokens → `tokens.json` stays without new ids; `design/.fighub/token-ids.json` appears.

Repo URL: https://github.com/JBabcock-DL/sampleRepo
