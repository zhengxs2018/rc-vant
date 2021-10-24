import classNames from 'classnames'
import React, { useMemo } from 'react'
import type { FC, CSSProperties, ReactNode } from 'react'

import useBEM from '@/hooks/use-bem'
import { renderSlot, addUnit, isNumeric } from '@/utils'

// todo 支持原生的 esm 如果处理 css?
import './style/index.less'

export interface BadgeProps {
  /** 自定义 css 类名 */
  className?: string
  /** 自定义 css 样式 */
  style?: CSSProperties
  /**
   * 是否仅显示一个点
   *
   * @default false
   */
  dot?: boolean
  /**
   * 最大可显示数字
   */
  max?: string | number
  /** 颜色 */
  color?: string
  /**
   * 偏移位置
   */
  offset?: [string | number, string | number]
  /**
   * 是否显示 0 的内容
   *
   * @default false
   */
  showZero?: boolean
  /**
   * 自定义内容
   */
  content?: string | number | ReactNode | (() => ReactNode)
  // todo
  tag?: keyof HTMLElementTagNameMap
}

const Badge: FC<BadgeProps> = props => {
  const [bem] = useBEM('badge')

  const { tag = 'div', color, offset, children } = props

  let className: string | undefined
  if (props.className != null && !children) {
    className = props.className
  }

  const style = useMemo(() => {
    const style: CSSProperties = { background: color }

    if (offset) {
      const [x, y] = offset
      if (children) {
        style.top = addUnit(y)

        if (typeof x === 'number') {
          style.right = addUnit(-x)
        } else {
          style.right = x.startsWith('-') ? x.replace('-', '') : `-${x}`
        }
      } else {
        style.marginTop = addUnit(y)
        style.marginLeft = addUnit(x)
      }
    }

    return style
  }, [color, offset])

  const renderContent = (content: any) => {
    return (
      <div
        className={classNames(bem({ fixed: !!children }), className)}
        style={{ ...style, ...props.style }}
      >
        {content}
      </div>
    )
  }

  const renderBadge = () => {
    const { dot } = props
    if (dot) {
      return (
        <div
          className={classNames(bem({ dot, fixed: !!children }), className)}
          style={{ ...style, ...props.style }}
        />
      )
    }

    const content = renderSlot<ReactNode | string | null>(props, 'content')
    if (content == null) return null

    if (isNumeric(content)) {
      const { max, showZero } = props
      const num = Number(content)

      if (num === 0) {
        return showZero ? renderContent(0) : null
      }

      if (max != null && num > max) {
        return renderContent(`${max}+`)
      }

      return renderContent(num)
    }

    return renderContent(content)
  }

  if (children) {
    return React.createElement(
      tag,
      {
        className: classNames(props.className, bem('wrapper')),
        style: props.style,
      },
      children,
      renderBadge(),
    )
  }

  return renderBadge()
}

export default Badge
