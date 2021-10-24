import './components/style/css-variables.less'

import ConfigProvider from './components/config-provider'

import Badge from './components/badge'
import Button from './components/button'
import Icon from './components/icon'
import Image from './components/image'
import Loading from './components/loading'

import Row from './components/row'
import Col from './components/col'

import Cell from './components/cell'

import useBEM from './hooks/use-bem'

export {
  // Components
  ConfigProvider,
  Button,
  Icon,
  Row,
  Col,
  Cell,
  Badge,
  Loading,
  // Hooks
  useBEM,
}

export * from './utils'
