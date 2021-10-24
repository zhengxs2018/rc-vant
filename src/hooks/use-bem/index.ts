import { getConfig } from '@/components/config-provider'

import { BEM, createBEM } from '@/utils/bem'

const cache: Record<string, BEM> = {}

export default function useBEM(
  component: string,
  namespace?: string,
): [BEM, string] {
  const name = `${namespace ?? getConfig('prefixCls')}-${component}`

  let bem: BEM
  if (cache[name]) {
    bem = cache[name]
  } else {
    bem = createBEM(name)
    cache[name] = bem
  }

  return [bem, name]
}
