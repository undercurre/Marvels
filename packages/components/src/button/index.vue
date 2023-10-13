<template>
	<button :class="classes" :disabled="disabled">
		<slot></slot>
	</button>
</template>

<script lang="ts">
export default {
	name: 'MButton',
	props: {
		type: {
			type: String,
			default: 'default',
			validator: (value: string) =>
				['default', 'primary', 'danger', 'dashed', 'rainbow', 'incline', 'flow'].includes(value)
		},
		size: {
			type: String,
			default: 'middle',
			validator: (value: string) => ['large', 'middle', 'small'].includes(value)
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		// 动态样式
		classes() {
			return {
				'marvels-btn': true,
				[`marvels-btn-${this.type}`]: true,
				'marvels-btn-disabled': this.disabled
			};
		}
	}
};
</script>

<style scoped>
.marvels-btn {
	position: relative;
	border-radius: 2px;
	border: 1px solid #d9d9d9;
	color: rgba(0, 0, 0, 0.65);
	cursor: pointer;
	font-size: 14px;
	height: 32px;
	line-height: 1.5;
	padding: 4px 15px;
	transition: all 0.3s;
}
/* hover高亮 */
.marvels-btn:hover {
	opacity: 0.7;
}
/* focus高亮 */
.marvels-btn:focus {
	outline: none;
}
/* primary */
.marvels-btn-primary {
	background-color: #1890ff;
	border-color: #1890ff;
	color: #fff;
}
/* danger */
.marvels-btn-danger {
	background-color: #ff4d4f;
	border-color: #ff4d4f;
	color: #fff;
}
/* dashed虚线 */
.marvels-btn-dashed {
	border-style: dashed;
}

.marvels-btn-incline {
	background-color: #000;
	color: #fff;
	position: relative;
	border-radius: 16px 0;
	transform: skew(-10deg);
}

.marvels-btn-incline::before {
	content: '';
	position: absolute;
	width: 16px;
	height: 16px;
	left: -16px;
	bottom: 0;
	background: radial-gradient(circle at 0 0, transparent, transparent 16px, #000 16px);
}

.marvels-btn-incline::after {
	content: '';
	position: absolute;
	width: 16px;
	height: 16px;
	right: -16px;
	top: 0px;
	background: radial-gradient(circle at 16px 16px, transparent, transparent 16px, #000 16px);
}

.marvels-btn-flow {
	background-color: transparent;
	color: #000;
	position: relative;
	border: none;
	border-radius: 4px;
	overflow: hidden;
	z-index: 1;
}

.marvels-btn-flow::before {
	content: '';
	position: absolute;
	left: 50%;
	top: 50%;
	width: 200%;
	height: 200%;
	background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
	z-index: -2;
	animation: rotate 2s infinite linear;
	transform-origin: 0 0;
}

.marvels-btn-flow::after {
	content: '';
	position: absolute;
	width: calc(100% - 4px);
	height: calc(100% - 4px);
	background-color: #fff;
	left: 2px;
	top: 2px;
	border-radius: 4px;
	z-index: -1;
}

@keyframes rotate {
	to {
		transform: rotate(1turn);
	}
}

/* 彩虹 */
.marvels-btn-rainbow,
.marvels-btn-rainbow-shadow {
	background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
	background-size: 400%;
	color: #fff;
}

.marvels-btn-rainbow:hover,
.marvels-btn-rainbow-shadow:hover {
	animation: rainbow-animate 8s linear infinite;
}

@keyframes rainbow-animate {
	0% {
		background-position: 0%;
	}

	100% {
		background-position: 400%;
	}
}

.marvels-btn-rainbow-shadow::before {
	content: '';
	position: absolute;
	top: -5px;
	left: -5px;
	right: -5px;
	bottom: -5px;
	z-index: -1;
	background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
	background-size: 400%;
	opacity: 0;
	transition: 0.5s;
}

.marvels-btn-rainbow-shadow:hover::before {
	filter: blur(20px);
	opacity: 1;
	animation: rainbow-animate 8s linear infinite;
}
/* 彩虹 */

/* disabled禁用 */
.marvels-btn-disabled {
	cursor: not-allowed;
	opacity: 0.5 !important;
	animation: none !important;
}

.marvels-btn-disabled::before {
	display: none;
	filter: none;
	cursor: not-allowed;
	opacity: 0.5 !important;
	animation: none !important;
}

.marvels-btn-disabled:hover::before {
	display: none;
	filter: none;
	cursor: not-allowed;
	opacity: 0.5 !important;
	animation: none !important;
}
</style>
