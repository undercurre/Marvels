<template>
    <div class="clock">
        <flip-item
            :total="formatTime(deadline).day"
            :current="formatTime(remainingTime).day"
        />
        <flip-item
            :total="formatTime(deadline).hour"
            :current="formatTime(remainingTime).hour"
        />
        <flip-item
            :total="formatTime(deadline).minute"
            :current="formatTime(remainingTime).minute"
        />
        <flip-item
            :total="formatTime(deadline).second"
            :current="formatTime(remainingTime).second"
        />
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, onUnmounted, defineComponent } from 'vue';
import FlipItem from './components/flipItem.vue';

defineComponent({
    name: 'MCountdown',
});

const props = defineProps({
    deadline: {
        type: Number, // 截止日期的时间戳（毫秒）
        required: true,
    },
});

const currentTime = ref(new Date().getTime()); // 当前时间
const remainingTime = ref(props.deadline - currentTime.value); // 剩余时间

// 计算并格式化剩余时间
const formatTime = (time: number) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return {
        day: days,
        hour: hours,
        minute: minutes,
        second: seconds,
    };
};

// 使用 watch 监听 currentTime 变化
watch(
    () => currentTime.value,
    (newTime, oldTime) => {
        remainingTime.value = props.deadline - newTime;
        if (remainingTime.value < 1000) {
            clearInterval(timer);
        }
    },
);

// 更新当前时间的定时器
const timer = setInterval(() => {
    currentTime.value = new Date().getTime();
}, 1000);

// 在组件销毁时清除定时器
onUnmounted(() => {
    clearInterval(timer);
});
</script>

<style lang="scss" scoped>
.clock {
    display: flex;
}
</style>
