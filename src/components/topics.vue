<template>
  <section class="topics">
    <div class="wrapper topics__wrpapper">
      <h2>Recent Topics</h2>
      <RouterLink v-for="item in posts" :to="`/topics/${item.id}`" :key="item.id">
        <article class="topics__topic topic">
          <img :src="item.img" alt="post_image" class="topic__image">
          <div class="topic__text-block">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <button>Read The topic</button>
          </div>
        </article>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from 'axios';
import {reactive} from 'vue'

import type {PostInterface} from "@/interfaces";


const posts = reactive<PostInterface[]>([])

async function recieveTopicsFromServer() {
  const response = await axios.get<PostInterface[]>('http://localhost:3000/topics')
  posts.length = 0
  posts.push(...response.data)
}

recieveTopicsFromServer()


</script>