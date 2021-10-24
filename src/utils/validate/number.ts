export function isNumeric(val: unknown): boolean {
  if (typeof val === 'string') return /^\d+(\.\d+)?$/.test(val)
  return typeof val === 'number' && !isNaN(val)
}
