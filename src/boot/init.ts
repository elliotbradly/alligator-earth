import { boot } from 'quasar/wrappers'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( dat ) => {
  // something to do

  var win: any = window
  dat.app.provide('SHADE', win.SHADE)

  console.log("SHADE " + win.SHADE)

})
