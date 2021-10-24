---
title: Loading 加载
nav:
  path: /components
---

# Loading 加载

加载图标，用于表示加载中的过渡状态。

## 演示

```tsx
import React from 'react'
import { Loading } from '@zhengxs/rc-vant'

export default () => {
  return (
    <div style={{ fontSize: '12px' }}>
      <div>加载类型</div>
      <Loading />
      <Loading type="spinner" />
      <br />
      <div>通过 size 属性设置加载图标的大小，默认单位为 px</div>
      <Loading size="24" />
      <Loading type="spinner" size="24" />
      <br />
      <div>可以在图标的右侧插入加载文案。</div>
      <Loading size="24">加载中...</Loading>
      <br />
      <div>设置 vertical 属性后，图标和文案会垂直排列。</div>
      <Loading size="24px" vertical>
        加载中...
      </Loading>
      <br />
      <div>通过 color 属性设置加载图标的颜色。</div>
      <Loading color="#0094ff" />
      <Loading type="spinner" color="#0094ff" />
      <br />
      <div>只修改文案颜色</div>
      <Loading textColor="#0094ff">加载中...</Loading>
    </div>
  )
}
```

<API></API>

## 类型定义

组件导出以下类型定义：

```ts
import type { LoadingType, LoadingProps } from '@zhengxs/rc-vant'
```

## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                                    | 默认值                   | 描述 |
| --------------------------------------- | ------------------------ | ---- |
| --rc-loading-text-color                 | _var(--rc-gray-6)_       | -    |
| --rc-loading-text-font-size             | _var(--rc-font-size-md)_ | -    |
| --rc-loading-spinner-color              | _var(--rc-gray-5)_       | -    |
| --rc-loading-spinner-size               | _30px_                   | -    |
| --rc-loading-spinner-animation-duration | _0.8s_                   | -    |
