"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteText = exports.createText = exports.removeText = exports.writeText = exports.readText = exports.updateText = exports.initText = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActTxt = require("../../05.text.unit/text.action");
const ActVsg = require("../../01.visage.unit/visage.action");
var bit, val, idx, dex, lst, dat;
const initText = (cpy, bal, ste) => {
    return cpy;
};
exports.initText = initText;
const updateText = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActTxt.READ_TEXT, { idx: bal.idx });
    dat = bit.txtBit.dat;
    var text = dat.bit;
    text.text = dat.txt;
    text.x = dat.x;
    text.y = dat.y;
    if (bal.slv != null)
        return bal.slv({ txtBit: { idx: "update-text", dat: dat } });
    return cpy;
};
exports.updateText = updateText;
const readText = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'txt00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActTxt.CREATE_TEXT });
    if (slv != null)
        slv({ txtBit: { idx: "read-text", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readText = readText;
const writeText = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = "txt00";
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActTxt.CREATE_TEXT });
    ste.hunt(ActTxt.UPDATE_TEXT, { idx: bal.idx });
    if (bal.slv != null)
        bal.slv({ txtBit: { idx: "write-text", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeText = writeText;
const removeText = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActTxt.DELETE_TEXT });
    if (bal.slv != null)
        bal.slv({ vsgBit: { idx: "remove-text", dat: bit.clcBit } });
    return cpy;
};
exports.removeText = removeText;
const createText = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src, typ: SHADE.TEXT };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    if (dat.txt == null)
        dat.txt = 'create text';
    if (dat.x == null)
        dat.x = 0;
    if (dat.y == null)
        dat.y = 0;
    if (dat.fnt == null)
        dat.fnt = "Arial";
    if (dat.wrp == null)
        dat.wrp = 300;
    if (dat.a == null)
        dat.a = 1;
    if (dat.clr == null)
        dat.clr = 0x000000;
    try {
        dat.bit = new PIXI.Text(dat.txt);
        dat.bit.style = new PIXI.TextStyle({
            fontFamily: dat.fnt,
            fontSize: dat.sze,
            wordWrap: true,
            wordWrapWidth: dat.wrp,
            fill: dat.clr,
            align: "right",
        });
    }
    catch (e) {
        dat.dat = {};
    }
    if (bal.src != null)
        bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat });
    if (bal.slv != null)
        return bal.slv({ txtBit: { idx: "create-text", dat } });
    return cpy;
};
exports.createText = createText;
const deleteText = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-delete-text", dat: {} } });
    bit = await ste.hunt(ActTxt.READ_TEXT, { idx: bal.idx });
    var dat = bit.txtBit.dat;
    var text = dat.bit;
    text.destroy();
    dat.bit = null;
    if (bal.slv != null)
        return bal.slv({ vsgBit: { idx: "delete-text", dat } });
    return cpy;
};
exports.deleteText = deleteText;
const PIXI = require("pixi.js-legacy");
const SHADE = require("../../val/shade");
//# sourceMappingURL=text.buzz.js.map