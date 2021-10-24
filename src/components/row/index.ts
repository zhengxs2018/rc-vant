// todo 支持原生的 esm 如果处理 css?
import './index.less'

export { useRowConfig, getGutters } from './context'
export type { RowConfig } from './context'

import Row from './Row'

export type { RowAlign, RowJustify, RowProps } from './Row'

export default Row
