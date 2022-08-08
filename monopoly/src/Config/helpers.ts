export function isHorizontalSelection(num: number): boolean {
  if (num < 11) return true;
  if (num > 19 && num < 31) return true;
  return false;
}
