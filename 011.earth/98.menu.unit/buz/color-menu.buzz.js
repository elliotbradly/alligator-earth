"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorMenu = void 0;
const ActMnu = require("../menu.action");
const ActClr = require("../../04.color.unit/color.action");
const ActTrm = require("../../act/terminal.action");
var bit, lst, dex, dat, src;
const colorMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Color Menu" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    lst = [ActClr.FETCH_COLOR];
    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    switch (idx) {
        case ActClr.FETCH_COLOR:
            lst = [];
            for (var key in COSMOS) {
                lst.push(COSMOS[key].idx);
            }
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            var idx = lst[bit.val];
            bit = await ste.hunt(ActClr.FETCH_COLOR, { idx });
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) });
            break;
        default:
            bit = await ste.bus(ActMnu.UPDATE_MENU, {});
            break;
    }
    (0, exports.colorMenu)(cpy, bal, ste);
    return cpy;
};
exports.colorMenu = colorMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const COSMOS = require("../../val/cosmos");
//# sourceMappingURL=color-menu.buzz.js.map