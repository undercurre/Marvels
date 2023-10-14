<template>
	<div class="loading" v-if="isLoading">
		<div class="spinner" style="--spi-clr: #ff0">
			<span></span>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'MLoading'
});
</script>

<script lang="ts" setup>
const props = defineProps({
	/**
	 * @description loading status.
	 */
	isLoading: {
		type: Boolean,
		default: false
	}
});
</script>

<style lang="scss" scoped>
.loading {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
	z-index: 9999; /* 确保加载组件显示在最上层 */
}
@property --angle {
	syntax: '<angle>';
	inherits: false;
	initial-value: 0deg;
}
.spinner {
	position: relative;
	width: 150px;
	height: 150px;
	background: repeating-conic-gradient(
		from var(--angle),
		var(--spi-clr) 0%,
		var(--spi-clr) 5%,
		transparent 5%,
		transparent 40%,
		var(--spi-clr) 100%
	);
	border-radius: 50%;
	animation: animate 2s linear infinite;
}

@keyframes animate {
	0% {
		--angle: 0deg;
	}
	100% {
		--angle: 360deg;
	}
}

.spinner::before {
	content: '';
	position: absolute;
	inset: 2px;
	background: #fff;
	border-radius: 50%;
}

.spinner::after {
	content: '';
	position: absolute;
	inset: 2px;
	background: rgba(0, 0, 0, 0.5);
	border-radius: 50%;
}

.spinner span {
	position: absolute;
	inset: 0;
	animation: rotate 2s linear infinite;
	z-index: 999;
}

@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.spinner span::before {
	content: '';
	position: absolute;
	left: 94px;
	width: 10px;
	height: 10px;
	background: var(--spi-clr);
	border-radius: 50%;
	box-shadow: 0 0 5px var(--spi-clr), 0 0 20px var(--spi-clr), 0 0 40px var(--spi-clr);
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.text {
	font-size: 16px;
	margin-top: 100px;
	color: white;
}
</style>
