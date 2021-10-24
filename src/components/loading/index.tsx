import classnames from 'classnames'
import React, { FC, CSSProperties, useMemo } from 'react'

import useBEM from '../../hooks/use-bem'
import { addUnit, getSizeStyle } from '../../utils'

// todo 支持原生的 esm 如果处理 css?
import './style/index.less'

/**
 * Loading 组件类型
 */
export type LoadingType = 'circular' | 'spinner'

export interface LoadingProps {
  /** 自定义 css 类名 */
  className?: string
  /** 自定义 css 样式 */
  style?: CSSProperties
  /**
   * 类型
   *
   * @default 'circular'
   */
  type?: LoadingType
  /**
   * 加载图标大小，默认单位为 px
   *
   * @default '30px'
   */
  size?: string | number
  /**
   * 颜色
   *
   * @default '#c8c9cc'
   */
  color?: string
  /** 是否垂直排列图标和文字内容 */
  vertical?: boolean
  /** 文字大小，默认单位为 px	 */
  textSize?: string | number
  /**
   * 文字颜色
   *
   * @default '#c8c9cc'
   */
  textColor?: string
}

const Loading: FC<LoadingProps> = props => {
  const [bem] = useBEM('loading')
  const { type = 'circular', color, size, vertical, children } = props

  const spinnerStyle = useMemo(
    () => ({ color, ...getSizeStyle(size) }),
    [color, size],
  )

  const renderIcon = () => {
    if (type === 'circular') {
      return (
        <svg className={classnames(bem('circular'))} viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none" />
        </svg>
      )
    }

    return (
      <>
        {Array.from({ length: 12 }).map((_, index) => (
          <i
            key={index}
            className={classnames(bem('line', String(index + 1)))}
          />
        ))}
      </>
    )
  }

  const renderText = () => {
    const { textSize, textColor } = props

    return (
      <span
        className={bem('text')}
        style={{
          fontSize: addUnit(textSize),
          color: textColor ?? color,
        }}
      >
        {children}
      </span>
    )
  }

  return (
    <div className={classnames(props['className'], bem([type, { vertical }]))}>
      <span className={classnames(bem('spinner', type))} style={spinnerStyle}>
        {renderIcon()}
      </span>
      {children && renderText()}
    </div>
  )
}

export default Loading
