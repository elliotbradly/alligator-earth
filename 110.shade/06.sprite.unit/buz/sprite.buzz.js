"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSprite = exports.createSprite = exports.removeSprite = exports.writeSprite = exports.readSprite = exports.updateSprite = exports.initSprite = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActSpr = require("../../06.sprite.unit/sprite.action");
const ActVsg = require("../../01.visage.unit/visage.action");
var bit, val, idx, dex, lst, dat;
const initSprite = (cpy, bal, ste) => {
    return cpy;
};
exports.initSprite = initSprite;
const updateSprite = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActSpr.READ_SPRITE, { idx: bal.idx });
    dat = bit.sprBit.dat;
    var sprite = dat.bit;
    sprite.x = dat.x;
    sprite.y = dat.y;
    if (bal.slv != null)
        return bal.slv({ sprBit: { idx: "update-sprite", dat: dat } });
    return cpy;
};
exports.updateSprite = updateSprite;
const readSprite = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = "spr00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActSpr.CREATE_SPRITE });
    if (slv != null)
        slv({ sprBit: { idx: "read-sprite", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readSprite = readSprite;
const writeSprite = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSpr.CREATE_SPRITE });
    ste.hunt(ActSpr.UPDATE_SPRITE, { idx: bal.idx });
    if (bal.slv != null)
        bal.slv({ sprBit: { idx: "write-sprite", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeSprite = writeSprite;
const removeSprite = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSpr.DELETE_SPRITE });
    if (bal.slv != null)
        bal.slv({ vsgBit: { idx: "remove-text", dat: bit.clcBit } });
    return cpy;
};
exports.removeSprite = removeSprite;
const createSprite = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src, typ: SHADE.SPRITE };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    if (dat.x == null)
        dat.x = 0;
    if (dat.y == null)
        dat.y = 0;
    if (dat.r == null)
        dat.r = 0;
    if (dat.s == null)
        dat.s = 1;
    if (dat.a == null)
        dat.a = 1;
    if (dat.src == null)
        dat.src = './img/000.png';
    try {
        dat.bit = PIXI.Sprite.from(dat.src);
    }
    catch (e) {
        dat.dat = {};
    }
    if (bal.src != null)
        bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat });
    if (bal.slv != null)
        return bal.slv({ sprBit: { idx: "create-sprite", dat } });
    return cpy;
};
exports.createSprite = createSprite;
const deleteSprite = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-delete-graphic", dat: {} } });
    bit = await ste.hunt(ActSpr.READ_SPRITE, { idx: bal.idx });
    var dat = bit.sprBit.dat;
    var sprite = dat.bit;
    sprite.destroy();
    dat.bit = null;
    if (bal.slv != null)
        return bal.slv({ vsgBit: { idx: "delete-sprite", dat } });
    return cpy;
};
exports.deleteSprite = deleteSprite;
const PIXI = require("pixi.js-legacy");
const SHADE = require("../../val/shade");
//# sourceMappingURL=sprite.buzz.js.map