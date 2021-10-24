import { isNumeric } from '../validate/number'

export function addUnit(value?: string | number): string | undefined {
  if (value == null) return undefined

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return isNumeric(value) ? `${value!}px` : (value as string)
}

export function getSizeStyle(
  originSize?: string | number,
): Record<'width' | 'height', string> | null {
  const size = addUnit(originSize)
  if (size == null) return null
  return { width: size, height: size }
}
