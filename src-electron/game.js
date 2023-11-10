"use strict";

const ActMap = require('../002.space/03.hexmap.unit/hexmap.action')
const ActFoc = require('../002.space/01.focus.unit/focus.action')
const SHAPE = require('../002.space/val/shape')
const FOCUS = require('../002.space/val/focus')

Object.defineProperty(exports, "__esModule", { value: true });
var sim = {
    hunt: null,
    state: null
};


sim.open = (space) => { return open(space); };
var open = (space) => {



    init(space);

    var slv;
    const promo = new Promise((rslv, rjct) => (slv = rslv));

    //if (obj == null)
     //   obj = {};
    //if (obj.slv == null)
    //    obj.slv = (val0) => slv(val0);

   // return promo;
};

var init = async ( space ) => {

  console.log("open the game ")

  var bit;

  var idx = 'shape'

  bit = await space.hunt(ActMap.SHAPE_HEXMAP, { idx, dat: { frm: SHAPE.RECTANGLE, w: 33, h:33 } })

  var grid = bit.mapBit.dat.dat.bit;
  bit = await space.hunt(ActMap.WRITE_HEXMAP, { idx:"map00", dat: { bit: { grid } } })

  //bit = await space.hunt(ActMap.SHAPE_HEXMAP, { idx, dat: { frm: SHAPE.RECTANGLE, w: 33, h: 33 } })
  //var grid = bit.mapBit.dat.dat.bit;
  //bit = await space.hunt(ActMap.WRITE_HEXMAP, { idx:"map01", dat: { bit: { grid } } })

  //bit = await space.hunt(ActMap.SHAPE_HEXMAP, { idx, dat: { frm: SHAPE.RECTANGLE, w: 44, h: 44 } })
  //var grid = bit.mapBit.dat.dat.bit;
  //bit = await space.hunt(ActMap.WRITE_HEXMAP, { idx:"map02", dat: { bit: { grid } } })

  //bit = await space.hunt(ActMap.SHAPE_HEXMAP, { idx, dat: { frm: SHAPE.RECTANGLE, w: 55, h: 55 } })
  //var grid = bit.mapBit.dat.dat.bit;
  //bit = await space.hunt(ActMap.WRITE_HEXMAP, { idx:"map03", dat: { bit: { grid } } })

  bit = await space.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc00', src:'map00', dat: { typ: FOCUS.AVAS } })
  var avas = bit.focBit.dat


};

module.exports = sim;
