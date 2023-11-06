"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHexmap = void 0;
const ActFoc = require("../../01.focus.unit/focus.action");
var bit, idx, lst, dat, val, src;
const createHexmap = async (cpy, bal, ste) => {
    var clone = require("clone-deep");
    var dat = { idx: bal.idx, typ: SPACE.HEXMAP };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    dat;
    const Hex = Honeycomb.extendHex({
        size: Number(1),
        orientation: "pointy",
    });
    const Grid = Honeycomb.defineGrid(Hex);
    var copied = clone(dat.bit.grid);
    dat.grid = Grid(copied);
    var size = dat.grid.length;
    var next = async () => {
        size -= 1;
        var itm = dat.grid[size];
        var hex = itm.hex;
        bit = await ste.bus(ActFoc.WRITE_FOCUS, { idx: hex, dat: { x: itm.x, y: itm.y, } });
        if (size == 0) {
            if (bal.slv != null)
                bal.slv({ mapBit: { idx: "create-hexmap", dat } });
            return;
        }
        await next();
    };
    next();
    if (dat.bit == null) {
        if (bal.slv != null)
            bal.slv({ mapBit: { idx: "create-hexmap-error", src: "no bit present" } });
        return;
    }
    return cpy;
};
exports.createHexmap = createHexmap;
const Honeycomb = require("honeycomb-grid");
const SPACE = require("../../val/space");
//# sourceMappingURL=create-hexmap.js.map