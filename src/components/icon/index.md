# Icon 图标

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 `icon` 属性引用。

## 演示

```tsx
import React from 'react'
import { Icon } from '@zhengxs/rc-vant'

export default () => {
  return (
    <>
      <div
        style={{
          marginBottom: '16px',
          padding: '20px',
          fontSize: '12px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Icon name="chat-o"></Icon>
        <Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
      </div>
      <div
        style={{
          marginBottom: '16px',
          padding: '20px',
          fontSize: '12px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Icon name="chat-o" dot></Icon>
        <Icon name="chat-o" badge="9"></Icon>
        <Icon name="chat-o" badge="99+"></Icon>
      </div>
      <div
        style={{
          marginBottom: '16px',
          padding: '20px',
          fontSize: '12px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Icon name="cart-o" color="#1989fa" />
        <Icon name="fire-o" color="#ee0a24" />
      </div>
      <div
        style={{
          marginBottom: '16px',
          padding: '20px',
          fontSize: '12px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Icon name="cart-o" size="40" />
        <Icon name="fire-o" size="3rem" />
      </div>
    </>
  )
}
```

<API></API>
