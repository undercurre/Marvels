<template>
	<div>
		<m-button></m-button>

		<m-input></m-input>

		<m-icon></m-icon>

		<MScrollbar :height="100">
			<ul>
				<li v-for="i in 100" :key="i">{{ i }}</li>
			</ul>
		</MScrollbar>

		<h2>亲爱的用户<MDivider type="vertical"></MDivider>你好</h2>

		<MAlert type="success" message="操作成功！" />
		<MAlert type="info" message="操作成功！" />
		<MAlert type="warning" message="操作成功！" />
		<MAlert type="error" message="操作成功！" />
		<MAlert type="like" message="操作成功！" />

		<MTab style="margin-top: 40px" :tabs="tabs"></MTab>

		<MCard
			:width="300"
			:height="175"
			@more="moreMethod"
			color="#f40103"
			description="Coca-Cola is a globally recognized beverage brand, famous for
                its classic carbonated soft drink and a variety of flavors.
                Established in 1886, it has become an iconic name in the
                industry."
			title="Cocacola"
		>
			<template v-slot:logo>
				<img style="width: 200px" src="./assets/cocacola.png" />
			</template>
			<template v-slot:good>
				<img style="height: 300px" src="./assets/colabottle.png" />
			</template>
		</MCard>

		<MSwitch v-model:value="theme"></MSwitch>

		<MLoading :is-loading="loading"></MLoading>

		<MProgress :percentage="10"></MProgress>

		<!-- <MCountdown :deadline="deadline"></MCountdown> -->

		<MFloat style="margin-left: 200px" :menu="menu"></MFloat>

		<MSteps :steps="steps" v-model:selected="selectedStep"></MSteps>

		<MCloud></MCloud>

		<MWaterDroplet>
			<h2>hahah</h2>
		</MWaterDroplet>

		<MPreLoading>
			<div>
				<h1>Website Content</h1>
			</div>
		</MPreLoading>
	</div>
</template>

<style></style>

<script lang="ts" setup>
import {
	MAlert,
	MScrollbar,
	MDivider,
	MTab,
	MCard,
	MSwitch,
	MLoading,
	MProgress,
	MCountdown,
	MFloat,
	MSteps,
	MCloud,
	MWaterDroplet,
	MPreLoading
} from 'marvels/src/';
import MButton from './displayers/button.vue';
import MInput from './displayers/input.vue';
import MIcon from './displayers/icon.vue';
import { ref } from 'vue';

const password = ref('');

const tabs = ['标签一', '标签二', '标签三', '标签四'];

function moreMethod() {
	console.log(123);
}

const theme = ref(true);

const loading = ref(false);

const deadline = new Date().getTime() + 2000000;

const menu: Array<{
	iconName: string;
	text: string;
}> = [
	{
		iconName: 'uil:setting',
		text: 'Setting'
	},
	{
		iconName: 'ph:copy-bold',
		text: 'Copy'
	},
	{
		iconName: 'material-symbols:delete-outline',
		text: 'Delete'
	}
];

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
