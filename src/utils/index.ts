export { addUnit, getSizeStyle } from './format/unit'

export { isNumeric } from './validate/number'

export function renderSlot<R, P = any>(
  props: P,
  name: keyof P,
  fallback?: (props: P) => R,
): R | null {
  let slot: any = props[name]
  if (slot == null) {
    slot = fallback
  }

  if (typeof slot === 'function') return slot(props)
  return slot == null ? null : slot
}
