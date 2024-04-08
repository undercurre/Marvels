# Scrollbar 滚动条

<div style="margin: 60px">
    <MScrollbar :height="100">
		<ul>
			<li v-for="i in 100" :key="i">{{ i }}</li>
		</ul>
	</MScrollbar>
</div>

```vue
<template>
	<MScrollbar :height="100">
		<ul>
			<li v-for="i in 100" :key="i">{{ i }}</li>
		</ul>
	</MScrollbar>
</template>
```
