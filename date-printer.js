/*
  # Tiny Date Printer — Main Chapter

  WHAT:
    Print today's date in a clean YYYY-MM-DD format.

  WHY:
    Keep this file focused on high-level intent and orchestration.
    The actual date-formatting logic lives in a separate helper module.

  HOW:
    1. Import getFormattedDate from './getFormattedDate.js'.
    2. Call it and log the result.
*/

import { getFormattedDate } from './getFormattedDate.js';

// Main step: gather formatted date and print it
console.log(getFormattedDate());
