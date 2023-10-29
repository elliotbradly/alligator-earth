"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHexagon = exports.createHexagon = exports.removeHexagon = exports.writeHexagon = exports.readHexagon = exports.hexmapHexagon = exports.focusHexagon = exports.updateHexagon = exports.initHexagon = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActGph = require("../../04.graphic.unit/graphic.action");
const ActHex = require("../../07.hexagon.unit/hexagon.action");
const ActVsg = require("../../01.visage.unit/visage.action");
var bit, val, idx, dex, lst, dat;
const initHexagon = (cpy, bal, ste) => {
    return cpy;
};
exports.initHexagon = initHexagon;
const updateHexagon = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActHex.READ_HEXAGON, { idx: bal.idx });
    var dat = bit.hexBit.dat;
    var map = dat.map;
    if (map != null)
        switch (dat.frm) {
            case HEXAGON.FOCUS:
                ste.hunt(ActHex.FOCUS_HEXAGON, { dat, bit: bal.dat });
                break;
            case HEXAGON.HEXMAP:
                ste.hunt(ActHex.HEXMAP_HEXAGON, { dat, bit: bal.dat });
                break;
        }
    bal.slv({ hexBit: { idx: "update-hexagon", dat: dat } });
    return cpy;
};
exports.updateHexagon = updateHexagon;
const focusHexagon = async (cpy, bal, ste) => {
    return cpy;
};
exports.focusHexagon = focusHexagon;
const hexmapHexagon = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActGph.READ_GRAPHIC, { src: bal.src });
    var graphic = bit.gphBit.dat.bit;
    var hexmap = bal.bit;
    graphic.clear();
    const Hex = Honeycomb.extendHex({
        size: Number(33),
        orientation: 'pointy', // default: 'pointy'
    });
    const Grid = Honeycomb.defineGrid(Hex);
    const grid = Grid(hexmap.dat);
    var pct = .333;
    var scl = 3;
    graphic.lineStyle(3, 0x0000000, 1);
    grid.forEach((hex) => {
        const point = hex.toPoint();
        const corners = hex.corners().map((corner) => corner.add(point));
        const [firstCorner, ...otherCorners] = corners;
        graphic.moveTo(firstCorner.x * scl, firstCorner.y * scl * pct);
        otherCorners.forEach(({ x, y }) => graphic.lineTo(x * scl, y * scl * pct));
        graphic.lineTo(firstCorner.x * scl, firstCorner.y * scl * pct);
    });
    if (bal.slv != null)
        bal.slv({ hexBit: { idx: "hexmap-hexagon", dat: hexmap } });
    return cpy;
};
exports.hexmapHexagon = hexmapHexagon;
const readHexagon = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = "hex00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActHex.CREATE_HEXAGON });
    if (slv != null)
        slv({ hexBit: { idx: "read-hexagon", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readHexagon = readHexagon;
const writeHexagon = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActHex.CREATE_HEXAGON });
    ste.hunt(ActHex.UPDATE_HEXAGON, { idx: bal.idx, dat: bal.dat.dat });
    if (bal.slv != null)
        bal.slv({ hexBit: { idx: "write-hexagon", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeHexagon = writeHexagon;
const removeHexagon = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActHex.DELETE_HEXAGON });
    if (bal.slv != null)
        bal.slv({ hexBit: { idx: "replace-hexagon", dat: bit.clcBit } });
    return cpy;
};
exports.removeHexagon = removeHexagon;
const createHexagon = async (cpy, bal, ste) => {
    debugger;
    var dat = { idx: bal.idx, src: bal.src };
    for (var key in bal.dat) {
        if (key == 'dat')
            continue;
        dat[key] = bal.dat[key];
    }
    var hexagon = bal.dat.dat;
    if (hexagon != null) {
        dat.frm = hexagon.typ;
        dat.gph = hexagon.gph;
    }
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
        dat.frm = HEXAGON.HEXMAP;
    if (bal.src != null)
        bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat });
    bal.slv({ usrBit: { idx: "create-hexagon", dat: dat } });
    return cpy;
};
exports.createHexagon = createHexagon;
const deleteHexagon = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteHexagon = deleteHexagon;
const Honeycomb = require("honeycomb-grid");
const HEXAGON = require("../../val/hexagon");
//# sourceMappingURL=hexagon.buzz.js.map