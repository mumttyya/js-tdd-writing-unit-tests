export function pointsForWord(word) {
  if (typeof word !== "string") return 0; // 🛡 Prevents crash on non-string input

  let points = 0;
  for (const char of word) {
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }
  return points;
}
