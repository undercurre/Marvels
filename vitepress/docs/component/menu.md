# Menu 菜单

<div>
    <MMenu :items="items" @select="menuSelect"> </MMenu>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

const items = [
	{
		label: 'demo1',
		icon: 'material-symbols:mp',
		active: true,
		children: [
			{
				label: 'demo5',
				icon: 'material-symbols:5mp',
				children: [
					{
						label: 'demo10',
						icon: 'material-symbols:10mp'
					},
					{
						label: 'demo11',
						icon: 'material-symbols:11mp'
					}
				]
			},
			{
				label: 'demo6',
				icon: 'material-symbols:6mp'
			},
			{
				label: 'demo7',
				icon: 'material-symbols:7mp'
			}
		]
	},
	{
		label: 'demo2',
		icon: 'material-symbols:2mp'
	},
	{
		label: 'demo3',
		icon: 'material-symbols:3mp',
		children: [
			{
				label: 'demo8',
				icon: 'material-symbols:8mp'
			},
			{
				label: 'demo9',
				icon: 'material-symbols:9mp'
			}
		]
	},
	{
		label: 'demo4',
		icon: 'material-symbols:4mp'
	}
];

function menuSelect(item: MMenuItem) {
	console.log('选择了', item);
}
</script>

```vue
<template>
	<MMenu :items="items" @select="menuSelect"> </MMenu>
</template>

<script lang="ts" setup>
import { MMenu } from 'marvels-plus/src/';
import type { MMenuItem } from 'marvels-plus/src/';

const items = [
	{
		label: 'demo1',
		icon: 'material-symbols:mp',
		active: true,
		children: [
			{
				label: 'demo5',
				icon: 'material-symbols:5mp',
				children: [
					{
						label: 'demo10',
						icon: 'material-symbols:10mp'
					},
					{
						label: 'demo11',
						icon: 'material-symbols:11mp'
					}
				]
			},
			{
				label: 'demo6',
				icon: 'material-symbols:6mp'
			},
			{
				label: 'demo7',
				icon: 'material-symbols:7mp'
			}
		]
	},
	{
		label: 'demo2',
		icon: 'material-symbols:2mp'
	},
	{
		label: 'demo3',
		icon: 'material-symbols:3mp',
		children: [
			{
				label: 'demo8',
				icon: 'material-symbols:8mp'
			},
			{
				label: 'demo9',
				icon: 'material-symbols:9mp'
			}
		]
	},
	{
		label: 'demo4',
		icon: 'material-symbols:4mp'
	}
];

function menuSelect(item: MMenuItem) {
	console.log('选择了', item);
}
</script>
```

# API

## Props

| 参数  | 说明   | 类型   | 默认值 |
| ----- | ------ | ------ | ------ |
| items | 菜单树 | Object | ——     |

## Event

| 事件名 | 说明         | 回调参数 |
| ------ | ------------ | -------- |
| select | 菜单激活回调 | Object   |
