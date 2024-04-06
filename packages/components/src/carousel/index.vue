<template>
	<div class="body">
		<div ref="drag" id="drag-container">
			<div ref="spin" id="spin-container">
				<!-- Add your images (or video) here -->
				<img v-for="item in imgs" :key="item" :src="item" alt="" />

				<!-- Text at center of ground -->
				<!-- <p>3D Tiktok Carousel</p> -->
			</div>
			<div ref="ground" id="ground"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';

export default {
	name: 'MCarousel',
	props: {
		imgs: {
			type: Array<string>,
			default: []
		}
	},
	setup() {
		let radius = 240;
		let autoRotate = true;
		let rotateSpeed = -60;
		let imgWidth = 120;
		let imgHeight = 170;

		const drag = ref<HTMLElement | null>(null);
		const spin = ref<HTMLElement | null>(null);
		const ground = ref<HTMLElement | null>(null);
		let timer;

		function init() {
			if (spin.value && drag.value) {
				spin.value.style.width = imgWidth + 'px';
				spin.value.style.height = imgHeight + 'px';

				// auto spin
				if (autoRotate) {
					let animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
					spin.value.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
				}

				document.onpointerdown = function (e) {
					clearInterval(timer);
					e = e || window.event;
					var sX = e.clientX;

					this.onpointermove = function (e) {
						e = e || window.event;
						var nX = e.clientX;
						desX = nX - sX;
						tX += desX * 0.1;
						applyTranform(drag.value);
						sX = nX;
					};

					this.onpointerup = function (e) {
						timer = setInterval(function () {
							desX *= 0.95;
							tX += desX * 0.1;
							applyTranform(drag.value);
							playSpin(false);
							if (Math.abs(desX) < 0.5) {
								clearInterval(timer);
								playSpin(true);
							}
						}, 17);
						this.onpointermove = this.onpointerup = null;
					};

					return false;
				};
			}

			if (ground.value) {
				ground.value.style.width = radius * 3 + 'px';
				ground.value.style.height = radius * 3 + 'px';
			}
		}

		function animate(delayTime) {
			if (spin.value) {
				const aImg = spin.value.getElementsByTagName('img');
				const aVid = spin.value.getElementsByTagName('video');
				const aEle = [...aImg, ...aVid];
				for (var i = 0; i < aEle.length; i++) {
					aEle[i].style.transform =
						'rotateY(' + i * (360 / aEle.length) + 'deg) translateZ(' + radius + 'px)';
					aEle[i].style.transition = 'transform 1s';
					aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's';
				}
			}
		}

		let sX,
			sY,
			nX,
			nY,
			desX = 0,
			desY = 0,
			tX = 0,
			tY = 10;

		function applyTranform(obj) {
			// Constrain the angle of camera (between 0 and 180)
			if (tY > 180) tY = 180;
			if (tY < 0) tY = 0;

			// Apply the angle
			obj.style.transform = 'rotateX(' + -tY + 'deg) rotateY(' + tX + 'deg)';
		}

		function playSpin(yes) {
			if (spin.value) spin.value.style.animationPlayState = yes ? 'running' : 'paused';
		}

		onMounted(() => {
			init();
			setTimeout(animate, 1000);
		});

		return {
			drag,
			spin
		};
	}
};
</script>

<style lang="scss" scoped>
.body {
	height: 100%;
	overflow: hidden;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	background: #fff;
	-webkit-perspective: 1000px;
	perspective: 1000px;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
}
#drag-container,
#spin-container {
	position: relative;
	display: flex;
	margin: auto;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transform: rotateX(-10deg);
	transform: rotateX(-10deg);
}

#drag-container img,
#drag-container video {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	line-height: 200px;
	font-size: 50px;
	text-align: center;
	-webkit-box-shadow: 0 0 8px #fff;
	box-shadow: 0 0 8px #fff;
	-webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
}

#drag-container img:hover,
#drag-container video:hover {
	-webkit-box-shadow: 0 0 15px #fffd;
	box-shadow: 0 0 15px #fffd;
	-webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0007);
}

#drag-container p {
	font-family: Serif;
	position: absolute;
	top: 100%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%) rotateX(90deg);
	transform: translate(-50%, -50%) rotateX(90deg);
	color: #fff;
}

#ground {
	width: 900px;
	height: 900px;
	position: absolute;
	top: 100%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%) rotateX(90deg);
	transform: translate(-50%, -50%) rotateX(90deg);
	background: -webkit-radial-gradient(center center, farthest-side, #9993, transparent);
}

@-webkit-keyframes spin {
	from {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
	}
	to {
		-webkit-transform: rotateY(360deg);
		transform: rotateY(360deg);
	}
}

@keyframes spin {
	from {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
	}
	to {
		-webkit-transform: rotateY(360deg);
		transform: rotateY(360deg);
	}
}
@-webkit-keyframes spinRevert {
	from {
		-webkit-transform: rotateY(360deg);
		transform: rotateY(360deg);
	}
	to {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
	}
}
@keyframes spinRevert {
	from {
		-webkit-transform: rotateY(360deg);
		transform: rotateY(360deg);
	}
	to {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
	}
}
</style>
