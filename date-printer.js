/*
  # Chapter 1 — Printing Today’s Date

  This file is intentionally shallow. It’s the **book-like** entry point of the
  application: a short chapter that tells you what the program does and in what
  order, without dragging in low-level details.

  - It does not explain how dates are formatted.
  - It does not explain how time works.
  - It only describes the high-level flow.

  All the messy or detailed parts live elsewhere (in helper modules) so that
  this chapter can remain readable in one pass.
*/

import { getFormattedDate } from './getFormattedDate.js';

/*
  ## Flow of this chapter (WHAT, in tiny steps)

  1. Ask the date layer for a human-ready representation of “today”.
  2. Present that representation on the console.

  That’s it. No branching, no configuration, no formatting decisions here.
  This file should feel almost like pseudocode glued to a story.
*/

// Step 1 — obtain today’s date in our chosen representation.
const today = getFormattedDate();

// Step 2 — present it to the outside world.
console.log(today);
