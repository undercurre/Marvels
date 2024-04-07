<template>
	<div>
		<MTable :columns="columns" :tableData="tableData" />
	</div>
</template>

<script setup>
import { MTable } from 'marvels-plus/src/';

const columns = [
	{ key: 'id', label: 'ID' },
	{ key: 'name', label: 'Name' },
	{ key: 'age', label: 'Age' },
	{ key: 'city', label: 'City' }
];

const tableData = [
	{ id: 1, name: 'John', age: 30, city: 'New York' },
	{ id: 2, name: 'Alice', age: 25, city: 'Los Angeles' },
	{ id: 3, name: 'Bob', age: 35, city: 'Chicago' }
];
</script>
