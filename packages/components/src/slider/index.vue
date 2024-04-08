<template>
	<div class="slider_box" ref="sliderContainer">
		<div class="range">
			<input
				name="range"
				type="range"
				min="0"
				max="100"
				v-model="percentage"
				@input="handleInputChange"
			/>
			<div
				class="range-output"
				:style="{ left: 12 + ((sliderWidth - 24) * percentage) / 100 + 'px' }"
			>
				<div class="output">{{ percentage }}</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { onMounted, ref, watch } from 'vue';

export default {
	name: 'MSlider',
	props: {
		value: {
			type: Number,
			default: 0
		}
	},
	setup(props, { emit }) {
		const percentage = ref(0);

		const sliderContainer = ref<HTMLElement | null>(null);

		const sliderWidth = ref(0);

		const handleInputChange = (event) => {
			// 执行你想要的操作，比如更新props.value
			emit('update:value', Number(event.target.value));
			emit('changed', Number(event.target.value));
		};

		watch(
			() => props.value,
			(newValue) => {
				percentage.value = newValue;
			}
		);

		onMounted(() => {
			console.log(sliderContainer.value);
			if (sliderContainer.value) {
				console.log(sliderContainer.value.getBoundingClientRect());
				sliderWidth.value = sliderContainer.value.getBoundingClientRect().width;
			}
		});

		return {
			percentage,
			handleInputChange,
			sliderWidth,
			sliderContainer
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);
$color-range-output: #383c42;
$color-input-placeholder: #c3c4c6;
$height-range-bounds: 22px;
$background-color-range-thumb: #333940;
$radius-range-thumb: 100px;
$height-range-thumb: 24px;
$width-range-thumb: 24px;
$size-range-thumb-shadow: 25px;
$color-range-thumb-shadow: rgba(#000, 0.5);
$shadow-offset-y-range-thumb: 4px;
$shadow-offset-x-range-thumb: 0px;
$border-width-range-thumb: 6px;
$border-color-range-thumb: #fff;
$width-range-track: 100%;
$height-range-track: 4px;
$radius-range-track: 100px;
$fill-range-track: #e6e6e6;
$fill-range-track-active: #60cd18;

//Output
$height-range-output: 60px;
$min-width-range-output: 32px;
$padding-x-range-output: 20px;
$size-range-output-arrow: 10px;
$offset-y-range-output: 4px;

.range {
	@mixin range-track() {
		box-sizing: border-box;
		width: $width-range-track;
		height: $height-range-track;
		background: $fill-range-track;
		border-radius: $radius-range-track;
	}
	@mixin range-thumb() {
		box-sizing: border-box;
		box-shadow: $shadow-offset-x-range-thumb $shadow-offset-y-range-thumb $size-range-thumb-shadow
			$color-range-thumb-shadow;
		border: $border-width-range-thumb solid $border-color-range-thumb;
		height: $height-range-thumb;
		width: $width-range-thumb;
		border-radius: $radius-range-thumb;
		background: $background-color-range-thumb;
		cursor: pointer;
	}

	position: relative;
	width: 100%;

	//Native
	input[type='range'] {
		appearance: none;
		padding: 0;
		width: $width-range-track;
		height: $height-range-bounds;
		cursor: pointer;
		display: block;

		&:focus {
			outline: none;
		}
		&[disabled] {
			opacity: 0.3;
			cursor: default;
		}
	}

	//Plugin wrapper
	.rangeslider {
		position: relative;
		height: $height-range-bounds;
		cursor: pointer;
		user-select: none;
	}

	//Track
	.rangeslider:before {
		@include range-track();
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	input::-webkit-slider-runnable-track {
		@include range-track();
		margin: $height-range-bounds / 2 0;
	}
	input::-moz-range-track {
		@include range-track();
		margin: $height-range-bounds / 2 0;
	}
	input::-ms-track {
		@include range-track();
		color: transparent;
		padding: $height-range-bounds / 2 0;
		background: transparent;
		border-color: transparent;
	}

	//Track fill
	input::-ms-fill-lower,
	input::-ms-fill-upper {
		@include range-track();
	}
	input::-ms-fill-lower {
		background: $fill-range-track-active;
	}
	.rangeslider-fill-lower {
		background-color: $fill-range-track-active;
		border-radius: $radius-range-track;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		height: $height-range-track;
		will-change: width;
	}

	//Thumb
	input::-webkit-slider-thumb {
		@include range-thumb();
		appearance: none;
		transform: translateY(-50%);
		margin-top: $height-range-track / 2;
	}
	input::-moz-range-thumb {
		@include range-thumb();
	}
	input::-ms-thumb {
		@include range-thumb();
	}
	.rangeslider-thumb {
		@include range-thumb();
		position: absolute;
		touch-action: pan-x;
		top: 50%;
		transform: translateY(-50%);
		will-change: left;
	}

	.range-output {
		position: absolute;
		left: ($width-range-thumb - $border-width-range-thumb * 2);
		top: ($width-range-thumb - $border-width-range-thumb * 2) / 2;
		transform-origin: 0 0;
		transition: transform 0.4s $easeOutBack;
		user-select: none;

		.output {
			display: block;
			position: absolute;
			height: $height-range-output;
			line-height: $height-range-output;
			min-width: $min-width-range-output;
			padding: 0 $padding-x-range-output;
			top: -($width-range-thumb / 2) - $offset-y-range-output - $size-range-output-arrow;
			transform: translate(-50%, -100%);
			background: $color-range-output;
			color: #fff;
			border-radius: 100px;
			white-space: nowrap;
			font-weight: bold;
			font-size: 1.2em;
			text-align: center;

			&:before {
				content: '';
				position: absolute;
				bottom: -$size-range-output-arrow + 2px; //Subtract 2 to get slight overlap that renders more nicely
				left: 50%;
				border: $size-range-output-arrow solid $color-range-output;
				border-bottom: none;
				border-left-color: transparent;
				border-right-color: transparent;
				transform: translateX(-50%);
			}
		}
	}
}

//Demo stuff
body {
	font-family: Helvetica Neue, Helvetica, Arial;
	font-weight: 300;
}

.slider_box {
	display: flex;
	width: 100%;
	min-width: 300px;
	min-height: 200px;
	margin-left: 20px;
	justify-content: center;
	align-items: center;
	color: #333;
}

form {
	max-width: 500px;
	min-width: 320px;
}

h2 {
	font-weight: 300;
	text-align: center;
	margin-bottom: 30px;
}
</style>
