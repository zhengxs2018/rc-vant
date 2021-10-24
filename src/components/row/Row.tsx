import React, { useMemo } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import useBEM from '@/hooks/use-bem'

import { RowContext } from './context'

export type RowAlign = 'top' | 'center' | 'bottom'

export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'

export type RowProps = {
  className?: string
  style?: React.CSSProperties

  /**
   * 渲染的 HTML 标签
   *
   * @default "div"
   */
  as?: PropTypes.ReactComponentLike

  /**
   * @default true
   */
  wrap?: boolean
  align?: RowAlign
  gutter?: number | [number, number]
  justify?: RowJustify
}

const Row: React.FC<RowProps> = props => {
  const [bem] = useBEM('row')
  const {
    as: Component = 'div',
    wrap = true,
    gutter = 0,
    align,
    justify,
    children,
  } = props

  // todo 有限的支持
  const gutters: [number, number] = useMemo(() => {
    const results: [number, number] = [0, 0]
    const normalizedGutter = Array.isArray(gutter)
      ? gutter
      : [gutter / 2, gutter / 2]

    normalizedGutter.forEach((g, index) => {
      results[index] = g || 0
    })

    return results
  }, [gutter])

  const rowStyle = useMemo(() => {
    const style: React.CSSProperties = {}
    const rowGutter = gutters[0] > 0 ? gutters[0] / -1 : undefined

    if (rowGutter) {
      style.marginLeft = rowGutter
      style.marginRight = rowGutter
    }

    return style
  }, [gutters])

  return (
    <RowContext.Provider value={{ gutters }}>
      <Component
        className={classNames(
          props.className,
          bem({
            [`align-${align}`]: align,
            [`justify-${justify}`]: justify,
            nowrap: !wrap,
          }),
        )}
        style={{ ...rowStyle, ...props.style }}
      >
        {children}
      </Component>
    </RowContext.Provider>
  )
}

export default Row
