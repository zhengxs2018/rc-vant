import './components/style/css-variables.less'

import ConfigProvider from './components/config-provider'

import Badge from './components/badge'
import Button from './components/button'
import Icon from './components/icon'
import Loading from './components/loading'

import Row from './components/row'
import Col from './components/col'

import useBEM from './hooks/use-bem'

export {
  // Components
  ConfigProvider,
  Button,
  Icon,
  Row,
  Col,
  Badge,
  Loading,
  // Hooks
  useBEM,
}

export * from './utils'
