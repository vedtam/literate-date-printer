/*
  # Child Date Formatter — Pedagogical Helper Module

  This module translates a raw JavaScript Date into a sentence that is intended
  to be understandable and friendly for ~5-year-old children.

  It sits between low-level date logic and the high-level narrative in
  'Chapter 1'. Where Chapter 1 talks about goals and behavior, this module
  makes concrete choices about phrasing.

  ## WHAT

  Export a single function:

    formatDateForChild(date, options?) -> string

  which returns a sentence like:

    'Today is Sunday. The number of the day is 30.'

  or:

    '📅 Today is Sunday! We are in the month of November, and the number
     of the day is 30.'

  ## WHY

  - Children need words, not numeric codes.
  - Educators may want to compare different sentence styles (simple vs playful).
  - Keeping all child-facing wording here allows us to experiment without
    touching the main chapter.

  ## HOW (implementation outline)

  1. Interpret the incoming Date: get weekday, month name, and day number.
  2. Choose a sentence style based on simple options (e.g. 'simple' or 'playful').
  3. Construct and return the final string.

  The logic below is intentionally simple but can be extended in future
  iterations of the project.
*/

const WEEKDAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// options.mode can be 'simple' or 'playful'. Default is 'playful'.
export function formatDateForChild(date, options = {}) {
  const mode = options.mode || 'playful';

  const weekdayName = WEEKDAY_NAMES[date.getDay()];
  const monthName = MONTH_NAMES[date.getMonth()];
  const dayNumber = date.getDate();

  if (mode === 'simple') {
    return 'Today is ' + weekdayName + '. The number of the day is ' + dayNumber + '.';
  }

  // Default: playful style with a bit of emoji flavor.
  return '📅 Today is ' + weekdayName + '! We are in the month of ' + monthName + ', and the number of the day is ' + dayNumber + '.';
}
