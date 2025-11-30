/*
  # Low-Level Date Utilities — Support Module

  This module provides simple, reusable date helpers that other parts of the
  system can use, including the child-facing formatter.

  While the 'Friendly Dates' project focuses on child-friendly messages, we
  still sometimes need a neutral, machine- or adult-oriented representation of
  a date. That is the role of this helper.

  ## WHAT

  Export a function:

    getIsoDateString(date?) -> string

  which returns a string in the familiar YYYY-MM-DD format. If no date is
  provided, 'today' is used.

  ## WHY

  - Research tools or logs might want a stable, compact date representation.
  - Other helpers can build on this without re-implementing padding logic.
  - Keeping this separate from child-facing wording makes the layering clear:
    low-level utilities here, pedagogy and phrasing elsewhere.

  ## HOW

  1. Take a Date object (or create one for now if missing).
  2. Extract year, month, and day.
  3. Zero-pad month and day.
  4. Combine them into 'YYYY-MM-DD'.
*/

export function getIsoDateString(date) {
  const d = date || new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return year + '-' + month + '-' + day;
}
