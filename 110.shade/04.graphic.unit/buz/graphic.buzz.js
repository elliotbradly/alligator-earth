"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGraphic = exports.createGraphic = exports.removeGraphic = exports.writeGraphic = exports.readGraphic = exports.updateGraphic = exports.initGraphic = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActGph = require("../../04.graphic.unit/graphic.action");
const ActVsg = require("../../01.visage.unit/visage.action");
var bit, val, idx, dex, lst, dat;
const initGraphic = (cpy, bal, ste) => {
    return cpy;
};
exports.initGraphic = initGraphic;
const updateGraphic = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActGph.READ_GRAPHIC, { idx: bal.idx });
    dat = bit.gphBit.dat;
    var graphic = dat.bit;
    graphic.clear();
    switch (dat.frm) {
        case GRAPHIC.CIRCLE:
            graphic.beginFill(dat.clr); // Red
            graphic.drawCircle(dat.x, dat.y, dat.w); //
            break;
        case GRAPHIC.RECTANGLE:
            graphic.beginFill(dat.clr);
            graphic.lineStyle(3, dat.clr);
            graphic.drawRect(dat.x, dat.y, dat.w, dat.h);
            break;
        case GRAPHIC.ROUNDED_RECTANGLE:
            graphic.beginFill(dat.clr);
            graphic.lineStyle(3, dat.clr);
            graphic.drawRoundedRect(dat.x, dat.y, dat.w, dat.h, dat.crv);
            break;
    }
    if (bal.slv != null)
        return bal.slv({ gphBit: { idx: "update-graphic", dat: dat } });
    return cpy;
};
exports.updateGraphic = updateGraphic;
const readGraphic = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = "gph00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActGph.CREATE_GRAPHIC });
    if (slv != null)
        slv({ gphBit: { idx: "read-graphic", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readGraphic = readGraphic;
const writeGraphic = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = "gph00";
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActGph.CREATE_GRAPHIC });
    ste.hunt(ActGph.UPDATE_GRAPHIC, { idx: bal.idx });
    if (bal.slv != null)
        bal.slv({ gphBit: { idx: "write-graphic", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeGraphic = writeGraphic;
const removeGraphic = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActGph.DELETE_GRAPHIC });
    if (bal.slv != null)
        bal.slv({ vsgBit: { idx: "remove-graphic", dat: bit.clcBit } });
    return cpy;
};
exports.removeGraphic = removeGraphic;
const createGraphic = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src, typ: SHADE.GRAPHIC };
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
        return bal.slv({ gphBit: { idx: "create-graphic", dat: dat } });
    return cpy;
};
exports.createGraphic = createGraphic;
const deleteGraphic = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-delete-graphic", dat: {} } });
    bit = await ste.hunt(ActGph.READ_GRAPHIC, { idx: bal.idx });
    var dat = bit.gphBit.dat;
    var graphic = dat.bit;
    graphic.destroy();
    dat.bit = null;
    if (bal.slv != null)
        return bal.slv({ vsgBit: { idx: "delete-graphic", dat } });
    return cpy;
};
exports.deleteGraphic = deleteGraphic;
const PIXI = require("pixi.js-legacy");
const GRAPHIC = require("../../val/graphic");
const SHADE = require("../../val/shade");
//# sourceMappingURL=graphic.buzz.js.map