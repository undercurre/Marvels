<template>
	<MCalendar v-model:value="value" @change="getSelectDate"></MCalendar>
</template>

<script lang="ts" setup>
import { MCalendar } from 'marvels-plus/src/';
import { ref } from 'vue';

const value = ref(new Date('2024-04-02'));

function getSelectDate(date: Date) {
	console.log(date);
}
</script>
