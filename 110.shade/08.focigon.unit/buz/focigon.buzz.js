"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFocigon = exports.createFocigon = exports.removeFocigon = exports.writeFocigon = exports.readFocigon = exports.updateFocigon = exports.initFocigon = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActGph = require("../../04.graphic.unit/graphic.action");
const ActVsg = require("../../01.visage.unit/visage.action");
const ActFcg = require("../../08.focigon.unit/focigon.action");
var bit, val, idx, dex, lst, dat;
const initFocigon = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initFocigon = initFocigon;
const updateFocigon = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFcg.READ_FOCIGON, { idx: bal.idx });
    var dat = bit.fcgBit.dat;
    bit = await ste.hunt(ActGph.READ_GRAPHIC, { idx: dat.gph });
    var graphic = bit.gphBit.dat.bit;
    if (graphic == null)
        return console.log("no graphic to draw map upon");
    if (dat.wpe == true)
        graphic.clear();
    graphic.lineStyle(dat.lne, dat.clr, 1);
    graphic.beginFill(dat.clr);
    var scl = 3;
    var pct = .33;
    const [firstCorner, ...otherCorners] = dat.crns;
    graphic.moveTo(firstCorner.x * scl, firstCorner.y * scl * pct);
    otherCorners.forEach(({ x, y }) => graphic.lineTo(x * scl, y * scl * pct));
    graphic.lineTo(firstCorner.x * scl, firstCorner.y * scl * pct);
    graphic.alpha = dat.a;
    graphic.endFill();
    if (dat.fce != null) {
        var corners = dat.crns;
        switch (dat.fce) {
            case DIRECTION.NORTH_EAST:
                dat.crn0 = corners[5];
                dat.crn1 = corners[0];
                break;
            case DIRECTION.NORTH_WEST:
                dat.crn0 = corners[4];
                dat.crn1 = corners[5];
                break;
            case DIRECTION.EAST:
                dat.crn0 = corners[0];
                dat.crn1 = corners[1];
                break;
            case DIRECTION.SOUTH_EAST:
                dat.crn0 = corners[1];
                dat.crn1 = corners[2];
                break;
            case DIRECTION.SOUTH_WEST:
                dat.crn0 = corners[2];
                dat.crn1 = corners[3];
                break;
            case DIRECTION.WEST:
                dat.crn0 = corners[3];
                dat.crn1 = corners[4];
                break;
            case DIRECTION.SOUTH_EAST:
                dat.crn0 = corners[4];
                dat.crn1 = corners[5];
                break;
        }
        var faceClr = 0x00ff00;
        //if (bal.bonds[bal.face] == null) faceClr = 0xff0000;
        graphic.lineStyle(5, faceClr, 1);
        graphic.moveTo(dat.crn0.x * scl, dat.crn0.y * scl * pct);
        graphic.lineTo(dat.crn1.x * scl, dat.crn1.y * scl * pct);
    }
    //cpy.hexBale = bal;
    if (bal.slv != null)
        bal.slv({ fcgBit: { idx: "update-focigon", dat: focus } });
    return cpy;
};
exports.updateFocigon = updateFocigon;
const readFocigon = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = "hex00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActFcg.CREATE_FOCIGON });
    if (slv != null)
        slv({ fcgBit: { idx: "read-focigon", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readFocigon = readFocigon;
const writeFocigon = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFcg.CREATE_FOCIGON });
    ste.hunt(ActFcg.UPDATE_FOCIGON, { idx: bal.idx, dat: bal.dat.dat });
    if (bal.slv != null)
        bal.slv({ fcgBit: { idx: "write-focigon", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeFocigon = writeFocigon;
const removeFocigon = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFcg.DELETE_FOCIGON });
    if (bal.slv != null)
        bal.slv({ fcgBit: { idx: "remove-focigon", dat: bit.clcBit } });
    return cpy;
};
exports.removeFocigon = removeFocigon;
const createFocigon = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src };
    for (var key in bal.dat) {
        if (key == 'dat')
            continue;
        dat[key] = bal.dat[key];
    }
    var focus = bal.dat.dat;
    dat.fce = focus.face;
    dat.frm = focus.typ;
    dat.gph = focus.gph;
    dat.crns = focus.corners;
    //there is the issue no corners
    if (dat.clr == null)
        dat.clr = 0x0000000;
    if (dat.lne == null)
        dat.lne = 2;
    if (dat.wpe == null)
        dat.wpe = true;
    if (dat.a == null)
        dat.a = 1;
    if (dat.pct == null)
        dat.pct = 1;
    if (dat.frm == null)
        dat.frm = 'f';
    if (dat.fce == null)
        dat.fce = 'E';
    if (bal.src != null)
        bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat });
    bal.slv({ fcgBit: { idx: "create-focigon", dat: dat } });
    return cpy;
};
exports.createFocigon = createFocigon;
const deleteFocigon = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteFocigon = deleteFocigon;
const DIRECTION = require("../../val/direction");
//# sourceMappingURL=focigon.buzz.js.map