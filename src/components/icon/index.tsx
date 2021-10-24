import classNames from 'classnames'
import React, { FC, CSSProperties } from 'react'

import { getConfig } from '../config-provider'
import Badge from '../badge'

import useBEM from '@/hooks/use-bem'
import { addUnit } from '@/utils'

// todo 支持原生的 esm 如果处理 css?
import './style/index.less'

const isImage = (name?: string) => name?.includes('/')

export interface IconProps {
  /** 自定义 css 类名 */
  className?: string
  /** 自定义 css 样式 */
  style?: CSSProperties
  badge?: any
  dot?: boolean
  name?: string
  size?: string | number
  color?: string
  classPrefix?: string
  tag?: keyof HTMLElementTagNameMap
}

const Icon: FC<IconProps> = props => {
  const [bem] = useBEM('icon')
  const {
    name,
    size,
    color,
    children,
    classPrefix = getConfig('iconPrefix'),
  } = props

  const isImageIcon = isImage(name)

  return (
    <Badge
      tag={props.tag}
      dot={props.dot}
      content={props.badge}
      className={classNames(
        classPrefix,
        isImageIcon ? '' : `${classPrefix}-${name}`,
      )}
      style={{
        color,
        fontSize: addUnit(size),
      }}
    >
      {children}
      {isImageIcon && <img className={bem('image')} src={name} />}
    </Badge>
  )
}

export default Icon
