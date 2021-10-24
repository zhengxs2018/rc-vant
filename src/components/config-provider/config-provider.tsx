import React, { FC, useContext } from 'react'

import { Locale } from '../../locales/base'
import zhCN from '../../locales/zh-CN'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BaseConfig {
  // 给外部拓展使用
}

export interface Config extends BaseConfig {
  prefixCls: string
  iconPrefix: string
  locale: Locale
}

export const defaultConfigRef: Record<'current', Config> = {
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

const ConfigContext = React.createContext<Config>(getDefaultConfig())

export type ConfigProviderProps = Partial<Config>

export function useConfig(): Config {
  return useContext(ConfigContext)
}

export function getConfig<K extends keyof Config>(key: K): Config[K] {
  return useConfig()[key]
}

export const ConfigProvider: FC<ConfigProviderProps> = props => {
  const { children, ...userConfig } = props
  const parentConfig = useConfig()

  return (
    <ConfigContext.Provider
      value={{
        ...parentConfig,
        ...userConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}
