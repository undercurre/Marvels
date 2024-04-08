# Link 链接

<div style="margin: 60px; display: flex; justify-content: space-around; flex-wrap: wrap">
    <MLink type="success">
			<h1>success</h1>
		</MLink>
		<MLink type="primary">
			<h1>primary</h1>
		</MLink>
		<MLink type="warning">
			<h1>warning</h1>
		</MLink>
		<MLink type="danger">
			<h1>danger</h1>
		</MLink>
		<MLink type="info">
			<h1>info</h1>
		</MLink>
		<MLink type="default">
			<h1>default</h1>
		</MLink>
		<MLink type="danger" disabled>
			<h1>disabled</h1>
		</MLink>
</div>

```vue
<template>
	<div class="container">
		<MLink type="success">
			<h1>success</h1>
		</MLink>
		<MLink type="primary">
			<h1>primary</h1>
		</MLink>
		<MLink type="warning">
			<h1>warning</h1>
		</MLink>
		<MLink type="danger">
			<h1>danger</h1>
		</MLink>
		<MLink type="info">
			<h1>info</h1>
		</MLink>
		<MLink type="default">
			<h1>default</h1>
		</MLink>
		<MLink type="danger" disabled>
			<h1>disabled</h1>
		</MLink>
	</div>
</template>

<script lang="ts" setup>
import { MLink } from 'marvels-plus/src';
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
}
</style>
```

# API

## Props

| 参数     | 说明 | 类型                                                           | 默认值    |
| -------- | ---- | -------------------------------------------------------------- | --------- |
| type     | 类型 | ['success', 'primary', 'warning', 'danger', 'info', 'default'] | 'default' |
| disabled | 禁用 | boolean                                                        | false     |

## Slot

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
