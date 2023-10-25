"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visageMenu = exports.shadeMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
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
    bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: 'local' });
    bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "AAADS PIVOT V0", bit: 'local' });
    bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: "local" });
    //var lst = [ ActAaa.UPDATE_AAADS, ActAaa.OPEN_AAADS, ActAaa.EDIT_AAADS ]
    var lst = [];
    bit = await ste.bus(ActTrm.OPTION_TERMINAL, { lst });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    // switch (idx) {
    //case ActAaa.OPEN_AAADS:
    //bit = await ste.hunt(ActAaa.OPEN_AAADS, {})
    // break;
    // case ActAaa.UPDATE_AAADS:
    // bit = await ste.hunt( ActAaa.UPDATE_AAADS, {})
    // break;
    // case ActAaa.EDIT_AAADS:
    // bit = await ste.hunt( ActAaa.EDIT_AAADS, {})
    // bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "PATCHING...", bit: 'local' })
    // bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: "local" })
    // lst = [ActAaa.PATCH_AAADS]
    // bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })
    // bit = await ste.hunt( ActAaa.PATCH_AAADS, {})
    // break;
    // default:
    // bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {})
    // break;
    //}
    //updateMenu(cpy, bal, ste);
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