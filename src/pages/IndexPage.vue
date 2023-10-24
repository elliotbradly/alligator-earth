<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-vertical.svg" style="width: 200px; height: 200px">
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const el = ref()

onMounted(() => {
  el.value // <div>
  router.push('/title')
})
</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
})
</script>
