import { onMounted } from 'vue'; import { onMounted } from 'vue'; import { defineComponent } from
'vue';
<template>
	<div class="container">
		<div class="cloud">
			<div ref="rain" class="rain drop" v-for="item in rainCount" :key="item"></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, ref, onMounted } from 'vue';

defineComponent({
	name: 'MCloud'
});

const rain = ref<Array<HTMLElement>>([]);

defineProps({
	rainCount: {
		type: Number,
		default: 10
	}
});

onMounted(() => {
	rain.value.forEach((element) => {
		element.style.left = Math.floor(Math.random() * 310) + 'px';
		element.style.width = 0.5 + Math.random() * 5 + 'px';
		element.style.height = 0.5 + Math.random() * 50 + 'px';
		element.style.animationDuration = 1 + Math.random() * 0.5 + 's';
	});
});
</script>

<style lang="scss" scoped>
.container {
	position: relative;
	width: 100%;
	height: 400px;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.container .cloud {
	position: relative;
	top: 100px;
	width: 320px;
	height: 100px;
	background-color: #fff;
	border-radius: 100px;
	filter: drop-shadow(8px 8px 0 #0005);
	animation: animateCloud 2s steps(1) infinite;
}

@keyframes animateCloud {
	0% {
		filter: drop-shadow(8px 8px 0 #0001) drop-shadow(0 0 0 #fff) brightness(1);
	}
	95% {
		filter: drop-shadow(8px 8px 0 #0001) drop-shadow(0 0 50px #ffff00) brightness(10);
	}
}

.container .cloud::before {
	content: '';
	position: absolute;
	top: -50px;
	left: 40px;
	width: 110px;
	height: 110px;
	border-radius: 50%;
	background-color: #484f59;
	box-shadow: 90px -10px 0 30px #484f59;
}

.container .cloud::after {
	content: '';
	position: absolute;
	inset: 0;
	background-color: #484f59;
	border-radius: 100px;
	z-index: 1000;
}

.container .cloud .drop {
	position: absolute;
	top: 40px;
	background-color: #05a2eb;
	width: 2px;
	height: 10px;
	transform-origin: bottom;
	animation: animate 2s linear infinite;
}

@keyframes animate {
	0% {
		transform: translateY(0) scaleY(1);
	}
	70% {
		transform: translateY(160px) scaleY(1);
	}
	80% {
		transform: translateY(160px) scaleY(0.2);
	}
	100% {
		transform: translateY(160px) scaleY(0) scaleX(15);
	}
}
</style>
