<template>
	<div class="cards-container" v-for="(computedClock, index) of computedRealClock" :key="index">
		<div class="container">
			<div class="card bg-up">
				<div class="inner">
					<div class="content">
						{{ computedClock.nextFormat.slice(-2, -1) }}
					</div>
				</div>
			</div>
			<div class="card bg-down">
				<div class="inner">
					<div class="content">{{ computedClock.currentFormat.slice(-2, -1) }}</div>
				</div>
			</div>
			<div
				class="flip card"
				:style="computedClock.ifTens ? `transform: rotateX(-${computedClock.degree}deg);` : ''"
			>
				<div class="front inner">
					<div class="content">
						{{ computedClock.currentFormat.slice(-2, -1) }}
					</div>
				</div>
				<div class="back inner">
					<div class="content">
						{{ computedClock.nextFormat.slice(-2, -1) }}
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="card bg-up">
				<div class="inner">
					<div class="content">
						{{ computedClock.nextFormat.slice(-1) }}
					</div>
				</div>
			</div>
			<div class="card bg-down">
				<div class="inner">
					<div class="content">{{ computedClock.currentFormat.slice(-1) }}</div>
				</div>
			</div>
			<div class="flip card" :style="`transform: rotateX(-${computedClock.degree}deg);`">
				<div class="front inner">
					<div class="content">
						{{ computedClock.currentFormat.slice(-1) }}
					</div>
				</div>
				<div class="back inner">
					<div class="content">
						{{ computedClock.nextFormat.slice(-1) }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.cards-container {
	display: flex;
	justify-content: center;
	position: relative;
}
.cards-container + .cards-container {
	margin-left: 30px;
	&::before {
		width: 30px;
		text-align: center;
		z-index: 1;
		position: absolute;
		left: -30px;
		top: 50%;
		transform: translateY(-60%);
		content: ':';
		color: #ccc;
		font-weight: bold;
		font-size: 60px;
		text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
	}
}

.container {
	position: relative;
	width: 60px;
	height: 90px;
	perspective: 200px;
	position: relative;
	border-radius: 6px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
	&::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		height: 1px;
		background: rgba(0, 0, 0, 0.7);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
		top: calc(50% - 1px);
	}
}

.container + .container {
	margin-left: 15px;
}

.card {
	border-radius: 6px;
	position: absolute;
	font-size: 80px;
	text-align: center;
	line-height: 90px;
	width: 100%;
	height: 50%;
	transform-style: preserve-3d;
	transform-origin: 0% 100%;
}

.inner {
	border-radius: 6px 6px 0 0;
	position: absolute;
	width: 100%;
	height: 100%;
	background: #333;
	box-sizing: border-box;
	backface-visibility: hidden;
	overflow: hidden;
	.content {
		color: #ccc;
		font-weight: bold;
		text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
	}
}

// bg card
.bg-down {
	top: 50%;
	.inner {
		border-radius: 0 0 6px 6px;
	}
	.inner .content {
		transform: translateY(-50%);
	}
}

// flip card
.back {
	transform: rotateY(180deg);
	.content {
		transform-origin: 50% 50%;
		transform: rotate(180deg);
	}
}
</style>

<script lang="ts">
import { computed, ref } from 'vue';

export default {
	name: 'MClock',
	setup(props, { emit }) {
		const curTime = ref(new Date(0));
		const realClock = ref([{ max: 59, current: 0, degree: 0 }]);
		const computedRealClock = computed(() => {
			return realClock.value.map((clock) => ({
				...clock,
				nextFormat: `0${clock.current + 1 > clock.max ? 0 : clock.current + 1}`,
				currentFormat: `0${clock.current}`,
				ifTens: Math.round(clock.current / 10) !== Math.round((clock.current + 1) / 10)
			}));
		});
		/**
		 * index: 0 - hour, 1 - minute, 2 - second
		 */
		function filp(newVal, index = 2) {
			const clock = realClock.value[index];
			if (clock.degree < 180) {
				clock.degree += 4;
				requestAnimationFrame(() => {
					filp(newVal, index);
				});
			} else {
				clock.degree = 0;
				clock.current = newVal;
			}
		}

		return {
			computedRealClock
		};
	}
};
</script>
