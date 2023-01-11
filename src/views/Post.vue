<template>
  <Header/>

  <main>
    <section class="blog">
      <div class="wrapper">
        <span class="text-lg opacity-50 block mb-4">
          Author of this thread is: {{ postData.author }}
        </span>
        <h1 class="text-4xl dark:text-aquamarine">{{ postData.title }}</h1>
        <p class="text-xl">{{ postData.description }}</p>


        <form @submit.prevent="sendComment" action="#" class="mb-8">
          <div class="form__group flex flex-col mb-8">
            <label for="#" class="text-lg my-4">Your username</label>
            <input v-model="username" type="text" placeholder="ernest"
                   class="bg-transparent border-[1px] border-solid border-midAquamarine p-4 text-lg rounded-2xl focus:outline-0 focus:border-aquamarine text-aquamarine placeholder-envy placeholder-opacity-80 transition-all"
            >
          </div>

          <div class="form__group flex flex-col mb-8">
            <label for="#" class="text-lg my-4">Your text</label>
            <textarea v-model="text" cols="50"
                      class="bg-transparent border-[1px] border-solid border-midAquamarine p-4 text-lg rounded-2xl focus:outline-0 focus:border-aquamarine text-aquamarine placeholder-envy placeholder-opacity-80 transition-all"></textarea>
          </div>

          <button type="submit">Send answer</button>
        </form>


        <h2 class="text-3xl">Answers:</h2>

        <div v-for="comment in commentsData" class="blog__answer
text-lg p-4 mb-8 border-aquamarine border-[1px] border-solid" :key="comment.id">
          <h3 class="text-2xl">{{comment.author}}</h3>
          <p>{{comment.text}}</p>
        </div>


      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
import Header from '../components/header.vue';
import router from "@/router";
import axios from "axios";
import {ref} from "vue";

import type {Comments, PostInterface} from "@/interfaces";

const postData = ref<PostInterface>()
const commentsData = ref<Comments[]>()
const username = ref<string>()
const text = ref<string>()

async function retirievePostInfo() {
  const topicId = +router.currentRoute.value.params.id
  const usualData = await axios.get<PostInterface>(`http://localhost:3000/topics/${topicId}`)
  const comments = await axios.get<Comments[]>(`http://localhost:3000/comments/`, {
    params: {
      'topic_id': topicId
    }
  })
  postData.value = Object.assign({}, usualData.data)
  commentsData.value = Object.assign({}, comments.data)
}

async function sendComment() {
  const response = axios.post('http://localhost:3000/comments/', {
    author: username.value,
    topic_id: +router.currentRoute.value.params.id,
    text: text.value
  })
  await retirievePostInfo()
}

retirievePostInfo()


</script>