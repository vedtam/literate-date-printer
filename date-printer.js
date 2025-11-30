/*
  # Tiny Date Printer — Main Chapter

  ## WHAT
  This file is the narrative entry point of the tiny date-printing application.

  It explains the intention and delegates the actual date formatting to a helper
  module, so the top-level file can stay mostly prose + orchestration.

  ## WHY
  This mirrors how we would like larger systems to behave:
  - The main file reads like a high-level chapter.
  - Implementation details live in focused helper modules.
  - Coding agents (or humans) can change the helper without cluttering the chapter.

  ## HOW
  - Import a helper called `getFormattedDate` from a separate module.
  - Call it and print the result.

  This keeps the main file almost entirely about *what* and *why*,
  with just a single, obvious *how* at the bottom.
*/

import { getFormattedDate } from './getFormattedDate.js';

/*
  ----------------------------------------------------------------------
  ## Section: main
  ### WHAT
  Print the formatted date to the console.

  ### WHY
  This is the observable behavior of the program: showing today as YYYY-MM-DD.

  ### HOW
  Ask the helper for the current date string and log it.
*/

console.log(getFormattedDate());