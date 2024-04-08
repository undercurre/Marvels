# Steps 步骤条

<MSteps :steps="steps" v-model:selected="selectedStep"></MSteps>

<script lang="ts" setup>
import { ref } from 'vue';

const steps: Array<{
	title: string;
	description: string;
}> = [
	{
		title: 'Start order',
		description:
			'0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Prepare gift',
		description:
			'1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Pack gift',
		description:
			'22Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Decorate box',
		description:
			'333Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Send gift',
		description:
			'4444Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	}
];

const selectedStep = ref(3);
</script>

```vue
<template>
	<MSteps :steps="steps" v-model:selected="selectedStep"></MSteps>
</template>

<script lang="ts" setup>
import { MSteps } from 'marvels-plus/src/';
import { ref } from 'vue';

const steps: Array<{
	title: string;
	description: string;
}> = [
	{
		title: 'Start order',
		description:
			'0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Prepare gift',
		description:
			'1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Pack gift',
		description:
			'22Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Decorate box',
		description:
			'333Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	},
	{
		title: 'Send gift',
		description:
			'4444Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.'
	}
];

const selectedStep = ref(3);
</script>
```

# API

## Props

| 参数     | 说明   | 类型   | 默认值 |
| -------- | ------ | ------ | ------ |
| steps    | 步骤   | Array  | ——     |
| selected | 选中项 | Number | ——     |
