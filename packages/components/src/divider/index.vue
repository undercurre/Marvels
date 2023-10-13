<template>
	<div
		class="marvels-divider"
		:class="{
			'marvels-divider-horizontal': type === 'horizontal',
			'marvels-divider-vertical': type === 'vertical',
			'marvels-divider-with-text': !!content
		}"
	>
		<!-- 上面!!content的意图是把content转成boolean类型避免null和undefined -->
		<div class="marvels-divider-inner-text" v-if="content">
			<slot>{{ content }}</slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MDivider',
	props: {
		type: {
			type: String,
			default: 'horizontal',
			validator: (value: string) => ['horizontal', 'vertical'].includes(value)
		},
		content: String
	}
});
</script>

<style scoped>
.marvels-divider {
	position: relative;
	height: 0;
	font-size: 0;
	line-height: 0;
	border-top: 2px solid #e8e8e8;
	margin: 16px 0;
	padding: 0;
}

.marvels-divider.marvels-divider-horizontal {
	border-top-width: 1px;
	border-left: none;
	display: inline-block;
	width: 100%;
	min-width: 100%;
	height: 0;
	margin: 16px 0;
	padding: 0;
	vertical-align: middle;
}

.marvels-divider.marvels-divider-with-text::before,
.marvels-divider.marvels-divider-with-text::after {
	position: absolute;
	top: 0px;
	width: 40px;
	height: 12px;
	font-size: 12px;
	line-height: 12px;
	text-align: center;
	color: rgba(0, 0, 0, 0.45);
	background-color: #fff;
	transform: translate(-50%);
	display: inline-block;
}

.marvels-divider.marvels-divider-with-text::before {
	left: 0;
	content: '';
	border-top: 2px solid #e8e8e8;
}

/* .marvels-divider.marvels-divider-with-text::after {
    right: 0;
    content: '';
    border-top: 1px solid #e8e8e8;
  } */

.marvels-divider.marvels-divider-vertical {
	border-top: none;
	/* border-left: 1px solid #e8e8e8; */
	border-left: 2px solid #e8e8e8;
	height: auto;
	display: inline-block;
	min-height: 32px;
	margin: 0 16px;
	vertical-align: middle;
}

.marvels-divider.marvels-divider-vertical.marvels-divider-with-text {
	display: inline-block;
	position: relative;
	padding: 16px 0;
	margin: 0 8px;
}

.marvels-divider.marvels-divider-vertical.marvels-divider-with-text::before,
.marvels-divider.marvels-divider-vertical.marvels-divider-with-text::after {
	position: absolute;
	left: -8px;
	width: 12px;
	height: 40px;
	font-size: 12px;
	line-height: 12px;
	text-align: center;
	color: rgba(0, 0, 0, 0.45);
	background-color: #fff;
	transform: translate(0, -50%);
	display: inline-block;
}

.marvels-divider.marvels-divider-vertical.marvels-divider-with-text::before {
	top: 0;
	content: '';
	border-left: 2px solid #e8e8e8;
}

.marvels-divider.marvels-divider-vertical.marvels-divider-with-text::after {
	bottom: 0;
	content: '';
	border-left: 2px solid #e8e8e8;
}

.marvels-divider-inner-text {
	display: inline-block;
	left: 50%;
	transform: translateX(-50%);
	color: rgba(0, 0, 0, 0.45);
	font-size: 14px;
	line-height: 1;
	position: absolute;
	top: -0.5em;
	padding: 0 8px;
	background-color: #fff;
}
</style>
