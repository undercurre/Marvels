<template>
	<div
		class="container"
		:style="{
			width: typeof width === 'number' ? width + 'px' : width,
			height: typeof height === 'number' ? height + 'px' : height
		}"
	>
		<slot></slot>
	</div>
</template>

<style scoped>
.container {
	overflow-y: scroll;
}

::-webkit-scrollbar {
	width: 8px; /* 滚动条宽度 */
}

::-webkit-scrollbar-track {
	background-color: #f1f1f1; /* 滚动条轨道背景色 */
	border-radius: 8px;
	border: 20px solid transparent;
}

::-webkit-scrollbar-thumb {
	background-color: #888; /* 滚动条滑块背景色 */
	border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
	background-color: #555; /* 滚动条滑块鼠标悬停背景色 */
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'MScrollbar'
});
</script>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
	width: {
		type: [String, Number],
		default: 100
	},
	height: {
		type: [String, Number],
		default: 100
	}
});
</script>
