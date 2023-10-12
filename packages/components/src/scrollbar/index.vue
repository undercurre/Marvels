<template>
    <div
        class="container"
        :style="{
            width: width + 'px',
            height: height + 'px',
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

<script lang="ts" setup>
import type { defineComponent } from 'vue';

defineComponent({
	name: 'MScrollbar'
})

defineProps({
    width: {
        type: Number,
        default: 100,
    },
    height: {
        type: Number,
        default: 100,
    },
});
</script>
