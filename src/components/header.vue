<template>
    <header @click="toggleAside" class="header">
        <div class="wrapper-row header__wrapper ">
            <RouterLink to="/" class="hidden dark:block">
              <img :src="LogoDark" alt="Logo" class="hidden dark:block">
            </RouterLink>

            <RouterLink to="/" class="dark:hidden">
              <img :src="LogoLight" alt="Logo" class="block ">
            </RouterLink>
            <a href="#" class="header__user-btn">
                <img :src="UserLogoDark" alt="user_icon" class="hidden dark:block">
                <img :src="UserLogoLight" alt="user_icon" class="block dark:hidden">
            </a>    
        </div>
    </header>
</template>

<script setup lang="ts">

const props = defineProps(['toggleAside'])

import LogoDark from '../assets/logo.svg'
import LogoLight from '../assets/LogoLight.svg'

import UserLogoLight from '../assets/user-logo-light.svg'
import UserLogoDark from '../assets/user-logo.svg'

</script>