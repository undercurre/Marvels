<template>
    <div class="website-content">
        <div class="header">
            <div class="h1">
                <slot></slot>
            </div>
            <div class="header-relealer"></div>
        </div>
    </div>

    <div class="loading-screen">
        <div class="loader">
            <div class="loader-1 bar"></div>
            <div class="loader-2 bar"></div>
        </div>

        <div class="counter">
            <div class="counter-1 digit" ref="counter1">
                <div class="num">0</div>
                <div class="num num1offset1">1</div>
            </div>
            <div class="counter-2 digit" ref="counter2">
                <div class="num">0</div>
                <div class="num num1offset2">1</div>
                <div class="num">2</div>
                <div class="num">3</div>
                <div class="num">4</div>
                <div class="num">5</div>
                <div class="num">6</div>
                <div class="num">7</div>
                <div class="num">8</div>
                <div class="num">9</div>
                <div class="num">0</div>
            </div>

            <div class="counter-3 digit" ref="counter3">
                <div class="num">0</div>
                <div class="num">1</div>
                <div class="num">2</div>
                <div class="num">3</div>
                <div class="num">4</div>
                <div class="num">5</div>
                <div class="num">6</div>
                <div class="num">7</div>
                <div class="num">8</div>
                <div class="num">9</div>
                <div class="num">0</div>
                <div class="num">1</div>
                <div class="num">2</div>
                <div class="num">3</div>
                <div class="num">4</div>
                <div class="num">5</div>
                <div class="num">6</div>
                <div class="num">7</div>
                <div class="num">8</div>
                <div class="num">9</div>
                <div class="num">0</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineComponent, onMounted } from 'vue';
import gsap from 'gsap';

defineComponent({
    name: 'MPreLoading',
});

const counter1 = ref<HTMLElement | null>(null);
const counter2 = ref<HTMLElement | null>(null);
const counter3 = ref<HTMLElement | null>(null);

onMounted(() => {
    gsap.to(counter3.value, {
        y: -2640,
        duration: 5,
        delay: 0,
        ease: 'power2.inOut',
    });
    gsap.to(counter2.value, {
        y: -1320,
        duration: 6,
        delay: 0,
        ease: 'power2.inOut',
    });
    gsap.to(counter1.value, {
        y: -132,
        duration: 2,
        delay: 4,
        ease: 'power2.inOut',
    });
    gsap.to('.digit', {
        top: '-300px',
        stagger: {
            amount: 0.25,
        },
        delay: 6,
        duration: 1,
        ease: 'power4.inOut',
    });
    gsap.from('.loader-1', {
        width: 0,
        duration: 6,
        ease: 'power2.inOut',
    });

    gsap.from('.loader-2', {
        width: 0,
        dalay: 1.9,
        duration: 2,
        ease: 'power2.inOut',
    });

    gsap.to('.loader', {
        background: 'none',
        delay: 6,
        duration: 0.1,
    });

    gsap.to('.loader-1', {
        rotate: 90,
        y: -50,
        delay: 6,
    });

    gsap.to(
        '.loader-2',
        {
            x: -75,
            y: 75,
            duration: 0.5,
        },
        '<',
    );

    gsap.to('.loader', {
        scale: 40,
        duration: 1,
        delay: 7,
        ease: 'power2.inOut',
    });

    gsap.to('.loader', {
        rotate: 45,
        y: 500,
        x: 2000,
        duration: 1,
        delay: 7,
        ease: 'power2.inOut',
    });

    gsap.to('.loading-screen', {
        opacity: 0,
        duration: 0.5,
        delay: 7.5,
        ease: 'power1.in',
    });

    gsap.to('h1', 1.5, {
        delay: 7,
        y: -80,
        ease: 'power4.inOut',
        stagger: {
            amount: 0.1,
        },
    });
});
</script>

<style lang="scss" scoped>
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
    pointer-events: none;
}

.counter {
    position: fixed;
    left: 50px;
    bottom: 50px;
    display: flex;
    height: 100px;
    font-size: 100px;
    /* line-height: 102px; */
    clip-path: polygon(0 0, 100% 0, 100% 100px, 0 100px);
    font-weight: 400;
}

.counter-1,
.counter-2,
.counter-3 {
    position: relative;
    top: -15px;
}

.num1offset1 {
    position: relative;
    right: -10px;
}

.num1offset2 {
    position: relative;
    right: -10px;
}

.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 50px;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: rgb(80, 80, 80);
}

.loader-1 {
    position: relative;
    background-color: #fff;
    width: 200px;
}

.loader-2 {
    position: relative;
    width: 100px;
    background-color: #fff;
}

.bar {
    height: 50px;
}

.website-content {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header {
    position: relative;
    width: max-content;
    height: max-content;
}

.heaer-revealer {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}

.heaer-revealer::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 105%;
    height: 110%;
    background-color: #fff;
    top: 80px;
}
</style>
