<template>
	<div class="container">
		<MLink type="success">
			<h1>success</h1>
		</MLink>
		<MLink type="primary">
			<h1>primary</h1>
		</MLink>
		<MLink type="warning">
			<h1>warning</h1>
		</MLink>
		<MLink type="danger">
			<h1>danger</h1>
		</MLink>
		<MLink type="info">
			<h1>info</h1>
		</MLink>
		<MLink type="default">
			<h1>default</h1>
		</MLink>
		<MLink type="danger" disabled>
			<h1>disabled</h1>
		</MLink>
	</div>
</template>

<script lang="ts" setup>
import { MLink } from 'marvels-plus/src';
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
}
</style>
