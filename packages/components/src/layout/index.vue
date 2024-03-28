<template>
	<div class="layout">
		<div class="sidebar">
			<slot name="sidebar"></slot>
		</div>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.layout {
	display: flex;
	height: 100%;
}

.sidebar {
	flex: 0 0 auto;
	width: 300px;
	background-color: #f0f0f0;
}

.content {
	flex: 1;
	padding: 20px;
}
</style>
<script>
// https://codepen.io/azouaoui-med/pen/wpBadb
</script>
