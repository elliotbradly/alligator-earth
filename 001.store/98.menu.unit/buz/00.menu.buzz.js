"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visageMenu = exports.shadeMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActStr = require("../../00.store.unit/store.action");
const ActGrd = require("../../act/grid.action");
const ActChc = require("../../act/choice.action");
const ActBlk = require("../../act/block.action");
let bit, lst, dex, src;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 2, y: 3, xSpan: 2, ySpan: 1 });
    bit = await ste.bus(ActBlk.WRITE_BLOCK, { idx: 'blk0', src: 'Store Menu...', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    lst = [ActStr.OPEN_STORE];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 2, y: 4, xSpan: 4, ySpan: 8 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    bit = await ste.hunt(ActBlk.WRITE_BLOCK, { idx: 'blk0', src });
    (0, exports.updateMenu)(cpy, bal, ste);
    //bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: 'local' })
    //bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "TERMINAL PIVOT V0", bit: 'local' })
    //bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: "local" })
    //var lst = [ActTrm.INPUT_TERMINAL, ActTrm.UPDATE_TERMINAL, ActTrm.EDIT_TERMINAL]
    //bit = await ste.bus(ActTrm.OPTION_TERMINAL, { lst })
    //bit = bit.trmBit;
    //var idx = lst[bit.val];
    // switch (idx) {
    //   case ActTrm.UPDATE_TERMINAL:
    //     bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, {})
    //   break;
    //  case ActTrm.INPUT_TERMINAL:
    //    bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Input..."] });
    //    idx = bit.trmBit.src;
    //    bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "" })
    //    bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "" })
    //    bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-input-" + idx })
    //bit = await ste.hunt(ActTrm.EDIT_TERMINAL, {})
    // bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
    // bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })
    //lst = [ActTrm.PATCH_TERMINAL]
    //bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })
    //bit = await ste.hunt( ActTrm.PATCH_TERMINAL, {})
    //    break;
    // default:
    //bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {})
    //   break;
    //}
    // updateMenu(cpy, bal, ste);
    return cpy;
};
exports.updateMenu = updateMenu;
const testMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.testMenu = testMenu;
const closeMenu = async (cpy, bal, ste) => {
    //await ste.bus(ActTrm.CLOSE_TERMINAL, {})
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
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=00.menu.buzz.js.map