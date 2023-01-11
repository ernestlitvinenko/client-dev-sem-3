<template>
<section class="intro">
    <div class="wrapper-row intro__wrapper items-center">
        <div class="intro__text-block">
            <h1>Topics and answers for your every questions</h1>

            <p class="opacity-50 hidden md:block">
                Supplication helps to find answer
                 for your questions.
                  We are collecting new questions and
                   answers every day
            </p>
            <button>
                Read the articles
            </button>
        </div>
        <img :src="Bro" alt="question-sign" class="intro__question-image">
    </div>
</section>
</template>

<script setup lang="ts">
    import Bro from '../assets/bro.svg'
</script>