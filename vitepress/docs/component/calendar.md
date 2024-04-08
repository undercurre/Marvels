# Calendar 日历

<div style="margin: 60px;">
<MCalendar v-model:value="value" @change="getSelectDate"></MCalendar>
</div>

```vue
<MCalendar v-model:value="value" @change="getSelectDate"></MCalendar>
```

# API

## Props

| 参数  | 说明     | 类型 | 默认值     |
| ----- | -------- | ---- | ---------- |
| value | 选择日期 | Date | new Date() |

## Events

| 事件名称 | 说明         | 回调参数   |
| -------- | ------------ | ---------- |
| change   | 选择日期回调 | date: Date |
