<template>
	<div class="table">
		<table>
			<thead>
				<tr>
					<th v-for="column in columns" :key="column.key" @click="sortBy(column.key)">
						{{ column.label }}
						<span v-if="sortKey === column.key">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="row in sortedRows" :key="row.id">
					<td v-for="column in columns" :key="column.key">
						{{ row[column.key] }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const tableData = ref([
	{ id: 1, name: 'John', age: 30, city: 'New York' },
	{ id: 2, name: 'Alice', age: 25, city: 'Los Angeles' },
	{ id: 3, name: 'Bob', age: 35, city: 'Chicago' }
]);

const sortKey = ref(null);
const sortOrder = ref('asc');

const columns = [
	{ key: 'id', label: 'ID' },
	{ key: 'name', label: 'Name' },
	{ key: 'age', label: 'Age' },
	{ key: 'city', label: 'City' }
];

const sortedRows = computed(() => {
	if (!sortKey.value) return tableData.value;
	return [...tableData.value].sort((a, b) => {
		const aValue = a[sortKey.value];
		const bValue = b[sortKey.value];
		if (aValue === bValue) return 0;
		if (sortOrder.value === 'asc') {
			return aValue < bValue ? -1 : 1;
		} else {
			return aValue > bValue ? -1 : 1;
		}
	});
});

const sortBy = (key) => {
	if (sortKey.value === key) {
		sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
	} else {
		sortKey.value = key;
		sortOrder.value = 'asc';
	}
};
</script>

<style scoped>
.table {
	margin: 20px;
}

table {
	border-collapse: collapse;
	width: 100%;
}

th,
td {
	border: 1px solid #ddd;
	padding: 8px;
	text-align: left;
}

th {
	background-color: #f2f2f2;
	cursor: pointer;
}

th:hover {
	background-color: #ddd;
}
</style>
