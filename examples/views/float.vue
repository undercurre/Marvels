<template>
	<MFloat style="margin: 200px" :menu="menu"></MFloat>
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
