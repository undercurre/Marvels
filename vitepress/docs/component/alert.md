# Alert 提示

<div style="display: flex; flex-direction: column; justify-content: space-around; margin: 40px;">
	<MAlert type="success" message="操作成功！" />
	<MAlert type="info" message="操作成功！" />
	<MAlert type="warning" message="操作成功！" />
	<MAlert type="error" message="操作成功！" />
	<MAlert type="like" message="操作成功！" />
</div>

# API

## Props

| 参数    | 说明     | 类型   | 可选值                                  | 默认值   |
| ------- | -------- | ------ | --------------------------------------- | -------- |
| type    | 提示类型 | string | success / info / warning / error / link | required |
| message | 提示信息 | string | -                                       | -        |

## Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| close    | 点击关闭按钮时触发 | -        |
