<template>
	<div class="pen">
		<div class="row">
			<div class="col-sm-4">
				<nav class="navbar navbar-default" role="navigation">
					<div class="navbar-header">
						<span class="navbar-brand">{{ title }}</span>
						<div
							class="button navbar-toggle x"
							@click="collapseHandler"
							:class="{ collapsed: !active }"
						>
							<div class="icon-bar"></div>
							<div class="icon-bar"></div>
							<div class="icon-bar"></div>
						</div>
					</div>

					<div
						class="collapse navbar-collapse"
						:style="{
							height: active ? listHeight : '0px',
							borderTopColor: active ? 'rgba(255,255,255,0.1)' : '#121212'
						}"
						id="navbar-collapse-x"
					>
						<ul ref="list" class="nav navbar-nav navbar-right">
							<li
								data-toggle="collapse"
								v-for="i in items"
								:key="i"
								data-target="#navbar-collapse.in"
							>
								<span>{{ i }}</span>
							</li>
						</ul>
					</div>
					<!-- .navbar-collapse -->
				</nav>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue';

export default {
	name: 'MCollapse',
	props: {
		active: {
			type: Boolean,
			default: false
		},
		items: {
			type: Array<string>,
			default: []
		},
		title: {
			type: String,
			default: ''
		}
	},
	setup(props, { emit }) {
		const list = ref<HTMLElement | null>(null);
		function collapseHandler() {
			emit('update:active', !props.active);
		}

		const lis = ref(0);

		const listHeight = computed(() => {
			return lis.value * 40 + 7.5 * 2 + 'px';
		});

		onMounted(() => {
			if (list.value) lis.value = list.value.getElementsByTagName('li').length;
		});

		return {
			list,
			collapseHandler,
			listHeight
		};
	}
};
</script>

<style lang="scss" scoped>
.navbar-default {
	background-color: #222222;
	border-color: #121212;
	color: #ffffff;

	.navbar-header {
		box-sizing: border-box;
		min-height: 50px;
		border-color: #121212;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px;

		.button {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			width: 22px;
			height: 16px;
			background-color: transparent;
			box-shadow: none;

			.icon-bar {
				display: block;
				width: 22px;
				border: 1px solid #fff;
				border-radius: 2px;
				background-color: #ffffff;
				transition: all 0.2s;
			}
		}
	}
}

.navbar-collapse {
	border: 1px solid #121212;
	transition: all ease 0.2s;

	ul {
		padding: 7.5px 0;
	}

	li {
		min-height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 15px;
		padding-right: 15px;
	}
}

/* ANIMATED X */
.navbar-toggle.x .icon-bar:nth-of-type(1) {
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
	-webkit-transform-origin: 10% 10%;
	-ms-transform-origin: 10% 10%;
	transform-origin: 10% 10%;
}

.navbar-toggle.x .icon-bar:nth-of-type(2) {
	opacity: 0;
	filter: alpha(opacity=0);
}

.navbar-toggle.x .icon-bar:nth-of-type(3) {
	-webkit-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	transform: rotate(-45deg);
	-webkit-transform-origin: 10% 90%;
	-ms-transform-origin: 10% 90%;
	transform-origin: 10% 90%;
}

/* ANIMATED X COLLAPSED */
.navbar-toggle.x.collapsed .icon-bar:nth-of-type(1) {
	-webkit-transform: rotate(0);
	-ms-transform: rotate(0);
	transform: rotate(0);
}

.navbar-toggle.x.collapsed .icon-bar:nth-of-type(2) {
	opacity: 1;
	filter: alpha(opacity=100);
}

.navbar-toggle.x.collapsed .icon-bar:nth-of-type(3) {
	-webkit-transform: rotate(0);
	-ms-transform: rotate(0);
	transform: rotate(0);
}
/* END ANIMATED X */
</style>
