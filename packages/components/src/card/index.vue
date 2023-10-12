<template>
	<div class="container">
		<div class="card">
			<div class="circle" :style="{ '--circle-color': color }"></div>
			<div class="logo">
				<slot name="logo"></slot>
			</div>
		</div>
		<div class="good">
			<slot name="good"></slot>
		</div>
		<div class="content">
			<h2>{{ title }}</h2>
			<p>
				{{ description }}
			</p>
			<button @click="moreHandle">Explore More</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'MCard'
});
</script>

<script lang="ts" setup>
import { defineComponent } from 'vue';

defineProps({
	/**
	 * @description card color.
	 */
	color: {
		type: String,
		default: '',
		required: true
	},
	/**
	 * @description card title.
	 */
	title: {
		type: String,
		default: '',
		required: true
	},
	/**
	 * @description card description.
	 */
	description: {
		type: String,
		default: '',
		required: true
	}
});

const emit = defineEmits(['more']);

const moreHandle = () => {
	emit('more');
};
</script>

<style lang="scss" scoped>
.container {
	width: 600px;
	position: relative;
}
.logo {
	transform-origin: center center; /* 设置缩放的中心点为元素中心 */
	transform: scale(1); /* 将元素从中心点放大到 1 倍 */
}
.card {
	position: relative;
	width: 350px;
	height: 350px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	border-radius: 20px;
	transition-delay: 0.5s;
}

.container:hover .card {
	width: 600px;
	transition-delay: 0.5s;
}

.card .circle {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.card .circle::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 50%;
	width: 350px;
	height: 350px;
	box-sizing: border-box;
	background: #191919;
	border: 8px solid var(--circle-color, #fff000);
	filter: drop-shadow(0 0 10px var(--circle-color, #fff000))
		drop-shadow(0 0 60px var(--circle-color, #fff000));
	transition: 0.5s background 0.5s;
	transition-delay: 0.75s, 1s;
}

.container:hover .circle::before {
	width: 100%;
	height: 100%;
	border-radius: 20px;
	background-color: var(--circle-color, #fff000);
	transition-delay: 0.5s;
}

.card .logo {
	position: relative;
	transform-origin: center center; /* 设置缩放的中心点为元素中心 */
	transform: scale(1.25); /* 将元素从中心点放大到 1.25 倍 */
	transition: 0.5s;
	transition-delay: 0.5s;
}

.container:hover .logo {
	transform: scale(0);
	transition-delay: 0s;
}

.good {
	position: absolute;
	top: 50%;
	left: 25%;
	transform: translate(-50%, -50%) scale(0) rotate(315deg);
	transform-origin: center center; /* 设置缩放的中心点为元素中心 */
	transition: 0.5s ease-in-out;
}

.container:hover .good {
	transition-delay: 0.75s;
	top: 50%;
	left: 72%;
	transform-origin: center center; /* 设置缩放的中心点为元素中心 */
	transform: translate(-50%, -50%) scale(1.6667) rotate(15deg);
}

.content {
	position: absolute;
	top: 0;
	left: 20%;
	padding: 20px 20px 20px 40px;
	opacity: 0;
	transition: 0.5s;
	visibility: hidden;
}

.container:hover .content {
	transition-delay: 0.75s;
	opacity: 1;
	visibility: visible;
	left: 20px;
}

.content h2 {
	color: #fff;
	text-transform: uppercase;
	font-size: 2.5em;
	line-height: 1em;
}

.content p {
	width: 50%;
	color: #fff;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 5; /* 显示的行数，根据需要调整 */
	overflow: hidden;
	text-overflow: ellipsis;
}

.content button {
	position: relative;
	color: #111;
	background: #fff;
	padding: 10px 20px;
	border-radius: 10px;
	font-weight: 600;
	margin-top: 10px;
}
</style>
