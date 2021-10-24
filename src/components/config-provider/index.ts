import { ConfigProvider } from './config-provider'

export type { BaseConfig, Config, ConfigProviderProps } from './config-provider'

export {
  useConfig,
  getConfig,
  setDefaultConfig,
  getDefaultConfig,
} from './config-provider'

export default ConfigProvider
