# Float 浮动按钮

<div style="margin: 60px;">
    <MFloat :menu="menu"></MFloat>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const menu: Array<{
	iconName: string;
	text: string;
}> = [
	{
		iconName: 'uil:setting',
		text: 'Setting'
	},
	{
		iconName: 'ph:copy-bold',
		text: 'Copy'
	},
	{
		iconName: 'material-symbols:delete-outline',
		text: 'Delete'
	}
];
</script>

```vue
<template>
	<MFloat :menu="menu"></MFloat>
</template>

<script lang="ts" setup>
import { MFloat } from 'marvels-plus/src/';

const menu: Array<{
	iconName: string;
	text: string;
}> = [
	{
		iconName: 'uil:setting',
		text: 'Setting'
	},
	{
		iconName: 'ph:copy-bold',
		text: 'Copy'
	},
	{
		iconName: 'material-symbols:delete-outline',
		text: 'Delete'
	}
];
</script>
```

# API

## Props

| 参数 | 说明 | 类型  | 默认值 |
| ---- | ---- | ----- | ------ |
| menu | 菜单 | Array | ——     |
