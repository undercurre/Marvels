<template>
	<div class="container">
		<ul class="steps">
			<!-- <div
                class="activeBar"
                :style="{ width: selected * 100 + 'px' }"
            ></div> -->
			<div class="bar" :style="{ width: steps.length * 100 + 'px' }"></div>
			<li class="step" v-for="(item, index) in steps" :key="item.title" @click="selectStep(index)">
				<span :class="[index === selected ? 'active' : '']" class="ball">{{ index }}</span>
				<span class="title">{{ item.title }}</span>
			</li>
		</ul>
		<div class="display">{{ curdes }}</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'MSteps'
});
</script>

<script lang="ts" setup>
import { defineComponent, defineProps, computed } from 'vue';

const props = defineProps({
	steps: {
		type: Array<{
			title: string;
			description: string;
		}>
	},
	selected: {
		type: Number,
		default: 0
	}
});

const curdes = computed(() => {
	return props.steps[props.selected].description;
});

const emit = defineEmits(['update:selected']);

function selectStep(index: number) {
	emit('update:selected', index);
}
</script>

<style lang="scss" scoped>
.container {
	.steps {
		position: relative;
		display: flex;
		.activeBar {
			background: repeating-linear-gradient(45deg, #1ea4ec, #1ea4ec 4px, #1f8bc5 4px, #1f8bc5 10px);
			position: absolute;
			top: 18px;
			left: 100px;
			height: 6px;
			z-index: -998;
		}
		.bar {
			position: absolute;
			top: 18px;
			left: 100px;
			height: 6px;
			background: #70afd0;
			z-index: -999;
		}
		.step {
			width: 120px;
			height: 69px;
			display: flex;
			flex-direction: column;
			align-items: center;
			.ball,
			.active {
				width: 36px;
				height: 36px;
				border-radius: 50%;
				background-color: #fff;
				border: 3px solid #a6cde2;
				text-align: center;
				line-height: 36px;
				color: #70afd0;
				margin-bottom: 10px;
				&:hover {
					background-color: #1ea4ec;
					color: #fff;
				}
			}
			.active {
				background-color: #1ea4ec;
				color: #fff;
			}
			.title {
				font-size: 14px;
				font-weight: 600;
				color: #2e6c8e;
			}
		}
	}
	.display {
		margin-top: 40px;
		padding: 40px;
		box-shadow: 2px 2px 1px #80b7d5, 2px 2px 1px #80b7d5 inset;
		border-radius: 10px;
		font-size: 16px;
		color: rgba(#2e6c8e, 0.6);
	}
}
</style>
