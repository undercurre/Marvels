<template>
	<div class="button">
		<div class="day">
			<!-- sun -->
			<div class="star" :class="`${active}`" @click="slide()">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="day-background" :class="`${daytime}`">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="back-cloud" :class="`${backTime}`">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="white-background" :class="`${whiteTime}`">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="stars" :class="`${starsActie}`">
				<span class="iconfont icon-xingxing3"></span>
				<span class="iconfont icon-xingxing3"></span>
				<span class="iconfont icon-xingxing3"></span>
				<span class="iconfont icon-xingxing3"></span>
				<span class="iconfont icon-xingxing3"></span>
				<span class="iconfont icon-xingxing3"></span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'MSwitch'
});
</script>

<script lang="ts" setup>
import { ref, watch, defineComponent, onMounted } from 'vue';
import './../../assets/font/iconfont.css';

onMounted(() => {
	import('./../../assets/font/iconfont.js');
});

let active = ref('sun');
let daytime = ref('day-background-daytime');
let starsActie = ref('stars-daytime');
let backTime = ref('back-cloud-daytime');
let whiteTime = ref('white-background-daytime');

const props = defineProps({
	value: {
		type: Boolean,
		default: false,
		required: true
	}
});

const emit = defineEmits(['update:value']);

watch(
	() => props.value,
	(newValue, oldValue) => {
		active.value = props.value ? 'sun' : 'moon';
		daytime.value = !props.value ? 'day-background-night' : 'day-background-daytime';
		starsActie.value = !props.value ? 'stars-night' : 'stars-daytime';
		backTime.value = !props.value ? 'back-cloud-night' : 'back-cloud-daytime';
		whiteTime.value = !props.value ? 'white-background-night' : 'white-background-daytime';
	}
);

const slide = () => {
	if (active.value === 'sun') {
		active.value = 'moon';
		emit('update:value', false);
		daytime.value = 'day-background-night';
		starsActie.value = 'stars-night';
		backTime.value = 'back-cloud-night';
		whiteTime.value = 'white-background-night';
	} else {
		active.value = 'sun';
		emit('update:value', true);
		daytime.value = 'day-background-daytime';
		starsActie.value = 'stars-daytime';
		backTime.value = 'back-cloud-daytime';
		whiteTime.value = 'white-background-daytime';
	}
};
</script>

