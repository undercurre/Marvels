<template>
	<transition name="alertFade" mode="out-in">
		<div
			class="container"
			:class="classesTip"
			:style="{
				borderColor: colorList[type],
				boxShadow: `0px 0px 2px ${colorList[type]} inset`
			}"
			v-show="visible"
		>
			<div class="left">
				<icon
					class="icon animate__animated animate__infinite"
					:class="classesAni"
					:name="iconList[type]"
					:color="colorList[type]"
					size="22"
					flip="Vertical"
					:rotate="0"
				></icon>

				<div :class="classesTip">
					<p class="text" :style="{ color: colorList[type] }">
						{{ message }}
					</p>
				</div>
			</div>

			<icon
				@click="closeHandle"
				name="iconamoon:close-bold"
				:color="colorList[type]"
				size="26"
			></icon>
		</div>
	</transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'MAlert'
});
</script>

<script lang="ts" setup>
import { computed, defineComponent, ref } from 'vue';
import Icon from '../icon';
import 'animate.css';

defineComponent({
	components: {
		Icon
	}
});

const colorList: Record<Info.infoType, string> = {
	success: '#25ff0b',
	info: '#0bd2ff',
	warning: '#ffb40b',
	error: '#ff0303',
	like: '#03d0ff'
};

const iconList: Record<Info.infoType, string> = {
	success: 'mdi:success-circle-outline',
	info: 'akar-icons:info-fill',
	warning: 'ion:warning',
	error: 'codicon:error',
	like: 'fontisto:like'
};

const animationList: Record<Info.infoType, string> = {
	success: 'animate__tada',
	info: 'animate__swing',
	warning: 'animate__bounceIn',
	error: 'animate__heartBeat',
	like: 'animate__bounce'
};

const props = defineProps({
	/**
	 * @description alert message.
	 */
	message: {
		type: String,
		default: '',
		required: true
	},
	/**
	 * @description alert type.
	 */
	type: {
		type: String as () => Info.infoType,
		default: 'info'
	}
});

const classesTip = computed(() => {
	return {
		[`container-${props.type}`]: true
	};
});

const classesAni = computed(() => {
	return {
		[`${animationList[props.type]}`]: true
	};
});

const emit = defineEmits(['close']);

const visible = ref(true);

const closeHandle = (event: MouseEvent) => {
	visible.value = false;
	emit('close', event);
};
</script>

<style lang="scss" scoped>
/* 定义过渡效果 */
.alertFade-enter-active,
.alertFade-leave-active {
	transition: opacity 0.5s;
}
.alertFade-enter,
.alertFade-leave-to {
	opacity: 0;
}
.container {
	position: relative;
	height: 50px;
	width: 60%;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid;
	border-radius: 8px;
	padding: 10px 8px 10px 20px;
	text-shadow: 1px 1px #00040a;
	background-color: rgba($color: #002459, $alpha: 0.62);
	z-index: 999;
}

.container-success::before {
	content: '';
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 3px;
	width: 3px;
	height: 46%;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background-color: #25ff0b;
}

.container-success::after {
	content: '';
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 1px;
	width: 1px;
	height: 46%;
	background-color: #25ff0b;
}

.left {
	display: flex;
	flex: 1;
	align-items: center;
}

.icon {
	padding-right: 10px;
}

.text {
	font-size: 14px;
	font-weight: 500;
}
</style>
