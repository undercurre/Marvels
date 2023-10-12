# Button 按钮

<MButton type="rainbow" style="margin-right: 10px">rainbow</MButton>

<MButton type="rainbow" style="margin-right: 10px" :disabled="true">rainbow</MButton>

<MButton type="rainbow-shadow" style="margin-right: 10px">rainbow-shadow</MButton>

<MButton type="rainbow-shadow" style="margin-right: 10px" :disabled="true">rainbow-shadow</MButton>

<MButton type="flow" style="margin-right: 10px">flow</MButton>

<MButton type="flow" style="margin-right: 10px" :disabled="true">flow</MButton>

# API

## Props

| 参数     | 说明         | 类型    | 可选值                          | 默认值  |
| -------- | ------------ | ------- | ------------------------------- | ------- |
| type     | 按钮类型     | string  | rainbow / rainbow-shadow / flow | default |
| disabled | 是否禁用按钮 | boolean | -                               | false   |

## Slots

| 名称     | 说明               |
| -------- | ------------------ |
| 默认插槽 | 按钮显示的文本内容 |

## Events

| 事件名称 | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| click    | 点击按钮时触发 | -        |