<style scoped lang="scss">
div.button {
	display: inline-block;
	overflow: hidden;

	display: inline-block;
	position: relative;
	height: 47px;
	width: 118px;
	border-radius: 120px;
	box-sizing: border-box;
	.day::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		border-radius: 120px;
		box-shadow: inset 0px 10px 10px 6px rgba(0, 0, 0, 0.2), inset 0px 5px 5px 3px rgba(0, 0, 0, 0.2),
			inset 0px 5px 5px 5px rgba(0, 0, 0, 0.2), 0px 5px 5px 3px rgba(255, 255, 255, 0.2),
			0px 5px 5px 3px rgba(255, 255, 255, 0.2);
		pointer-events: none;
		z-index: 13;
	}
	.day {
		position: absolute;
		display: inline-block;
		width: 100%;
		height: 100%;
		border-radius: 120px;
		z-index: 19;
		box-shadow: inset 0 2px 15px rgba(0, 0, 0, 0.2), inset 0 2px 2px rgba(0, 0, 0, 0.2),
			inset 0 -2px 2px rgba(0, 0, 0, 0.2);
		.star {
			display: inline-block;
			position: absolute;
			top: 10%;
			width: 33%;
			height: 80%;
			border-radius: 100px;
			transition-property: left, background-color;
			transition-duration: 1.5s;
			cursor: grab;
			span {
				transition-property: opacity;
				transition-duration: 1.5s;
			}
			span {
				border-radius: 50%;
				position: absolute;
			}
			span:nth-child(1) {
				width: 35%;
				height: 35%;
				top: 43%;
				left: 10%;
				background-color: #949eb2;
				box-shadow: inset -5px -5px 10px 0px rgba(0, 0, 0, 0.5);
			}
			span:nth-child(2) {
				width: 22%;
				height: 22%;
				top: 17%;
				left: 40%;
				background-color: #949eb2;
				box-shadow: inset -1px -2px 5px 0px rgba(0, 0, 0, 0.5);
			}
			span:nth-child(3) {
				width: 23%;
				height: 23%;
				top: 53%;
				left: 60%;
				background-color: #949eb2;
				box-shadow: inset -1px -2px 5px 0px rgba(0, 0, 0, 0.5);
			}
		}
		.sun {
			left: 5%;
			background-color: #fec428;
			box-shadow: inset 0px 2px 5px 6px rgba(255, 255, 255, 0.3),
				inset -1px 5px 5px 3px rgba(255, 255, 255, 0.2), inset -5px -5px 10px 0px rgba(0, 0, 0, 0.5),
				8px 8px 10px 0px rgba(0, 0, 0, 0.5);
			z-index: 10;
			span {
				opacity: 0;
			}
		}
		.moon {
			left: 62%;
			background-color: #c3c9d1;
			box-shadow: inset 0px 2px 5px 6px rgba(255, 255, 255, 0.3),
				inset -1px 5px 5px 3px rgba(255, 255, 255, 0.2), inset -5px -5px 10px 0px rgba(0, 0, 0, 0.5),
				8px 8px 10px 0px rgba(0, 0, 0, 0.5);
			z-index: 10;
			span {
				opacity: 1;
			}
		}
		.day-background {
			position: absolute;
			display: inline-block;
			width: 100%;
			height: 100%;
			border-radius: 120px;
			z-index: 1;
			overflow: hidden;
			span {
				transition-property: all;
				transition-duration: 1.5s;
			}
			span:nth-child(1) {
				height: 100%;
				position: absolute;
				display: inline-block;
				width: 85%;
				border-radius: 100px;
				z-index: 2;
			}
			span:nth-child(2) {
				height: 100%;
				position: absolute;
				display: inline-block;
				width: 70%;
				border-radius: 100px;
				z-index: 3;
			}
			span:nth-child(3) {
				height: 100%;
				position: absolute;
				display: inline-block;
				width: 55%;
				border-radius: 60px;
				z-index: 4;
			}
		}
		.day-background-daytime {
			background-color: #2d6da2;
			span:nth-child(1) {
				left: 0%;
				background-color: #4c86bd;
				border-top-left-radius: 120px;
				border-bottom-left-radius: 120px;
			}
			span:nth-child(2) {
				left: 0%;
				background-color: #5992c2;
				border-top-left-radius: 120px;
				border-bottom-left-radius: 120px;
			}
			span:nth-child(3) {
				left: 0%;
				background-color: #689dca;
				border-top-right-radius: 120px;
				border-bottom-right-radius: 120px;
			}
		}
		.day-background-night {
			background-color: #1c1f2c;
			span:nth-child(1) {
				left: 15%;
				background-color: #2d333d;
				border-top-right-radius: 120px;
				border-bottom-right-radius: 120px;
			}
			span:nth-child(2) {
				left: 30%;
				background-color: #404350;
				border-top-right-radius: 120px;
				border-bottom-right-radius: 120px;
			}
			span:nth-child(3) {
				left: 45%;
				background-color: #50545e;
				border-top-left-radius: 120px;
				border-bottom-left-radius: 120px;
			}
		}

		.back-cloud {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 6;
			border-radius: 120px;
			overflow: hidden;
			span {
				position: absolute;
				display: inline-block;
				z-index: 6;
				border-radius: 120px;
				transition-property: background-color;
				transition-duration: 2.5s;
				box-shadow: inset 0px 2px 5px 2px rgba(255, 255, 255, 0.3),
					inset -1px 5px 5px 2px rgba(255, 255, 255, 0.2),
					inset -5px -5px 5px 2px rgba(0, 0, 0, 0.5), 8px 8px 5px 0px rgba(0, 0, 0, 0.5);
			}
			span:nth-child(1) {
				width: 50%;
				height: 100%;
				top: -9%;
				right: -35%;
				transform: rotate(30deg);
			}
			span:nth-child(2) {
				width: 30%;
				height: 60%;
				top: 30%;
				right: -5%;
				transform: rotate(40deg);
			}
			span:nth-child(3) {
				width: 50%;
				height: 90%;
				top: 50%;
				right: -5%;
				transform: rotate(60deg);
			}
			span:nth-child(4) {
				width: 20%;
				height: 50%;
				top: 60%;
				right: 30%;
				transform: rotate(60deg);
			}
			span:nth-child(5) {
				width: 60%;
				height: 80%;
				top: 90%;
				right: 15%;
				transform: rotate(60deg);
			}
			span:nth-child(6) {
				width: 60%;
				height: 100%;
				top: 85%;
				left: -10%;
				transform: rotate(90deg);
			}
		}
		.back-cloud-daytime {
			span {
				background-color: #a3c5e0;
			}
		}
		.back-cloud-night {
			span {
				background-color: #6c8395;
			}
		}
		.white-background {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 7;
			border-radius: 120px;
			overflow: hidden;
			span {
				position: absolute;
				display: inline-block;
				border-radius: 120px;
				box-shadow: inset 0px 2px 3px 1px rgba(255, 255, 255, 0.3),
					inset -1px 5px 3px 1px rgba(255, 255, 255, 0.2),
					inset -5px -5px 3px 1px rgba(0, 0, 0, 0.5), 8px 8px 3px 0px rgba(0, 0, 0, 0.5);
				transition-property: background-color;
				transition-duration: 2s;
			}
			span:nth-child(1) {
				width: 70%;
				height: 100%;
				top: 30%;
				right: -55%;
				transform: rotate(30deg);
			}
			span:nth-child(2) {
				width: 60%;
				height: 100%;
				top: 60%;
				right: -35%;
				transform: rotate(30deg);
			}
			span:nth-child(3) {
				width: 25%;
				height: 100%;
				top: 75%;
				right: 15%;
			}
			span:nth-child(4) {
				width: 15%;
				height: 100%;
				top: 80%;
				right: 35%;
				box-shadow: inset 0px 2px 3px 1px rgba(255, 255, 255, 0.3),
					inset -1px 5px 3px 1px rgba(255, 255, 255, 0.2),
					inset -5px -5px 3px 1px rgba(0, 0, 0, 0.5), 5px 5px 3px 0px rgba(0, 0, 0, 0.5);
			}
			span:nth-child(5) {
				width: 30%;
				height: 100%;
				top: 78%;
				right: 42%;
			}
			span:nth-child(6) {
				width: 50%;
				height: 90%;
				top: 95%;
				right: 58%;
				transform: rotate(90deg);
			}
		}
		.white-background-daytime {
			span {
				background-color: #f1fafc;
			}
		}
		.white-background-night {
			span {
				background-color: #c6c6c6;
			}
		}
		.stars {
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: 120px;
			z-index: 8;
			position: absolute;
			transition-property: top, opacity;
			transition-duration: 1.5s;
			span {
				color: #fff;
				position: absolute;
			}
			span:nth-child(1) {
				font-size: 3rem;
				top: 12%;
				left: -3%;
			}
			span:nth-child(2) {
				font-size: 1.5rem;
				top: 10%;
				left: 3%;
			}
			span:nth-child(3) {
				font-size: 3rem;
				top: 20%;
				left: -10%;
			}
			span:nth-child(4) {
				font-size: 3rem;
				top: 1%;
				left: 10%;
			}
			span:nth-child(5) {
				font-size: 2.5rem;
				top: 40%;
				left: -25%;
			}
			span:nth-child(6) {
				font-size: 4rem;
				top: 30%;
				left: -2%;
			}
		}
		.stars-daytime {
			top: 100%;
			opacity: 0;
		}
		.stars-night {
			top: 0%;
			opacity: 1;
		}
	}
}
</style>
