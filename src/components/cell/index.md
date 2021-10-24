# Cell 单元格

单元格为列表中的单个展示项。

## 演示

```tsx
import React from 'react'
import { Cell } from '@zhengxs/rc-vant'

export default () => {
  return (
    <div style={{ fontSize: '12px' }}>
      <Cell title="单元格" value="内容" />
      <Cell title="单元格" value="内容" label="描述信息" />

      <Cell title="单元格" value="内容" size="large" />
      <Cell title="单元格" value="内容" size="large" label="描述信息" />

      <Cell title="单元格" icon="location-o" />

      <Cell value="内容" />

      <Cell title="单元格" is-link />
      <Cell title="单元格" is-link value="内容" />
      <Cell title="单元格" is-link arrow-direction="down" value="内容" />

      <Cell-group title="分组1">
        <Cell title="单元格" value="内容" />
      </Cell-group>
      <Cell-group title="分组2">
        <Cell title="单元格" value="内容" />
      </Cell-group>
      <Cell-group title="分组1">
        <Cell title="单元格" value="内容" />
      </Cell-group>
      <Cell-group title="分组2">
        <Cell title="单元格" value="内容" />
      </Cell-group>
    </div>
  )
}
```

## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式

| 名称                                | 默认值                                                                                | 描述 |
| ----------------------------------- | ------------------------------------------------------------------------------------- | ---- |
| --rc-cell-font-size                 | _var(--rc-font-size-md)_                                                              | -    |
| --rc-cell-line-height               | _24px_                                                                                | -    |
| --rc-cell-vertical-padding          | _10px_                                                                                | -    |
| --rc-cell-horizontal-padding        | _var(--rc-padding-md)_                                                                | -    |
| --rc-cell-text-color                | _var(--rc-text-color)_                                                                | -    |
| --rc-cell-background-color          | _var(--rc-white)_                                                                     | -    |
| --rc-cell-border-color              | _var(--rc-border-color)_                                                              | -    |
| --rc-cell-active-color              | _var(--rc-active-color)_                                                              | -    |
| --rc-cell-required-color            | _var(--rc-danger-color)_                                                              | -    |
| --rc-cell-label-color               | _var(--rc-gray-6)_                                                                    | -    |
| --rc-cell-label-font-size           | _var(--rc-font-size-sm)_                                                              | -    |
| --rc-cell-label-line-height         | _var(--rc-line-height-sm)_                                                            | -    |
| --rc-cell-label-margin-top          | _var(--rc-padding-base)_                                                              | -    |
| --rc-cell-value-color               | _var(--rc-gray-6)_                                                                    | -    |
| --rc-cell-icon-size                 | _16px_                                                                                | -    |
| --rc-cell-right-icon-color          | _var(--rc-gray-6)_                                                                    | -    |
| --rc-cell-large-vertical-padding    | _var(--rc-padding-sm)_                                                                | -    |
| --rc-cell-large-title-font-size     | _var(--rc-font-size-lg)_                                                              | -    |
| --rc-cell-large-label-font-size     | _var(--rc-font-size-md)_                                                              | -    |
| --rc-cell-group-background-color    | _var(--rc-white)_                                                                     | -    |
| --rc-cell-group-title-color         | _var(--rc-gray-6)_                                                                    | -    |
| --rc-cell-group-title-padding       | _var(--rc-padding-md) var(--rc-padding-md) var(--rc-padding-xs)_                      | -    |
| --rc-cell-group-title-font-size     | _var(--rc-font-size-md)_                                                              | -    |
| --rc-cell-group-title-line-height   | _16px_                                                                                | -    |
| --rc-cell-group-inset-padding       | _0 var(--rc-padding-md)_                                                              | -    |
| --rc-cell-group-inset-border-radius | _var(--rc-border-radius-lg)_                                                          | -    |
| --rc-cell-group-inset-title-padding | _var(--rc-padding-md) var(--rc-padding-md) var(--rc-padding-xs) var(--rc-padding-xl)_ | -    |
