# 快速开始

本节将介绍如何在项目中使用 Marvels

## 用法

### 完整引入

```ts
// main.ts
import { createApp } from 'vue';
import MarvelsUI from 'marvels';
import 'marvels/lib/components/style.css';
import App from './App.vue';

const app = createApp(App);

app.use(MarvelsUI);
app.mount('#app');
```

### 手动导入

```ts
<template>
	<MButton>我是 MButton</MButton>
</template>

<script>
import { MButton } from 'marvels';
export default {
	components: { MButton }
};
</script>
```
