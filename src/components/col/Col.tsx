import classNames from 'classnames'

import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import useBEM from '@/hooks/use-bem'

import { getGutters } from '../row'

export type ColProps = {
  className?: string
  style?: React.CSSProperties

  /**
   * 渲染的 HTML 标签
   *
   * @default "div"
   */
  as?: PropTypes.ReactComponentLike

  /**
   * @default 0
   */
  span?: string | number
  offset?: string | number
}

const Col: React.FC<ColProps> = props => {
  const [bem] = useBEM('col')
  const { as: Component = 'div', span = 0, offset, children } = props

  // todo 有限的支持
  const gutters = getGutters()

  const colStyle = useMemo(() => {
    const [left, right] = gutters

    return {
      paddingLeft: left ? `${left}px` : null,
      paddingRight: right ? `${right}px` : null,
    }
  }, [gutters])

  return (
    <Component
      className={classNames(
        props.className,
        bem({ [span]: span, [`offset-${offset}`]: offset }),
      )}
      style={{ ...colStyle, ...props.style }}
    >
      {children}
    </Component>
  )
}

Col.displayName = 'Col'

export default Col
