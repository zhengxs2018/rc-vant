import { BaseConfig, Config, useConfig, useConfigValue, getDefaultConfig, setDefaultConfig } from './context'

import ConfigProvider, { ConfigProviderProps } from './config-provider'

export {
  getDefaultConfig,
  setDefaultConfig,
  useConfig,
  useConfigValue,
}

export type {
  BaseConfig,
  Config,
  ConfigProviderProps
}

export default ConfigProvider
