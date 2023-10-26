<template>
  Inventory components part two

  <q-list>

    <InventoryItem />
    <InventoryItem />
    <InventoryItem />

  </q-list>

</template>

<script>
import { defineComponent } from 'vue'
import InventoryItem from 'components/InventoryItem.vue'

export default defineComponent({
  name: 'Inventory',
  components: {
    InventoryItem
  },
})
</script>
