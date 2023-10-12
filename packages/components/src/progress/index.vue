<template>
	<div class="ball">
		<div
			class="wave"
			:style="{
				'--percent': -1 * (percentage * 0.83 + 25) + '%'
			}"
		></div>
		<span class="text">{{ percentage }}%</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'MProgress'
});
</script>

<script lang="ts" setup>
defineProps({
	percentage: {
		type: Number,
		required: true,
		validator: (value) => value >= 0 && value <= 100
	}
});
</script>

<style lang="scss" scoped>
.ball {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 3px solid #00ffff;
	padding: 20px;
	position: relative;
	box-sizing: content-box;
	overflow: hidden;
}

.wave {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 3px solid #00ffff;
	padding: 10px;
	background: #00ffff;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.wave::after {
	content: '';
	width: 300px;
	height: 300px;
	background: rgba(255, 255, 255, 0.8);
	position: absolute;
	left: 50%;
	top: 0;
	transform: translate(-50%, var(--percent));
	border-radius: 40%;
	animation: wave 5s linear infinite;
}

@keyframes wave {
	100% {
		transform: translate(-50%, var(--percent)) rotate(360deg);
	}
}

.text {
	font-weight: 700;
	font-size: 42px;
	color: #fff;
	mix-blend-mode: difference;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 999;
}
</style>
