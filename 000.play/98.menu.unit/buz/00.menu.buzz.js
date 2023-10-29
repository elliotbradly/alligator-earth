"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visageMenu = exports.shadeMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActPvt = require("../../96.pivot.unit/pivot.action");
const ActTrm = require("../../act/terminal.action");
var bit, lst, dex;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActTrm.INIT_TERMINAL, {});
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PLAY PIVOT V0", bit: 'local' });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" });
    var lst = [ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT];
    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    switch (idx) {
        case ActPvt.OPEN_PIVOT:
            bit = await ste.hunt(ActPvt.OPEN_PIVOT, {});
            break;
        case ActPvt.UPDATE_PIVOT:
            bit = await ste.hunt(ActPvt.UPDATE_PIVOT, {});
            break;
        case ActPvt.CLOUD_PIVOT:
            bit = await ste.hunt(ActPvt.CLOUD_PIVOT, {});
            break;
        case ActPvt.EDIT_PIVOT:
            bit = await ste.hunt(ActPvt.EDIT_PIVOT, {});
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' });
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" });
            lst = [ActPvt.PATCH_PIVOT];
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = await ste.hunt(ActPvt.PATCH_PIVOT, {});
            break;
        default:
            bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {});
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
const shadeMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.shadeMenu = shadeMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const visageMenu = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.visageMenu = visageMenu;
//# sourceMappingURL=00.menu.buzz.js.map