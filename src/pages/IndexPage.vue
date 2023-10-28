<template>
  <div id="terminal"></div>
  <canvas id="indexCanvas"> </canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { Terminal } from 'xterm';

const router = useRouter()
const route = useRoute()

const instance = getCurrentInstance();
const SHADE = inject('SHADE')

onMounted(async () => {


  //alert(window.electron.store.get('foo'));

  //where we get the data needed to begin the game
  //const filePath = await window.electronAPI.initGame()

  var bit = await window.electronAPI.openGame()
  console.log( JSON.stringify(bit )  )

  instance?.proxy?.$forceUpdate();


})

onUpdated(async () => {
  // text content should be the same as current `count.value`

  var bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" })
  bit = await SHADE.hunt(SHADE.ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 720 } })

  bit = await SHADE.hunt(SHADE.ActVsg.READ_VISAGE, { idx: "vsg00" })

  bit = await SHADE.hunt(SHADE.ActCan.WRITE_CONTAINER, { idx: "can00", src: 'vsg00' })
  bit = await SHADE.hunt(SHADE.ActCan.SURFACE_CONTAINER, { idx: 'fce-can-00', src: "vsg00" });


  router.push('./gameTest')


})

onUnmounted(async () => {

  console.log("unmounted..")
  var bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" })

})




</script>



<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
