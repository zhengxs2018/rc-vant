import classNames from 'classnames'
import React, { useMemo } from 'react'
import type {
  FC,
  CSSProperties,
  ButtonHTMLAttributes,
  MouseEvent,
  MouseEventHandler,
} from 'react'

import useBEM from '@/hooks/use-bem'

import { BORDER_SURROUND } from '@/utils/constant'

// Components
import Icon from '../icon'
import Loading, { LoadingType } from '../loading'

// todo 支持原生的 esm 如果处理 css?
import './style/index.less'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'

export type ButtonNativeType = NonNullable<
  ButtonHTMLAttributes<HTMLButtonElement>['type']
>

export type ButtonIconPosition = 'left' | 'right'

export interface ButtonProps {
  /** 自定义 css 类名 */
  className?: string
  /** 自定义 css 样式 */
  style?: CSSProperties

  tag: keyof HTMLElementTagNameMap
  text?: string
  icon?: string
  type?: ButtonType
  size?: ButtonSize
  color?: string
  block?: boolean
  plain?: boolean
  round?: boolean
  square?: boolean
  loading?: boolean
  hairline?: boolean
  disabled?: boolean
  iconPrefix?: string
  nativeType?: ButtonNativeType
  loadingSize?: string | number
  loadingText?: string
  loadingType?: LoadingType
  iconPosition?: ButtonIconPosition
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = props => {
  const [bem] = useBEM('button')

  const {
    tag = 'button',
    type = 'default',
    size = 'normal',
    nativeType = 'button',
    plain,
    color,
    block,
    round,
    square,
    loading,
    hairline,
    disabled,
    children,
    onClick,
  } = props

  const classes = classNames(
    bem([
      type,
      size,
      {
        plain,
        block,
        round,
        square,
        loading,
        disabled,
        hairline,
      },
    ]),
    { [BORDER_SURROUND]: hairline },
    props.className,
  )

  const buttonStyle = useMemo(() => {
    if (color) {
      const style: CSSProperties = {
        color: plain ? color : 'white',
      }

      if (!plain) {
        // Use background instead of backgroundColor to make linear-gradient work
        style.background = color
      }

      // hide border when color is linear-gradient
      if (color.includes('gradient')) {
        style.border = 0
      } else {
        style.borderColor = color
      }

      return { ...style, ...props.style }
    }
  }, [color, plain, props.style])

  const renderLoadingIcon = () => {
    // todo
    // if (slots.loading) {
    //   return slots.loading();
    // }

    return (
      <Loading
        className={bem('loading')}
        size={props.loadingSize}
        type={props.loadingType}
      />
    )
  }

  const renderIcon = () => {
    if (loading) return renderLoadingIcon()

    // todo
    // if (slots.icon) {
    //   return <div class={bem('icon')}>{slots.icon()}</div>;
    // }

    if (props.icon) {
      return (
        <Icon
          name={props.icon}
          className={bem('icon')}
          classPrefix={props.iconPrefix}
        />
      )
    }
  }

  const renderText = () => {
    let text
    if (loading) {
      text = props.loadingText
    } else {
      text = children ? children : props.text
    }

    if (text) {
      return <span className={bem('text')}>{text}</span>
    }
  }

  const renderContent = () => {
    const isRightIcon = props.iconPosition === 'right'
    return (
      <div className={bem('content')}>
        {!isRightIcon && renderIcon()}
        {renderText()}
        {isRightIcon && renderIcon()}
      </div>
    )
  }

  return React.createElement(
    tag,
    {
      className: classes,
      type: nativeType,
      disabled: disabled,
      style: buttonStyle,
      onClick(event: MouseEvent<HTMLButtonElement>) {
        if (props.loading) {
          event.preventDefault()
        } else if (!props.disabled && onClick) {
          // pass
          onClick(event)
        }
      },
    },
    renderContent(),
  )
}

export default Button
