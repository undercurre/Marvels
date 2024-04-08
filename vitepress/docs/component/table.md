# Table 表格

<div style="margin: 60px">
   <MTable :columns="columns" :tableData="tableData" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

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

```vue
<template>
	<MTable :columns="columns" :tableData="tableData" />
</template>

<script lang="ts" setup>
import { MSwitch } from 'marvels-plus/src/';
import { ref } from 'vue';

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
```

# API

## Props

| 参数      | 说明   | 类型  | 默认值 |
| --------- | ------ | ----- | ------ |
| columns   | 表格项 | Array | []     |
| tableData | 数据   | Array | []     |
