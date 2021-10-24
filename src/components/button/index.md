# Button 按钮

按钮用于触发一个操作，如提交表单。

## 演示

```tsx
import React from 'react'
import { Button } from '@zhengxs/rc-vant'

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
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="default">默认按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
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
        <Button plain type="primary">
          朴素按钮
        </Button>
        <Button plain type="primary">
          朴素按钮
        </Button>
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
        <Button plain hairline type="primary">
          细边框按钮
        </Button>
        <Button plain hairline type="primary">
          细边框按钮
        </Button>
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
        <Button disabled type="primary">
          禁用状态
        </Button>
        <Button disabled type="primary">
          禁用状态
        </Button>
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
        <Button loading type="primary" />
        <Button loading type="primary" loadingType="spinner" />
        <Button loading type="primary" loadingText="加载中..." />
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
        <Button square type="primary">
          方形按钮
        </Button>
        <Button round type="primary">
          圆形按钮
        </Button>
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
        <Button icon="plus" type="primary" />
        <Button icon="plus" type="primary">
          按钮
        </Button>
        <Button icon="https://img.yzcdn.cn/vant/user-active.png" type="primary">
          按钮
        </Button>
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
        <Button type="primary" size="large">
          大号按钮
        </Button>
        <Button type="primary" size="normal">
          普通按钮
        </Button>
        <Button type="primary" size="small">
          小型按钮
        </Button>
        <Button type="primary" size="mini">
          迷你按钮
        </Button>
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
        <Button type="primary" block>
          块级元素
        </Button>
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
        <Button color="#7232dd">单色按钮</Button>
        <Button color="#7232dd" plain>
          单色按钮
        </Button>
        <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
          渐变色按钮
        </Button>
      </div>
    </>
  )
}
```

<API></API>

### 类型定义

组件导出以下类型定义：

```ts
import type {
  ButtonType,
  ButtonSize,
  ButtonNativeType,
  ButtonIconPosition,
} from '@zhengxs/rc-vant'
```

## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                                 | 默认值                        | 描述 |
| ------------------------------------ | ----------------------------- | ---- |
| --rc-button-mini-height              | _24px_                        | -    |
| --rc-button-mini-padding             | _0 var(--rc-padding-base)_    | -    |
| --rc-button-mini-font-size           | _var(--rc-font-size-xs)_      | -    |
| --rc-button-small-height             | _32px_                        | -    |
| --rc-button-small-padding            | _0 var(--rc-padding-xs)_      | -    |
| --rc-button-small-font-size          | _var(--rc-font-size-sm)_      | -    |
| --rc-button-normal-font-size         | _var(--rc-font-size-md)_      | -    |
| --rc-button-normal-padding           | _0 15px_                      | -    |
| --rc-button-large-height             | _50px_                        | -    |
| --rc-button-default-height           | _44px_                        | -    |
| --rc-button-default-line-height      | _1.2_                         | -    |
| --rc-button-default-font-size        | _var(--rc-font-size-lg)_      | -    |
| --rc-button-default-color            | _var(--rc-text-color)_        | -    |
| --rc-button-default-background-color | _var(--rc-white)_             | -    |
| --rc-button-default-border-color     | _var(--rc-border-color)_      | -    |
| --rc-button-primary-color            | _var(--rc-white)_             | -    |
| --rc-button-primary-background-color | _var(--rc-primary-color)_     | -    |
| --rc-button-primary-border-color     | _var(--rc-primary-color)_     | -    |
| --rc-button-success-color            | _var(--rc-white)_             | -    |
| --rc-button-success-background-color | _var(--rc-success-color)_     | -    |
| --rc-button-success-border-color     | _var(--rc-success-color)_     | -    |
| --rc-button-danger-color             | _var(--rc-white)_             | -    |
| --rc-button-danger-background-color  | _var(--rc-danger-color)_      | -    |
| --rc-button-danger-border-color      | _var(--rc-danger-color)_      | -    |
| --rc-button-warning-color            | _var(--rc-white)_             | -    |
| --rc-button-warning-background-color | _var(--rc-orange)_            | -    |
| --rc-button-warning-border-color     | _var(--rc-orange)_            | -    |
| --rc-button-border-width             | _var(--rc-border-width-base)_ | -    |
| --rc-button-border-radius            | _var(--rc-border-radius-sm)_  | -    |
| --rc-button-round-border-radius      | _var(--rc-border-radius-max)_ | -    |
| --rc-button-plain-background-color   | _var(--rc-white)_             | -    |
| --rc-button-disabled-opacity         | _var(--rc-disabled-opacity)_  | -    |
| --rc-button-icon-size                | _1.2em_                       | -    |
| --rc-button-loading-icon-size        | _20px_                        | -    |

```

```
