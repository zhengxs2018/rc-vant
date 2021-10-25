import React, { useContext } from 'react'

import { Locale } from '../../locales/base'
import zhCN from '../../locales/zh-CN'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BaseConfig {
  // 给外部拓展使用
}

export interface Config extends BaseConfig {
  /**
   * CSS 类前缀
   *
   * @default "rc"
   */
  prefixCls: string
  /**
   * 图标前缀
   *
   * @default "van-icon"
   */
  iconPrefix: string
  /**
   * 本地语言配置
   */
  locale: Locale
}

const defaultConfigRef: Record<'current', Config> = {
  current: {
    prefixCls: 'rc',
    iconPrefix: 'van-icon',
    locale: zhCN,
  },
}

export function setDefaultConfig(config: Config): void {
  defaultConfigRef.current = config
}

export function getDefaultConfig(): Config {
  return defaultConfigRef.current
}

export const ConfigContext = React.createContext<Config>(getDefaultConfig())

export function useConfig(): Config {
  return useContext(ConfigContext)
}

/**
 * 根据名称获取配置项
 *
 * @param name 配置名称
 * @returns 配置
 */
export function useConfigValue<K extends keyof Config>(name: K): Config[K] {
  return useConfig()[name]
}
