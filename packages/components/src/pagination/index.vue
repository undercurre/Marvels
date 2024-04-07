<template>
	<div>
		<div class="pagination">
			<div class="pagination-container">
				<div
					class="pagination-hover-overlay"
					:style="{
						left: 25 + 50 * activeIndex + 'px',
						backgroundColor: active === activeIndex ? '#00178a' : '#00c1dd'
					}"
				></div>
				<a href="#0" class="pagination-prev">
					<span class="icon-pagination icon-pagination-prev">
						<MIcon
							size="20"
							name="material-symbols:arrow-back-ios-rounded"
							class="icon material-icons"
						></MIcon>
					</span>
				</a>

				<a
					@mouseover="handleMouseOver(item)"
					@mouseleave="handleMouseLeave(item)"
					:style="{
						color:
							activeIndex === item || (active === item && active === activeIndex)
								? '#ffffff'
								: '#333D45'
					}"
					href="#0"
					v-for="item in max"
					:key="item"
					:class="{ active: active === item }"
					class="pagination-page-number"
					@click="handleClick(item)"
					>{{ item }}</a
				>

				<a href="#0" class="pagination-next">
					<span class="icon-pagination icon-pagination-next">
						<MIcon
							size="20"
							name="material-symbols:arrow-back-ios-rounded"
							class="icon material-icons"
						></MIcon>
					</span>
				</a>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$darkBlue: #00178a;
$black: #333d45;
$green: #00c1dd;

* {
	box-sizing: border-box;
	font-family: sans-serif;
	font-weight: 500;
	letter-spacing: 0;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility !important;
	-webkit-font-smoothing: antialiased !important;
}

html,
body {
	overflow-x: hidden;
	height: 100%;
}

html {
	text-rendering: optimizeLegibility;
}

body {
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f0f0f0;
}

a,
a:hover {
	text-decoration: none;
}

.pagination {
	display: flex;
	justify-content: center;

	.pagination-container {
		padding: 10px 0;
		border-radius: 8px;
		border: 1px solid rgba(#000, 0.1);
		background-color: #fff;
		display: inline-flex;
		position: relative;
		overflow: hidden;
	}

	.pagination-hover-overlay {
		background-color: $green;
		width: 50px;
		height: 50px;
		border-radius: 5px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		transition-duration: 0.5s;
		left: 75px;
		opacity: 1;
	}

	.icon-pagination {
		color: rgba($black, 0.5);
		font-size: 11px;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 3;
		background-color: #fff;
	}

	.pagination-prev {
		margin-right: 15px;
		margin-left: 10px;

		.icon-pagination-prev {
			transform: rotate(0deg);
		}
	}

	.pagination-next {
		margin-left: 15px;
		margin-right: 10px;

		.icon-pagination-next {
			transform: rotate(180deg);
		}
	}

	.pagination-page-number {
		border-radius: 5px;
		color: $black;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition-duration: 0.5s;
		position: relative;
		z-index: 2;
		font-weight: 700;
		font-size: 18px;

		&:hover {
			color: #fff;
		}

		&.active {
			color: #fff;
		}
	}
}
</style>

<script lang="ts">
import { ref, watch } from 'vue';
import MIcon from '../icon';

export default {
	name: 'MPagination',
	props: {
		active: {
			type: Number,
			default: 1
		},
		max: {
			type: Number,
			default: 1
		}
	},
	components: {
		MIcon
	},
	setup(props, { emit }) {
		const activeIndex = ref(1);

		const handleMouseOver = (item) => {
			activeIndex.value = item;
		};

		const handleMouseLeave = () => {
			activeIndex.value = props.active;
		};

		const handleClick = (item) => {
			emit('update:active', item);
		};

		watch(
			() => props.active,
			(newValue) => {
				activeIndex.value = newValue;
			},
			{
				immediate: true
			}
		);

		return { activeIndex, handleMouseOver, handleMouseLeave, handleClick };
	}
};
</script>
