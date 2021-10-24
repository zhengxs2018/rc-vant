# Badge 徽标

在右上角展示徽标数字或小红点。

## 演示

```tsx
import React from 'react'
import { Badge } from '@zhengxs/rc-vant'

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
        <Badge content={5}>
          <div style={{ width: '40px', height: '40px', background: '#efefef' }} />
        </Badge>
        <Badge content={'10'}>
          <div style={{ width: '40px', height: '40px', background: '#efefef' }} />
        </Badge>
        <Badge content="Hot">
          <div style={{ width: '40px', height: '40px', background: '#efefef' }} />
        </Badge>
        <Badge dot>
          <div style={{ width: '40px', height: '40px', background: '#efefef' }} />
        </Badge>
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
        <Badge content={50} max={99}>
          <div style={{ width: '40px', height: '40px', background: '#efefef' }} />
        </Badge>
        <Badge content={200} max={99}>
          <div style={{ width: '40px', height: '40px', background: '#efefef' }} />
        </Badge>
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
        <Badge content={50} color="#1989fa">
          <div style={{ width: '40px', height: '40px', background: '#efefef' }} />
        </Badge>
        <Badge dot color="#1989fa">
          <div style={{ width: '40px', height: '40px', background: '#efefef' }} />
        </Badge>
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
        <Badge content={<button>测试</button>}>
          <div style={{ width: '40px', height: '40px', background: '#efefef' }} />
        </Badge>
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
        <Badge content={20}></Badge>
        <Badge content={200} max={99}></Badge>
      </div>
    </>
  )
}
```

<API></API>

## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                        | 默认值                                                  | 描述 |
| --------------------------- | ------------------------------------------------------- | ---- |
| --rc-badge-size             | _16px_                                                  | -    |
| --rc-badge-color            | _var(--rc-white)_                                       | -    |
| --rc-badge-padding          | _0 3px_                                                 | -    |
| --rc-badge-font-size        | _var(--rc-font-size-sm)_                                | -    |
| --rc-badge-font-weight      | _var(--rc-font-weight-bold)_                            | -    |
| --rc-badge-border-width     | _var(--rc-border-width-base)_                           | -    |
| --rc-badge-background-color | _var(--rc-danger-color)_                                | -    |
| --rc-badge-dot-color        | _var(--rc-danger-color)_                                | -    |
| --rc-badge-dot-size         | _8px_                                                   | -    |
| --rc-badge-font-family      | _-apple-system-font, Helvetica Neue, Arial, sans-serif_ | -    |
