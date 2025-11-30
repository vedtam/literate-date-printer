/*
  # getFormattedDate — Helper Module

  This module exists to hold the concrete implementation of date formatting,
  so that the main file (`date-printer.js`) can stay mostly narrative.

  ## WHAT
  Export a function `getFormattedDate` that returns today's date as YYYY-MM-DD.

  ## WHY
  - Separates implementation detail from the high-level story.
  - Makes it easier to swap or extend date formatting logic later.
  - Demonstrates how literate structure can scale beyond a single file.

  ## HOW
  Use JavaScript's `Date` object, extract year, month, and day, then
  zero‑pad month and day to two digits.
*/

export function getFormattedDate() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
