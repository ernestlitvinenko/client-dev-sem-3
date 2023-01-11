<template>
    <Header :toggle-aside="toggle" />
        <aside class="bg-firefly absolute z-[100] top-0 right-0 sm:min-w-[365px] sm:max-w-[365px]  visible transition-all " :class="!!asideToggle || 'invisible translate-x-10 opacity-0' " >
            <div class="aside__wrapper flex flex-col min-h-screen">
                <div class="aside__user flex flex-row items-center justify-between flex-1 p-4">
                    <img :src="User" alt="User image" class="aside__user-image">
                        <div class="aside__user-text-block">
                            <span class="aside__username font-bold text-[1.75rem] block">
                                Ernest Litvinenko
                            </span>
                            <a href="#">Log Out</a>
                        </div>
                    
                </div>

                <div class="aside__menu p-4 text-2xl font-bold flex-1">
                    <ul>
                        <li v-for="navItem in menu" :key="navItem.menuName">
                            <a :href="navItem.href" class="font-bold block mb-5" :class="navItem.current && 'text-aquamarine'">{{ navItem.menuName }}</a>
                        </li>
                    </ul>
                </div>

                <button class="justify-self-end mb-10">Account Settings</button>
            </div>
        </aside>
    
    <main @click="toggleOff">
        <Intro />
        <Topics />
        
    </main>
</template>

<script setup lang="tsx">
    import { ref } from 'vue';
    import axios from 'axios'
    import Header from '../components/header.vue';
    import Intro from '../components/intro.vue';
    import Topics from '../components/topics.vue'
    import User from '../assets/user.png'

    const asideToggle = ref<boolean>(false)
    const menu = ref<{"menuName": string, "href": string, current?: boolean}[]>([
        {
            menuName: "Home",
            href: "#"
        },
        {
            menuName: "Recent Topics",
            href: "#",
            current: true,
        },
        {
            menuName: "Your Topics",
            href: "#"
        },
        {
            menuName: "Categories",
            href: "#"
        }
    ])

    function toggle() {
        asideToggle.value = !asideToggle.value
    }
    function toggleOff() {
        asideToggle.value = false
    }
</script>