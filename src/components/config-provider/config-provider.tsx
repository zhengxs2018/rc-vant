import React from 'react'

import { useConfig, Config, ConfigContext } from './context'

export type ConfigProviderProps = Partial<Config>

const ConfigProvider: React.FC<ConfigProviderProps> = props => {
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

export default ConfigProvider
