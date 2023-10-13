# Button 按钮

<div style="display: flex; justify-content: space-around; margin: 40px;">

<MButton type="rainbow">rainbow</MButton>

<MButton type="rainbow-shadow">rainbow-shadow</MButton>

<MButton type="flow">flow</MButton>

</div>

# API

## Props

| 参数     | 说明         | 类型    | 可选值                          | 默认值  |
| -------- | ------------ | ------- | ------------------------------- | ------- |
| type     | 按钮类型     | string  | rainbow / rainbow-shadow / flow | default |
| disabled | 是否禁用按钮 | boolean | true / false                    | false   |

## Slots

| 名称     | 说明               |
| -------- | ------------------ |
| 默认插槽 | 按钮显示的文本内容 |

## Events

| 事件名称 | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| click    | 点击按钮时触发 | -        |
