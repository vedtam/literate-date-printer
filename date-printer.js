/*
  # Tiny Date Printer — A Literate-Style Single-File Program

  ## WHAT
  This program prints today's date in a clean YYYY-MM-DD format.

  ## WHY
  A simple date printer is a perfect demonstration of literate structure:
  - a clear goal,
  - a tiny implementation,
  - and enough room to show how narrative guides the code.

  ## HOW
  We break the problem into two conceptual parts:
  1. A helper that gathers and formats the current date.
  2. A main step that prints the result to the console.

  ----------------------------------------------------------------------
  ## Section: getFormattedDate
  ### WHAT
  Prepare a human-friendly string representing today's date.

  ### WHY
  Encapsulating formatting into its own function makes the main flow cleaner
  and aligns the structure with the mental model we described above.

  ### HOW
  Use JavaScript's Date object, extract year-month-day, and pad with zeros.
*/

function getFormattedDate() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/*
  ----------------------------------------------------------------------
  ## Section: main
  ### WHAT
  Print the formatted date to the console.

  ### WHY
  This keeps application flow obvious: gather → format → output.

  ### HOW
  Call the helper and log the result.
*/

console.log(getFormattedDate());
