"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFrame = exports.createFrame = exports.removeFrame = exports.writeFrame = exports.readFrame = exports.updateFrame = exports.initFrame = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActGph = require("../../04.graphic.unit/graphic.action");
const ActVsg = require("../../01.visage.unit/visage.action");
const ActFme = require("../frame.action");
var bit, val, idx, dex, lst, dat;
const initFrame = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initFrame = initFrame;
const updateFrame = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActGph.READ_GRAPHIC, { idx: bal.idx });
    dat = bit.gphBit.dat;
    var graphic = dat.bit;
    if (graphic == null)
        return console.log("you have no graphic");
    if (graphic.clear == null)
        return console.log("you have no graphic clear");
    graphic.clear();
    graphic.beginFill(0xFF00FF);
    graphic.lineStyle(13, 0xFF0000);
    graphic.drawRoundedRect(0, 0, 33, 100, 5);
    if (bal.slv != null)
        return bal.slv({ gphBit: { idx: "update-graphic", dat: dat } });
    return cpy;
};
exports.updateFrame = updateFrame;
const readFrame = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = "frm00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActFme.CREATE_FRAME });
    if (slv != null)
        slv({ fmeBit: { idx: "read-frame", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readFrame = readFrame;
const writeFrame = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = "frm00";
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFme.CREATE_FRAME });
    ste.hunt(ActFme.UPDATE_FRAME, { idx: bal.idx });
    if (bal.slv != null)
        bal.slv({ fmeBit: { idx: "write-frame", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeFrame = writeFrame;
const removeFrame = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFme.DELETE_FRAME });
    if (bal.slv != null)
        bal.slv({ fmeBit: { idx: "remove-frame", dat: bit.clcBit } });
    return cpy;
};
exports.removeFrame = removeFrame;
//here is where things take meaning 
const createFrame = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src, typ: 'frame' };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    try {
        dat.bit = new PIXI.Graphics();
        ;
    }
    catch (e) {
        dat.dat = {};
    }
    if (dat.frm == null)
        dat.frm = GRAPHIC.ROUNDED_RECTANGLE;
    if (dat.w == null)
        dat.w = 333;
    if (dat.h == null)
        dat.h = 333;
    if (dat.x == null)
        dat.x = 0;
    if (dat.y == null)
        dat.y = 0;
    if (dat.a == null)
        dat.a = 1;
    if (dat.clr == null)
        dat.clr = 0x00FF00;
    if (dat.crv == null)
        dat.crv = 13;
    if (bal.src != null)
        bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat });
    if (bal.slv != null)
        return bal.slv({ fmeBit: { idx: "create-frame", dat: dat } });
    return cpy;
};
exports.createFrame = createFrame;
const deleteFrame = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-delete-frame", dat: {} } });
    bit = await ste.hunt(ActFme.READ_FRAME, { idx: bal.idx });
    var dat = bit.fmeBit.dat;
    var graphic = dat.bit;
    graphic.destroy();
    dat.bit = null;
    if (bal.slv != null)
        return bal.slv({ fmeBit: { idx: "delete-frame", dat } });
    return cpy;
};
exports.deleteFrame = deleteFrame;
const PIXI = require("pixi.js-legacy");
const GRAPHIC = require("../../val/graphic");
//# sourceMappingURL=frame.buzz.js.map