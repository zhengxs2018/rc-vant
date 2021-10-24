---
title: Use BEM
---

# useBEM

## 代码演示

### 默认

```tsx
import React from 'react'
import { ConfigProvider, useBEM } from '@zhengxs/rc-vant'

const CustomNamespace = () => {
  const [bem] = useBEM('button')

  return (
    <div style={{ fontSize: '12px' }}>
      <p>{bem()}</p>
      <p>{bem('text')}</p>
      <p>{bem('text', { disabled: true })}</p>
      <p>{bem(['text', { disabled: true }])}</p>
      <p>{bem({ disabled: true })}</p>
    </div>
  )
}

export default () => {
  const [bem] = useBEM('button')

  return (
    <div style={{ fontSize: '12px' }}>
      <p>{bem()}</p>
      <p>{bem('text')}</p>
      <p>{bem('text', { disabled: true })}</p>
      <p>{bem(['text', { disabled: true }])}</p>
      <p>{bem({ disabled: true })}</p>
      <hr />
      <ConfigProvider prefixCls="van">
        <CustomNamespace />
      </ConfigProvider>
    </div>
  )
}
```
