import { boot } from 'quasar/wrappers'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import * as ActPly from '../acts/play.action'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( dat ) => {
  // something to do

  var win: any = window
  dat.app.provide('SHADE', win.SHADE)
  dat.app.provide('CONTROL', win.CONTROL)
  dat.app.provide('MQTT', win.MQTT)

  const prt = 8883;
  const local = 'mqtt://localhost:' + prt;
  const localBit = { idx: 'local', src: local };

  var bit = await win.SHADE.hunt( win.SHADE.ActShd.INIT_SHADE, { val: 1, dat: win.MQTT, src: local });
  var bit = await win.CONTROL.hunt( win.CONTROL.ActCtl.INIT_CONTROL, { val: 1, dat: win.MQTT, src: local });

})
