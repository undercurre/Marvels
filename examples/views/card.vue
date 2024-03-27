<template>
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
</template>

<script lang="ts" setup>
import { MCard } from 'marvels/src/';

function moreMethod() {
	console.log(123);
}
</script>
