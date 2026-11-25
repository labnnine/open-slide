---
name: create-slide
description: Use this skill when the user wants to create, draft, author, or generate new slides / a presentation in this open-slide repo. Triggers on phrases like "make slides about X", "make a deck about X", "create a presentation", "draft slides for", "new slide", "a deck with speaker notes / a script", or when the user asks to add content under `slides/`. Do NOT use for editing the framework itself — only for authoring content inside `slides/<id>/`.
---

# Create a slide in open-slide

This skill owns the **workflow** for drafting a new deck. The technical reference — file contract, 1920×1080 canvas, type scale, palette, layout, assets — lives in the **`slide-authoring`** skill. Read that skill whenever you need details on *how* a page is structured. This skill assumes you'll consult it before writing code.

Read [FRY's presentation preferences](../slide-authoring/references/fry-preferences.md) before planning. Apply them wherever the brief leaves a choice open. When the user asks for Shigeo Fukuda, Fukuda Shigeo or 福田繁雄, apply the [Fukuda-inspired style](../slide-authoring/references/shigeo-fukuda.md).

Write files only under the requested `slides/<id>/`. When the agent panel supplies a blank deck, use that folder and keep its existing `createdAt`.

## Step 1 — Resolve the theme

Start with the supplied template, reference deck or named theme. List `themes/` if a workspace theme is relevant. Ask about theme choice only if the choice would materially change the deck and the brief leaves it open. Use a compact list of relevant choices, including a new design if suitable.

For a registered theme, read `themes/<id>.md` end-to-end and apply its palette, typography, layout and components. Load declared webfonts according to `slide-authoring`'s `references/webfonts.md`. Set `theme: '<theme-id>'` in `meta` so the deck links back to its theme. A reference deck or template without a registered theme can guide design without a `meta.theme` entry.

## Step 2 — Resolve the brief

Read the supplied material first. Identify the audience, topic, desired outcome and requested deliverable from the brief and sources. If the user asks only to review material or plan a deck, deliver that work at the requested scope.

Choose page count, text density, visual direction and motion from the brief, template and FRY's defaults. Proceed once those are sufficient for a first complete deck. Ask only for missing information that changes the result materially, such as an unspecified topic, conflicting decision wording or a required reference. Group those questions in one round using the question mechanism offered by the current agent. If the user needs to choose a visual direction, give concrete options tailored to the topic and recommend one. Mention consequential assumptions at hand-off.

## Step 3 — Pick a slide id

For a new folder, use a short, descriptive **kebab-case** id and check `slides/` for collisions. A blank deck supplied by the agent panel already has a folder. Follow the panel's slug hand-off when it asks for one.

## Step 4 — Plan the structure

Sketch the slide as a list of page roles before writing code. Common page types:

| Role             | Purpose                                       |
| ---------------- | --------------------------------------------- |
| Cover            | Title + subtitle, strong visual               |
| Agenda           | What's coming (3–5 items)                     |
| Section divider  | Big label between chapters                    |
| Content          | Heading + 2–5 bullets OR heading + one visual |
| Big number       | One statistic the size of the canvas          |
| Quote            | Pull-quote with attribution                   |
| Comparison       | Two-column before/after or A vs B             |
| Closing          | CTA, thanks, contact                          |

**Rule of thumb**: one idea per page. If you're tempted to put two, split them.

Start with the first page that serves the brief. Use a cover, agenda, divider or closing page when it helps the audience or the template requires it.

If the deck topic naturally calls for specific real images the user must supply (product screenshots, team photos, customer dashboards), plan where those go and use `<ImagePlaceholder>` from `@open-slide/core` — see the **Image placeholders** section in `slide-authoring`. Default is **no placeholders**: only insert one when a real image is genuinely required.

## Step 5 — Commit to a visual direction

Pick one coherent palette / type scale / aesthetic and hold it across every page. The full set of constraints (palette structure, type scale, padding, aesthetic options) lives in `slide-authoring` — apply it.

**Default: declare a top-level `export const design: DesignSystem = { … }`** at the top of `index.tsx` (after imports) using the chosen palette / type scale, and reference the values via `var(--osd-X)` from inline styles. This keeps the slide tweakable from the Design panel after generation, which is what the user almost always wants. Only skip the `design` const for a one-off slide whose palette is intentionally locked and not meant to be re-themed — in that case, fall back to the local `palette` constants pattern. The "Design system" section of `slide-authoring` covers the format and available tokens.

If the `frontend-design` skill is available, consult it for deeper aesthetic guidance when the user wants something bold.

## Step 6 — Write `slides/<id>/index.tsx`

Read the **`slide-authoring`** skill before writing — it covers the file contract, canvas rules, type scale, spacing, and asset imports, and it includes a starter template you can copy. Don't duplicate that knowledge here; use it.

Write natural Cantonese speaker notes for every substantive page unless the brief specifies otherwise. Use the page-aligned `export const notes` array shown in **Speaker notes** in `slide-authoring`. When authoring page by page in the agent panel, keep the page list and its notes aligned in each edit.

## Step 7 — Self-review

Run `slide-authoring`'s **Self-review before finishing** checklist and the verification in FRY's preferences. Check the requested export as well as the React source.

Inspect every page with the available preview workflow and fix layout or rendering defects. See **Previewing a page visually** in `slide-authoring`.

## Step 8 — Hand off to the user

Deliver the requested output and link the deck source or live preview when available. Name any missing assets, material assumptions or unverified export details. If the user is already viewing the deck in the agent panel, a short summary is enough. For a React deck with no live preview, give the project-specific preview command and route. End with the requested slug marker when the agent panel requires it.
