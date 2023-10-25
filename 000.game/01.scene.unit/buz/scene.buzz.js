"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prologueScene = exports.huntScene = exports.spaceScene = exports.titleScene = exports.updateScene = exports.initScene = void 0;
const ActCvs = require("../../act/canvas.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
var bit, val, idx, dex, lst, dat;
const initScene = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initScene = initScene;
const updateScene = (cpy, bal, ste) => {
    return cpy;
};
exports.updateScene = updateScene;
const titleScene = async (cpy, bal, ste) => {
    lst = ['new', 'load', 'settings', 'quit'];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 2, y: 0, xSpan: 12, ySpan: 12 });
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 2, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 11, xSpan: 2, ySpan: 2 });
    bit = await ste.bus(ActChc.KEY_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    if (bal.slv != null)
        bal.slv({ scnBit: { idx: "title-scene" } });
    return cpy;
};
exports.titleScene = titleScene;
const spaceScene = async (cpy, bal, ste) => {
    lst = ['spin clkwse', 'spin counter', 'backward', 'forwards'];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 2, y: 0, xSpan: 6, ySpan: 12 });
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 2, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 11, xSpan: 2, ySpan: 2 });
    bit = await ste.bus(ActChc.KEY_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    return cpy;
};
exports.spaceScene = spaceScene;
const huntScene = async (cpy, bal, ste) => {
    //let xPos = 0
    //setInterval( async ()=>{
    // xPos += 1
    //  bit = await ste.hunt(ActTxt.WRITE_TEXT, { idx: 'txt1', dat: { x:xPos } })
    //}, 1111)
    return cpy;
};
exports.huntScene = huntScene;
const prologueScene = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.prologueScene = prologueScene;
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=scene.buzz.js.map