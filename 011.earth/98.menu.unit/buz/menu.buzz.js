"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.earthMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActMnu = require("../menu.action");
const ActErt = require("../../00.earth.unit/earth.action");
const ActPvt = require("../../96.pivot.unit/pivot.action");
const ActTrm = require("../../act/terminal.action");
var bit, lst, dex, dat;
var sim;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActTrm.INIT_TERMINAL, {});
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Earth PIVOT V0" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    var lst = [ActMnu.EARTH_MENU, ActMnu.COLOR_MENU, ActMnu.CLOCK_MENU, ActPvt.UPDATE_PIVOT];
    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    switch (idx) {
        case ActPvt.UPDATE_PIVOT:
            bit = await ste.hunt(ActPvt.UPDATE_PIVOT, {});
            break;
        case ActMnu.CLOCK_MENU:
            bit = await ste.hunt(ActMnu.CLOCK_MENU, {});
            break;
        case ActMnu.EARTH_MENU:
            bit = await ste.hunt(ActMnu.EARTH_MENU, {});
            break;
        case ActMnu.CLOCK_MENU:
            bit = await ste.hunt(ActMnu.CLOCK_MENU, {});
            break;
        case ActMnu.COLOR_MENU:
            bit = await ste.hunt(ActMnu.COLOR_MENU, {});
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.updateMenu = updateMenu;
const testMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.testMenu = testMenu;
const closeMenu = async (cpy, bal, ste) => {
    await ste.bus(ActTrm.CLOSE_TERMINAL, {});
    return cpy;
};
exports.closeMenu = closeMenu;
var view = async (sim, ste) => {
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: sim.idx + ' ::: ' + sim.src + ' ::: ' + sim.cde });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: sim.clkBit.src });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(sim.fte) + " ::::  " + JSON.stringify(sim.pow) });
};
const earthMenu = async (cpy, bal, ste) => {
    lst = [ActErt.READ_EARTH, ActErt.PUSH_EARTH, ActErt.OPEN_EARTH, ActErt.AUTO_EARTH];
    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    switch (idx) {
        case ActErt.READ_EARTH:
            setInterval(async () => {
                bit = await ste.hunt(ActErt.READ_EARTH, { idx: sim.idx });
                sim = bit.ertBit.dat;
                var clkBit = sim.clkBit;
                view(sim, ste);
            }, 3333);
            break;
        case ActErt.PUSH_EARTH:
            bit = await ste.hunt(ActErt.PUSH_EARTH, { dx: sim.idx });
            dat = bit.ertBit.dat;
            sim = dat;
            view(sim, ste);
            break;
        case ActErt.UPDATE_EARTH:
            bit = await ste.hunt(ActErt.UPDATE_EARTH, {});
            break;
        case ActErt.AUTO_EARTH:
            bit = ste.hunt(ActErt.AUTO_EARTH, sim);
            (0, exports.earthMenu)(cpy, bal, ste);
            break;
        case ActErt.OPEN_EARTH:
            bit = await ste.hunt(ActErt.OPEN_EARTH, {});
            sim = bit.ertBit.dat;
            view(sim, ste);
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    setTimeout(() => { (0, exports.earthMenu)(cpy, bal, ste); }, 333);
    return cpy;
};
exports.earthMenu = earthMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=menu.buzz.js.map