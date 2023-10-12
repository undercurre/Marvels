<template>
	<div class="container">
		<div class="tab-bar">
			<div class="tab-element-first"></div>
			<!-- 渲染标签栏 -->
			<div
				class="tab-element"
				v-for="(tab, index) in tabs"
				:key="index"
				@click="changeTab(index)"
				:class="{ active: activeTabIndex === index }"
			>
				{{ tab }}
			</div>
		</div>
		<img class="roll" src="./../../assets/camera.png" />
		<img
			class="header animate__tada"
			:style="{
				left: activeTabIndex * 104 + 110 + 'px'
			}"
			src="./../../assets/cameraHeader.png"
		/>
	</div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import 'animate.css';

defineComponent({
	name: 'MTab',
	components: {}
});

defineProps({
	/**
	 * @description tab arr.
	 */
	tabs: {
		type: Array<string>,
		default: ['标签①'],
		required: true
	}
});

const emit = defineEmits(['changeTab']);

const changeTab = (index: number) => {
	activeTabIndex.value = index;
	emit('changeTab', index);
};

const activeTabIndex = ref(0);
</script>

<style lang="scss" scoped>
.container {
	position: relative;
	height: 100px;
}

.roll {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: #fff;
	position: absolute;
	bottom: 0;
	left: 0;
}

.tab-bar {
	display: flex;
	position: absolute;
	left: 50px;
	bottom: 0px;
	border-top: 10px solid;
	border-bottom: 10px solid;
	border-image-source: url('./../../assets/roll.png');
	border-image-slice: 30 fill; /* 图像分割方式，'fill'表示图像会填满边框 */
	border-image-width: 10px; /* 边框图像的宽度 */
	border-image-repeat: round; /* 图像重复方式 */
}

.tab-element-first {
	width: 50px;
	height: 40px;
	border-right: 4px solid #000;
	background-color: #fff;
}

.tab-element {
	width: 100px;
	height: 40px;
	border-right: 4px solid #000;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	text-shadow: 1px 1px #8d96a3;
}

.active {
	box-shadow: 0px 0px 40px #ffff52 inset;
}

.header {
	width: 30px;
	rotate: 45deg;
	position: absolute;
	transform: scaleX(-1);
	bottom: 60px;
}
</style>
