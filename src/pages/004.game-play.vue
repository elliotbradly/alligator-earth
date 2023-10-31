<template>

  <div class="full-height row wrap justify-start items-start content-start">

    <canvas id="indexCanvas"> </canvas>

  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import * as ActShd from '../110.shade/00.shade.unit/shade.action'
import * as ActVsg from '../110.shade/01.visage.unit/visage.action'
import * as ActCan from '../110.shade/03.container.unit/container.action'

import {mount } from "../composables/screens"

const router = useRouter()
const route = useRoute()

const instance = getCurrentInstance();
const SHADE = inject('SHADE')

onMounted(async () => {

  var bit = await SHADE.hunt(SHADE.ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: {} });
  instance?.proxy?.$forceUpdate();

  mount('on')

  //alert(window.electron.store.get('foo'));
})

onUpdated(async () => {
  // text content should be the same as current `count.value`

  var bit = await SHADE.hunt( ActVsg.REMOVE_VISAGE, { idx: "vsg00" })
  bit = await SHADE.hunt( ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: {} })

  bit = await SHADE.hunt( ActVsg.READ_VISAGE, { idx: "vsg00" })

  bit = await SHADE.hunt( ActCan.WRITE_CONTAINER, { idx: "can00", src: 'vsg00' })
  bit = await SHADE.hunt( ActCan.SURFACE_CONTAINER, { idx: 'fce-can-00', src: "vsg00" });

})

onUnmounted(async () => {

  //console.log("unmounted..")
  var bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" })

})


</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GamePlay'
})
</script>
