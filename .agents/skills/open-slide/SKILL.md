---
name: open-slide
description: Create, revise, adapt or preview presentations directly in the Open Slide React framework. Use when FRY explicitly requests Open Slide or open-slide, including when a PowerPoint file or Google Slides link is the source, or when requesting this repo's interactive Fukuda-style presentation workflow.
---

# Author with Open Slide

Use the Open Slide workflow as the authoring entry point. Read the canonical files below from the selected checkout. When the repo is available through GitHub, use `labnnine/open-slide` on the `fry/open-slide-preferences` branch to resolve the same paths.

- **New deck or adaptation from another format:** Read [create-slide](../../../packages/core/skills/create-slide/SKILL.md) and [slide-authoring](../../../packages/core/skills/slide-authoring/SKILL.md). In this framework repo, the demo workspace is `apps/demo`, so use `apps/demo/slides/<id>/index.tsx` for a new React deck. Use the active slide workspace when working outside the framework repo.
- **Revision of an existing Open Slide deck:** Read [slide-authoring](../../../packages/core/skills/slide-authoring/SKILL.md) and edit the requested React source. Use [apply-comments](../../../packages/core/skills/apply-comments/SKILL.md) for inspector comments.
- **External source:** Use Drive, Google Slides or a file reader to inspect the supplied deck, including its slide text, visuals and notes as available. Keep the source as a reference while making the revision in Open Slide. Update the external original only when explicitly requested. If the user asks to revise the external deck without naming an output, deliver an Open Slide deck and preview. If the user explicitly requests PowerPoint, author in Open Slide and verify the requested export, including editability and any motion differences.
- **Fukuda style:** When requested, read [the style guide](../../../packages/core/skills/slide-authoring/references/shigeo-fukuda.md) and [the playable example](../../../apps/demo/slides/fukuda-approval-demo/index.tsx). Apply the timing and figure-ground approach to the subject of the request.

Verify the result in the Open Slide runtime where available. If the checkout, source or runtime is unavailable, name the specific blocker and the files or preview steps that were verified. Choose a different authoring workflow only when requested.
