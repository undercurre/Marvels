<template id="color-picker-template">
	<div class="color-picker">
		<div class="color-picker__overlay" v-if="isVisible" v-on:click="hide"></div>
		<transition name="pop">
			<div class="color-picker__flyout" v-if="isVisible">
				<div class="color-chip" v-bind:style="{ background: color }">
					<div class="color-chip__inner">
						<h1 class="color-chip__title">HSL</h1>
						<h3 class="color-chip__subtitle">{{ colorString }}</h3>
					</div>
				</div>
				<div class="color-picker__inner">
					<div class="control" v-bind:style="gradientH">
						<input type="range" min="0" max="360" v-model="h" />
					</div>
					<div class="control" v-bind:style="gradientS">
						<input type="range" min="0" max="100" v-model="s" />
					</div>
					<div class="control" v-bind:style="gradientL">
						<input type="range" min="0" max="100" v-model="l" />
					</div>
				</div>
			</div>
		</transition>
		<div class="swatch" v-bind:style="{ background: color }" v-on:click="toggle"></div>
	</div>
</template>

<script lang="ts">
import { computed, ref, watch } from 'vue';

type HSL = {
	h: number;
	s: number;
	l: number;
};

export default {
	name: 'MColorPicker',
	props: {
		value: {
			type: Object,
			validator: function (value: HSL) {
				// 自定义验证逻辑
				return value.hasOwnProperty('h') && value.hasOwnProperty('s') && value.hasOwnProperty('l');
			},
			default: function () {
				return { h: 0, s: 0, l: 0 }; // 设置默认值
			}
		}
	},
	setup(props, { emit }) {
		const isVisible = ref(false);
		const h = ref(265);
		const s = ref(80);
		const l = ref(99);

		function hsb2hsl(hs: number, ss: number, b: number) {
			const hsl = {
				h: hs,
				l: 0,
				s: 0
			};
			hsl.l = (2 - ss) * b;
			hsl.s = ss * b;

			if (hsl.l <= 1 && hsl.l > 0) {
				hsl.s /= hsl.l;
			} else {
				hsl.s /= 2 - hsl.l;
			}

			hsl.l /= 2;

			if (hsl.s > 1) {
				hsl.s = 1;
			}

			if (!(hsl.s > 0)) hsl.s = 0;

			hsl.h *= 360;
			hsl.s *= 100;
			hsl.l *= 100;

			return hsl;
		}

		const color = computed(() => {
			const hsl = hsb2hsl(h.value / 360, s.value / 100, l.value / 100);
			const c = hsl.h + ', ' + hsl.s + '%, ' + hsl.l + '%';
			const res = 'hsl(' + c + ')';
			return res;
		});

		const colorString = computed(() => {
			const c = h.value + ', ' + s.value + '%, ' + l.value + '%';
			return c;
		});

		const gradientH = computed(() => {
			const stops: string[] = [];
			for (let i = 0; i < 7; i++) {
				const hsl = hsb2hsl(h.value / 360, s.value / 100, l.value / 100);
				const c = hsl.h + ', ' + hsl.s + '%, ' + hsl.l + '%';
				stops.push('hsl(' + c + ')');
			}
			return { backgroundImage: 'linear-gradient(to right, ' + stops.join(', ') + ')' };
		});

		const gradientS = computed(() => {
			const stops: string[] = [];
			let c;
			let hsl = hsb2hsl(h.value / 360, 0, l.value / 100);
			c = hsl.h + ', ' + hsl.s + '%, ' + hsl.l + '%';
			stops.push('hsl(' + c + ')');
			hsl = hsb2hsl(h.value / 360, 1, l.value / 100);
			c = hsl.h + ', ' + hsl.s + '%, ' + hsl.l + '%';
			stops.push('hsl(' + c + ')');
			return { backgroundImage: 'linear-gradient(to right, ' + stops.join(', ') + ')' };
		});

		const gradientL = computed(() => {
			const stops: string[] = [];
			let c;
			let hsl = hsb2hsl(h.value / 360, 0, 0);
			c = hsl.h + ', ' + hsl.s + '%, ' + hsl.l + '%';
			stops.push('hsl(' + c + ')');
			hsl = hsb2hsl(h.value / 360, s.value / 100, 1);
			c = hsl.h + ', ' + hsl.s + '%, ' + hsl.l + '%';
			stops.push('hsl(' + c + ')');
			return { backgroundImage: 'linear-gradient(to right, ' + stops.join(', ') + ')' };
		});

		const show = () => {
			isVisible.value = true;
		};

		const hide = () => {
			isVisible.value = false;
		};

		const toggle = () => {
			isVisible.value = !isVisible.value;
		};

		watch(
			() => props.value,
			(newValue) => {
				console.log(h.value !== newValue.h);
				if (h.value !== newValue.h) h.value = newValue.h;
				if (s.value !== newValue.s) s.value = newValue.s;
				if (l.value !== newValue.l) l.value = newValue.l;
			},
			{
				immediate: true
			}
		);

		watch([() => h.value, () => s.value, () => l.value], () => {
			emit('update:value', { h: Number(h.value), s: Number(s.value), l: Number(l.value) });
		});

		return {
			isVisible,
			h,
			s,
			l,
			color,
			colorString,
			gradientH,
			gradientS,
			gradientL,
			show,
			hide,
			toggle
		};
	}
};
</script>

