---
title: Layout 布局
---

# Layout 布局

Layout 提供了 `Row` 和 `Col` 两个组件来进行行列布局。

## 演示

```tsx
import React from 'react'
import { Row, Col } from '@zhengxs/rc-vant'

export default () => {
  return (
    <>
      <Row>
        <Col
          span="8"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 8
        </Col>
        <Col
          span="8"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 8
        </Col>
        <Col
          span="8"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 8
        </Col>
      </Row>

      <Row>
        <Col
          span="4"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 4
        </Col>
        <Col
          span="10"
          offset="4"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 10
        </Col>
      </Row>

      <Row>
        <Col
          span="12"
          offset="12"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          offset: 12, span: 12
        </Col>
      </Row>

      <Row gutter={20}>
        <Col
          span="8"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 8
        </Col>
        <Col
          span="8"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 8
        </Col>
        <Col
          span="8"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 8
        </Col>
      </Row>

      <Row justify="center">
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
      </Row>

      <Row justify="end">
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
      </Row>

      <Row justify="space-between">
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
      </Row>

      <Row justify="space-around">
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
        <Col
          span="6"
          style={{
            marginBottom: '10px',
            fontSize: '13px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#39a9ed',
            backgroundClip: 'content-box',
          }}
        >
          span: 6
        </Col>
      </Row>
    </>
  )
}
```

<API src="../row/index.ts"></API>
<API src="../col/index.tsx"></API>
