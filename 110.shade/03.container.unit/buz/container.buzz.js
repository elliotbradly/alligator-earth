"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContainer = exports.surfaceContainer = exports.deleteContainer = exports.createContainer = exports.removeContainer = exports.writeContainer = exports.readContainer = exports.updateContainer = exports.initContainer = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActFce = require("../../02.surface.unit/surface.action");
const ActCan = require("../../03.container.unit/container.action");
const ActVsg = require("../../01.visage.unit/visage.action");
var bit, val, idx, dex, lst, dat;
const initContainer = (cpy, bal, ste) => {
    return cpy;
};
exports.initContainer = initContainer;
const updateContainer = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.idx });
    dat = bit.canBit.dat;
    var can = dat.bit;
    can.x = dat.x;
    can.y = dat.y;
    if (bal.slv != null)
        return bal.slv({ canBit: { idx: "update-container", dat } });
    return cpy;
};
exports.updateContainer = updateContainer;
const readContainer = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActCan.CREATE_CONTAINER });
    if (slv != null)
        slv({ canBit: { idx: "read-container", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readContainer = readContainer;
const writeContainer = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCan.CREATE_CONTAINER });
    ste.hunt(ActCan.UPDATE_CONTAINER, { idx: bal.idx });
    if (bal.slv != null)
        bal.slv({ canBit: { idx: "write-container", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeContainer = writeContainer;
const removeContainer = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCan.DELETE_CONTAINER });
    if (bal.slv != null)
        bal.slv({ vsgBit: { idx: "remove-container", dat: bit.clcBit } });
    return cpy;
};
exports.removeContainer = removeContainer;
const createContainer = async (cpy, bal, ste) => {
    //you have a source visage
    //now you wish to update a bit of the source visage 
    var dat = { idx: bal.idx, src: bal.src, typ: SHADE.CONTAINER, x: 0, y: 0 };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    try {
        dat.bit = new PIXI.Container();
    }
    catch (e) {
        dat.dat = {};
    }
    console.log("nesting " + JSON.stringify(dat.typ));
    if (bal.src != null)
        bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat });
    if (bal.slv != null)
        return bal.slv({ canBit: { idx: "create-container", dat } });
    return cpy;
};
exports.createContainer = createContainer;
const deleteContainer = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-delete-container", dat: {} } });
    bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.idx });
    var dat = bit.canBit.dat;
    var container = dat.bit;
    container.destroy();
    dat.bit = null;
    if (bal.slv != null)
        return bal.slv({ vsgBit: { idx: "delete-container", dat } });
    return cpy;
};
exports.deleteContainer = deleteContainer;
const surfaceContainer = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFce.READ_SURFACE, { idx: bal.src });
    var app = bit.fceBit.dat.bit;
    var stage = app.stage;
    bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.idx });
    var can = bit.canBit.dat.bit;
    stage.addChild(can);
    //var graphic = new PIXI.Graphics();
    //graphic.lineStyle(3, dat.clr);
    //graphic.drawRect(0, 0, 25, 1080);
    //can.addChild( graphic)
    if (bal.slv != null)
        return bal.slv({ canBit: { idx: "surface-container", dat: bal } });
    return cpy;
};
exports.surfaceContainer = surfaceContainer;
const addContainer = async (cpy, bal, ste) => {
    var content = bal.dat.bit;
    if (bit == null)
        return bal.slv({ canBit: { idx: "add-container-error", dat: bal } });
    bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.idx });
    var can = bit.canBit.dat.bit;
    can.addChild(content);
    //var graphic = new PIXI.Graphics();
    //graphic.lineStyle(3, 0x00FF00);
    //graphic.drawRect(0, 720, 720, 1080);
    //content.addChild( graphic)
    if (bal.slv != null)
        return bal.slv({ canBit: { idx: "add-container", dat: bal } });
    return cpy;
};
exports.addContainer = addContainer;
const SHADE = require("../../val/shade");
const PIXI = require("pixi.js-legacy");
//# sourceMappingURL=container.buzz.js.map