<style scoped>
.color-picker {
	position: relative;
}

.color-picker__overlay {
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0px;
	left: 0;
	background: black;
	z-index: 0;
	opacity: 0;
}

.color-picker__flyout {
	width: 240px;
	border: 1px solid #eee;
	border-radius: 4px;
	background: white;
	box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.12);
	font-family: 'Roboto', 'Helvetica Neue', sans-serif;
	position: absolute;
	bottom: 100%;
	left: 50%;
	z-index: 2;
}

.color-picker__inner {
	padding: 1.5rem 1rem;
}

.color-chip {
	height: 260px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 4px 4px 0 0;
}

.color-chip__inner {
	text-align: center;
}

.color-chip__subtitle {
	margin-top: 0.5rem;
	opacity: 0.7;
	font-weight: normal;
	font-size: 15px;
	text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
}

.color-chip__title {
	color: white;
	margin: 0;
	font-size: 50px;
	letter-spacing: 4px;
	font-family: Helvetica Neue;
	text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
}

.control {
	width: 100%;
	height: 12px;
	border-radius: 12px;
	border: 1px solid #ddd;
}

.control + .control {
	margin-top: 1rem;
}

.control input {
	width: 100%;
	margin: 0;
}

.control input[type='range'] {
	-webkit-appearance: none;
	width: 100%;
	background: transparent;
}

.control input[type='range']:focus {
	outline: none;
}

.control input[type='range']::-ms-track {
	width: 100%;
	cursor: pointer;
	background: transparent;
	border-color: transparent;
	color: transparent;
}

.control input[type='range']::-webkit-slider-thumb {
	-webkit-appearance: none;
	border: 1px solid #ddd;
	height: 20px;
	width: 20px;
	border-radius: 50px;
	background: #ffffff;
	cursor: pointer;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
	margin-top: -4px;
}

.swatch {
	width: 24px;
	height: 24px;
	margin: 1rem auto 0 auto;
	border: 4px solid white;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
	cursor: pointer;
}

.swatch:hover {
	border: 4px solid white;
	opacity: 0.8;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
}

.pop-enter-active,
.pop-leave-active {
	transition: transform 0.5s, opacity 0.5s;
	transition-timing-function: cubic-bezier(0.8, 0.3, 0.25, 1.75);
	transform: scale(1);
}

.pop-enter,
.pop-leave-active {
	opacity: 0;
	transform: scale(0);
}
</style>
