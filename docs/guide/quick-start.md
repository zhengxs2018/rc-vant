# 快速上手

## 安装

```bash
$ npm install --save @zhengxs/rc-vant
# or
$ yarn add @zhengxs/rc-vant
```

<Alert type="warning">
在 beta 阶段我们有可能会在后续的新版本中发布 break change，所以强烈建议使用 lockfile 锁定版本或手动锁定版本
</Alert>

## 引入

```js
import ReactDOM from 'react-dom'

import { Button } from '@zhengxs/rc-vant'
import '@zhengxs/rc-vant/lib/index.css'

function App() {
  return <Button>Default Button</Button>
}

ReactDOM.render(<App />, mountNode)
```
zz
