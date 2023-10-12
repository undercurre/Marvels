# Button 按钮

<Button type="rainbow" style="margin-right: 10px">rainbow</Button>

<Button type="rainbow" style="margin-right: 10px" :disabled="true">rainbow</Button>

<Button type="rainbow-shadow" style="margin-right: 10px">rainbow-shadow</Button>

<Button type="rainbow-shadow" style="margin-right: 10px" :disabled="true">rainbow-shadow</Button>

<Button type="flow" style="margin-right: 10px">flow</Button>

<Button type="flow" style="margin-right: 10px" :disabled="true">flow</Button>

<script setup>

</script>

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
