import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'

import * as ActVsg from '../110.shade/01.visage.unit/visage.action'
import * as ActCan from '../110.shade/03.container.unit/container.action'
import * as ActTxt from '../110.shade/05.text.unit/text.action'
import * as ActGph from '../110.shade/04.graphic.unit/graphic.action'
import * as ActSpr from '../110.shade/06.sprite.unit/sprite.action'
import * as ActHex from '../110.shade/07.hexagon.unit/hexagon.action'
import * as ActFcg from '../110.shade/08.focigon.unit/focigon.action'



export type HelloWorld = string | number


export const mount = async (value: HelloWorld) => {
    console.log('sampleFunc:: ', value)

    const instance = getCurrentInstance();
    const SHADE = inject('SHADE')

    var bit = await SHADE['hunt']( ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { } });
    instance?.proxy?.$forceUpdate();

    return value
}

export const update = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const SHADE = inject('SHADE')

  var bit = await SHADE['hunt']( ActVsg.REMOVE_VISAGE, { idx: "vsg00" })
  bit = await SHADE['hunt']( ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { } })

  bit = await SHADE['hunt']( ActVsg.READ_VISAGE, { idx: "vsg00" })


  bit = await SHADE['hunt'](ActCan.WRITE_CONTAINER, { idx: "can00", src: 'vsg00' })
  var container = bit.canBit.dat.bit

  bit = await SHADE['hunt'](ActCan.SURFACE_CONTAINER, { idx: 'fce-can-00', src: "vsg00" });

  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "fce-can-00", dat: { bit: container } })

  bit = await SHADE['hunt'](ActGph.WRITE_GRAPHIC, { idx: 'gph00', dat: { h: 100, w: 40, x: 40, y: 40 } })
  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.gphBit.dat.bit } })

  bit = await SHADE['hunt'](ActGph.WRITE_GRAPHIC, { idx: 'gph01', dat: { h: 100, w: 40, x: 40, y: 40 } })
  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.gphBit.dat.bit } })

  var bit = await window['electronAPI'].openGame()
  console.log(JSON.stringify(bit))

  var bit = await window['electronAPI'].readHexmap('map00')
  var puff = JSON.parse(bit)

  var map = puff.mapBit.dat.grid
  bit = await SHADE['hunt'](ActHex.WRITE_HEXAGON, { idx: 'hex00', dat: { src: 'gph00', frm: 'hexmap', sze: 8, bit: map } })

  var bit = await window['electronAPI'].readFocus('foc00')
  var toot = JSON.parse(bit)

  toot.focBit.dat.gph = 'gph01'

  bit = await SHADE['hunt'](ActFcg.WRITE_FOCIGON, { idx: 'foc00', dat: { sze: 8,  fce:toot.focBit.dat.face, bit: toot.focBit.dat } })

  setInterval(async () => {


    console.log("spinnning...")

    var bit = await window['electronAPI'].spinRightFocus('foc00')
    var toot = JSON.parse(bit)

    bit = await SHADE['hunt'](ActFcg.WRITE_FOCIGON, { idx: 'foc00', dat: { sze: 8, fce:toot.focBit.dat.face, bit: toot.focBit.dat } })

  }, 1111)


  setInterval(async () => {


    console.log("forward...")

    var bit = await window['electronAPI'].forwardFocus('foc00')
    var toot = JSON.parse(bit)

    bit = await SHADE['hunt'](ActFcg.WRITE_FOCIGON, { idx: 'foc00', dat: { sze: 8, fce:toot.focBit.dat.face, bit: toot.focBit.dat } })

  }, 1333)


  return value
}

export const unmount = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const SHADE = inject('SHADE')

  var bit = await SHADE['hunt']( ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: {} });
  instance?.proxy?.$forceUpdate();

  return value
}

export type Shade <Type> = {
  hunt: Function;
} & Type

