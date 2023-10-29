"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visageMenu = exports.shadeMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActMnu = require("../menu.action");
const ActShd = require("../../00.shade.unit/shade.action");
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
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "SHADE PIVOT V0", bit: 'local' });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" });
    var lst = [ActShd.UPDATE_SHADE, ActShd.OPEN_SHADE, ActShd.RUN_SHADE, ActShd.EDIT_SHADE, ActMnu.CONTAINER_MENU, ActMnu.VISAGE_MENU];
    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    switch (idx) {
        case ActMnu.CONTAINER_MENU:
            bit = await ste.hunt(ActMnu.CONTAINER_MENU, {});
            break;
        case ActMnu.VISAGE_MENU:
            bit = await ste.hunt(ActMnu.VISAGE_MENU, {});
            break;
        case ActMnu.SHADE_MENU:
            bit = await ste.hunt(ActMnu.SHADE_MENU, {});
            break;
        case ActShd.OPEN_SHADE:
            bit = await ste.hunt(ActShd.OPEN_SHADE, {});
            break;
        case ActShd.BROWSER_SHADE:
            bit = await ste.hunt(ActShd.BROWSER_SHADE, {});
            break;
        case ActShd.RUN_SHADE:
            bit = await ste.hunt(ActShd.RUN_SHADE, {});
            break;
        case ActShd.UPDATE_SHADE:
            bit = await ste.hunt(ActShd.UPDATE_SHADE, {});
            //bit = await ste.hunt(ActShd.OPEN_SHADE, {})
            break;
        case ActShd.EDIT_SHADE:
            bit = await ste.hunt(ActShd.EDIT_SHADE, {});
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' });
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" });
            lst = [ActShd.PATCH_SHADE];
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = await ste.hunt(ActShd.PATCH_SHADE, {});
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
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "SHADE PIVOT V0", bit: 'local' });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" });
    var lst = [ActMnu.VISAGE_MENU];
    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    switch (idx) {
        case ActMnu.VISAGE_MENU:
            bit = await ste.hunt(ActMnu.VISAGE_MENU, {});
            break;
        default:
            bit = await await ste.hunt(ActMnu.UPDATE_MENU, {});
            break;
    }
    (0, exports.shadeMenu)(cpy, bal, ste);
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