/*
  # Chapter 1 — Printing Child-Friendly Dates

  This file is the book-like entry point of the application. It explains the
  intention of the project in human terms and describes only the high-level
  flow, not the technical details.

  ## Project context

  This program is part of an experiment (or grant project) called 'Friendly Dates'.
  The goal is to help ~5-year-old children get familiar with the idea of 'today'
  and with simple date-related concepts:

  - the name of the day (e.g. 'Sunday')
  - the month (e.g. 'November')
  - the number of the day (e.g. '30')

  The audience of this chapter includes educators, reviewers, and parents, not
  only programmers. Therefore we avoid low-level time logic here.

  ## WHAT this chapter does

  When the program runs, it produces a child-friendly sentence describing today,
  such as:

    'Today is Sunday. The number of the day is 30.'

  or a more playful variant like:

    '📅 Today is Sunday! We are in the month of November, and the number of
     the day is 30.'

  The exact wording is delegated to a helper module that knows how to talk
  'to children'.

  ## WHY we structure it this way

  - Five-year-olds do not care about ISO date formats.
  - Educators and parents care about phrasing, tone, and clarity.
  - Researchers might want to experiment with multiple phrasings to see which
    helps children grasp the concepts best.

  By keeping this chapter free of implementation detail, we make it possible
  to reason about behavior, audience, and pedagogy without being distracted by
  time APIs or formatting code.

  ## HOW this chapter behaves (high level)

  1. Ask a child-oriented formatter for a sentence that explains 'today'.
  2. Present that sentence to the outside world (for now, the console).

  Everything else happens in helper modules.
*/

import { formatDateForChild } from './childDateFormatter.js';

/*
  ## Minimal executable bridge

  Below we show the tiny bridge between the narrative above and the underlying
  implementation. This should read almost like pseudocode.
*/

// Step 1 — get a child-friendly sentence for 'today'.
const messageForChild = formatDateForChild(new Date());

// Step 2 — present it (here: print to the console).
console.log(messageForChild);
