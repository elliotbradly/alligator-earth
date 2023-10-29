"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeGardenex = exports.updateGardenex = exports.openGardenex = exports.initGardenex = void 0;
var SHADE = global.SHADE;
var PLAY = global.PLAY;
var SPACE = global.SPACE;
var bit, dat;
const initGardenex = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initGardenex = initGardenex;
const openGardenex = async (cpy, bal, ste) => {
    if (bal.dat == null)
        bal.dat = {};
    var height = 1080;
    var title = bal.dat.title;
    var author = bal.dat.author;
    var codebase = bal.dat.codebase;
    bit = await SHADE.hunt(SHADE.ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 1080 } });
    return cpy;
};
exports.openGardenex = openGardenex;
const updateGardenex = async (cpy, bal, ste) => {
    if (bal.dat == null)
        bal.dat = {};
    var height = 1080;
    bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" });
    bit = await SHADE.hunt(SHADE.ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 720 } });
    bit = await SHADE.hunt(SHADE.ActVsg.READ_VISAGE, { idx: "vsg00" });
    bit = await SHADE.hunt(SHADE.ActCan.SURFACE_CONTAINER, { idx: 'fce-can-00', src: "vsg00" });
    //reflexive parent
    bit = await SHADE.hunt(SHADE.ActCan.WRITE_CONTAINER, { idx: "can00", src: 'vsg00', dat: { reflex: true } });
    var container = bit.canBit.dat.bit;
    bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: { bit: container } });
    bit = await SHADE.hunt(SHADE.ActCan.WRITE_CONTAINER, { idx: "can01", src: 'vsg00', dat: { reflex: true } });
    var container = bit.canBit.dat.bit;
    bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'can00', dat: { bit: container } });
    bit = await SHADE.hunt(SHADE.ActGph.WRITE_GRAPHIC, { idx: 'gph00', src: 'vsg00', dat: { s: 1 } });
    bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'can01', dat: bit.gphBit.dat });
    bit = await SHADE.hunt(SHADE.ActTxt.WRITE_TEXT, { idx: 'txt00', src: 'vsg00', dat: { txt: 'waiting for the call' } });
    bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'can01', dat: bit.txtBit.dat });
    //we need to give this back to the people who know how to build things
    bit = await SHADE.hunt(SHADE.ActGph.WRITE_GRAPHIC, { idx: 'gph01', src: 'vsg00', dat: { x: 0, y: 100, s: 1 } });
    bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'can01', dat: bit.gphBit.dat });
    //bit = await SHADE.hunt( SHADE.ActGph.WRITE_GRAPHIC, { idx: 'gph02', src: 'vsg00', dat: { x: 0, y: 0, h: 1984, w: 2048, clr: 0xFF0000 } });
    //bit = await SHADE.hunt( SHADE.ActCan.ADD_CONTAINER, { idx: 'can01', dat: bit.gphBit.dat });
    // bit = await SHADE.hunt( SHADE.ActGph.WRITE_GRAPHIC, { idx: 'gph03', src: 'vsg00', dat: { x: 0, y: 0, h: 1080, w: 1920, clr: 0x00FF00 } });
    //  bit = await SHADE.hunt( SHADE.ActCan.ADD_CONTAINER, { idx: 'can01', dat: bit.gphBit.dat });
    bit = await SHADE.hunt(SHADE.ActSpr.WRITE_SPRITE, { idx: 'spr00', src: 'vsg00', dat: { y: -311, src: "./img/train-stop/000.png" } });
    bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'can01', dat: bit.sprBit.dat });
    bit = await SHADE.hunt(SHADE.ActSpr.WRITE_SPRITE, { idx: 'spr01', src: 'vsg00', dat: { y: -311, src: "./img/karth/000.png" } });
    bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'can01', dat: bit.sprBit.dat });
    //const response = await fetch("./dat/hexmap/000.swamp.json");
    //const jsonData = await response.json();
    //bit = await SPACE.hunt(SPACE.ActMap.ADD_HEXMAP, { idx: 'map00', dat: { gph: 'gph00', dat: jsonData } });
    //dat = bit.mapBit.dat;
    //bit = await SHADE.hunt(SHADE.ActHex.WRITE_HEXAGON, { idx: 'hex00', src: 'vsg00', dat });
    setInterval(async () => {
        bit = await SHADE.hunt(SHADE.ActCan.REFLEXIVE_CONTAINER, { idx: 'can00' });
    }, 1111);
    return cpy;
};
exports.updateGardenex = updateGardenex;
const closeGardenex = async (cpy, bal, ste) => {
    if (bal.dat == null)
        bal.dat = {};
    console.log("unmounted..");
    bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" });
    return cpy;
};
exports.closeGardenex = closeGardenex;
//# sourceMappingURL=gardenex.buzz.js.map