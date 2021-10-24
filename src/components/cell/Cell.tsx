import classNames from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'

import useBEM from '@/hooks/use-bem'
import { renderSlot } from '@/utils'

// Components
import Icon from '../icon'

export type CellArrowDirection = 'up' | 'down' | 'left' | 'right'

export type CellProps = {
  className?: string
  style?: React.CSSProperties

  size?: 'large'

  icon?: PropTypes.ReactComponentLike
  iconPrefix?: string

  rightIcon?: PropTypes.ReactComponentLike

  title?: PropTypes.ReactComponentLike
  value?: PropTypes.ReactComponentLike
  label?: PropTypes.ReactComponentLike
  extra?: PropTypes.ReactComponentLike
  center?: boolean
  isLink?: boolean
  /**
   * @default true
   */
  border?: boolean
  required?: boolean
  valueClass?: string
  labelClass?: string
  titleClass?: string
  titleStyle?: React.CSSProperties
  arrowDirection?: CellArrowDirection
  clickable?: boolean
}

const Cell: React.FC<CellProps> = props => {
  const [bem] = useBEM('cell')

  const { size, center, border, isLink, required } = props
  const clickable = props.clickable ?? isLink

  const renderLabel = () => {
    const label = renderSlot(props, 'label')

    if (label) {
      return (
        <div className={classNames(bem('label'), props.labelClass)}>
          {label as string}
        </div>
      )
    }
  }

  const renderTitle = () => {
    const title = renderSlot(props, 'title')

    if (title) {
      return (
        <div
          className={classNames(bem('title'), props.titleClass)}
          style={props.titleStyle}
        >
          <span>{title as string}</span>
          {renderLabel()}
        </div>
      )
    }
  }


  const renderValue = () => {
    // default slot is deprecated
    // should be removed in next major version
    const slot = props.children
    const hasValue = props.children || props.value != null

    if (hasValue) {
      const hasTitle = props.title != null

      return (
        <div className={classNames(bem('value', { alone: !hasTitle }), props.valueClass)}>
          {slot ? slot : <span>{props.value}</span>}
        </div>
      );
    }
  };


  const renderLeftIcon = () => {
    const LeftIcon = props.icon
    if (typeof LeftIcon === 'function') {
      return <LeftIcon />
    }

    if (typeof LeftIcon === 'string') {
      return (
        <Icon
          name={props.icon as string}
          className={bem('left-icon')}
          classPrefix={props.iconPrefix}
        />
      )
    }

    return props.icon
  }

  const renderRightIcon = () => {
    const { rightIcon } = props
    if (rightIcon) {
      return renderSlot(props, 'rightIcon')
    }

    if (isLink) {
      const name = props.arrowDirection
        ? `arrow-${props.arrowDirection}`
        : 'arrow'
      return <Icon name={name} className={bem('right-icon')} />
    }
  }

  return (
    <div
      className={classNames(
        props.className,
        bem({
          center,
          required,
          clickable,
          borderless: !border,
          [size as string]: !!size,
        }),
      )}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      {renderLeftIcon()}
      {renderTitle()}
      {renderValue()}
      {renderRightIcon()}
      {props.extra}
    </div>
  )
}

export default Cell
