# Loading 加载

<div style="display: flex; justify-content: space-around; margin: 40px;">
<MLoading :is-loading="loading"></MLoading>
<MButton @click="startLoading">启动loading</MButton>
</div>

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(false);
function startLoading() {
	loading.value = true;
	setTimeout(() => {
		loading.value = false;
	}, 3000);
}
</script>

```vue
<MLoading :is-loading="loading"></MLoading>
```

# API

## Props

| 参数      | 说明                    | 类型   | 可选值 | 默认值 |
| --------- | ----------------------- | ------ | ------ | ------ |
| isLoading | 是否展开 loading 的标记 | string | ——     | ——     |
