<template>
	<div class="container">
		<div class="drop">
			<div class="content"><slot></slot></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'MWaterDroplet'
});
</script>

<style lang="scss" scoped>
.container {
	position: relative;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	padding: 50px 0;
	gap: 40px 60px;
}

.container .drop {
	position: relative;
	width: 350px;
	height: 350px;
	box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(0, 0, 0, 0.05),
		25px 30px 30px rgba(0, 0, 0, 0.05), inset -20px -20px 25px rgba(255, 255, 255, 0.9);
	animation: round 5s linear infinite;
	transition: 0.5s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
}

.container .drop:hover {
	border-radius: 50%;
	animation: none;
}

.container .drop::before {
	content: '';
	position: absolute;
	top: 50px;
	left: 85px;
	width: 35px;
	height: 35px;
	background-color: #fff;
	border-radius: 50%;
	opacity: 0.9;
}
.container .drop::after {
	content: '';
	position: absolute;
	top: 90px;
	left: 110px;
	width: 15px;
	height: 15px;
	background-color: #fff;
	border-radius: 50%;
	opacity: 0.9;
}
.container .drop .content {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	padding: 40px;
	gap: 15px;
}

@keyframes round {
	0% {
		border-radius: 57% 43% 43% 57% / 43% 43% 57% 57%;
	}

	25% {
		border-radius: 73% 27% 59% 41% / 57% 59% 41% 43%;
	}

	75% {
		border-radius: 35% 65% 31% 69% / 57% 59% 41% 43%;
	}

	100% {
		border-radius: 57% 43% 43% 57% / 43% 43% 57% 57%;
	}
}
</style>
