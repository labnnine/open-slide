---
name: shigeo-fukuda-style
description: Apply Shigeo Fukuda-inspired figure-ground design and meaningful motion to an Open Slide deck. Use when the user requests this style, Fukuda Shigeo, or 福田繁雄.
---

# Shigeo Fukuda-inspired presentations

Use alongside Open Slide's authoring skills when requested. Treat this as the selected aesthetic direction. Choose motion only where it helps the audience see the second reading, and respect an explicit animation or static requirement. Apply the requested scope. For a formal template, place the concept graphic in the available content area and use the template's typography and branding.

## Concept and sequence

1. Write the takeaway in one sentence. Identify a contrast, hidden dependency or change in viewpoint that the audience can grasp through a single visual.
2. Draw an original motif with two readings. Try a shared contour, a silhouette with a second image in its negative space, or a form that changes meaning when the foreground and background exchange roles. Aim for a first read at a glance and a second read that explains the takeaway.
3. Choose a few pages where the visual turn does work, such as an opening, a change of perspective or a decision. Carry the same motif across adjacent pages when a change in perception is the story. Use direct layouts for charts, exact figures, procedures and dense evidence.
4. Keep the title short and editable. Give the motif room with crisp shapes, high contrast and generous space. Near-black and warm white are a starting palette. A single accent can point to the pivot or proposed action. Choose the palette for the subject and template.

## PowerPoint and HTML

- For PowerPoint, let adjacent static slides carry the reveal. Use native editable shapes or a cropped graphic as appropriate and leave text and data editable. Check the key image at presentation distance and in the actual export.
- For HTML, a click, keyboard step or transition can reveal the second reading. Support reduced motion and ensure the fully revealed or static state communicates the same message. Make interactive controls distinct from the illustration.
- After drafting, read each slide at a glance. The takeaway should still make sense to someone who misses the illusion. Check that the design leaves the exact decision wording and evidence legible.

## Playable example

Read [the React example](../../../apps/demo/slides/fukuda-approval-demo/index.tsx). In the fork's demo workspace, open `/s/fukuda-approval-demo` and use presentation mode to see the reveal and morph. The three pages, artwork, motion and Cantonese notes are defined in that file. Use the example to understand the timing before drawing a new motif for the current subject.

- **Too many handoffs** — Two facing profiles are the obvious figures. The space between them quietly forms a pinched hourglass.
- **The wait is between teams** — Repeat the contour and use `Steps` and `Step` to reveal a red marker at its narrowest point on the next advance.
- **Give one team ownership** — Open the space into an arrow. Use the same `MorphElement` ID on both pages and enable `morph` on the incoming page so the marker moves from the bottleneck to the start of the proposed flow. Present the real proposed action and supporting evidence in editable text on this page or the following page.

Use this as a visual exercise. For a live board paper, take headings and decision wording from the source.

Study how the positive and negative regions share contours in the [1975 exhibition poster](https://umma.umich.edu/objects/shigeo-fukuda-exhibition-2017-2-82/) and how sparse geometry, overlap and partial concealment guide the eye in the [1987 exhibition poster](https://umma.umich.edu/objects/shigeo-fukuda-poster-exhibition-2017-2-93/). Invent a new image for the subject of each deck.
