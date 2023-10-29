"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visageMenu = void 0;
const ActMnu = require("../menu.action");
const ActVsg = require("../../01.visage.unit/visage.action");
const ActTrm = require("../../act/terminal.action");
var bit, lst, dex;
const visageMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "SHADE PIVOT V0", bit: 'local' });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" });
    var lst = [ActVsg.MOUNT_VISAGE, ActVsg.REMOVE_VISAGE, ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    switch (idx) {
        case ActVsg.MOUNT_VISAGE:
            bit = await ste.bus(ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 720 } }, 'remote');
            bit = await await ste.hunt(ActMnu.VISAGE_MENU, {});
            break;
        case ActVsg.REMOVE_VISAGE:
            bit = await ste.bus(ActVsg.LIST_VISAGE, {}, 'remote');
            if (bit.vsgBit == null)
                bit.vsgBit = { lst: [] };
            lst = bit.vsgBit.lst;
            if (lst.length == 0) {
                bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Visage present : 0", bit: 'local' });
                bit = await await ste.hunt(ActMnu.VISAGE_MENU, {});
                return;
            }
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            idx = lst[bit.val];
            bit = await ste.bus(ActVsg.REMOVE_VISAGE, { idx }, 'remote');
            bit = await await ste.hunt(ActMnu.VISAGE_MENU, {});
            break;
        case ActVsg.FULLSCREEN_VISAGE:
            bit = await ste.bus(ActVsg.FULLSCREEN_VISAGE, {}, 'remote');
            bit = await await ste.hunt(ActMnu.VISAGE_MENU, {});
            break;
        case ActVsg.SIZE_VISAGE:
            bit = await ste.bus(ActTrm.INPUT_TERMINAL, { lst: ["", "W VALUE"] });
            var w = Number(bit.trmBit.src);
            bit = await ste.bus(ActTrm.INPUT_TERMINAL, { lst: ["", "H VALUE"] });
            var h = Number(bit.trmBit.src);
            bit = await ste.bus(ActVsg.SIZE_VISAGE, { dat: { w, h } }, 'remote');
            bit = await await ste.hunt(ActMnu.VISAGE_MENU, {});
            break;
        case ActMnu.UPDATE_MENU:
            bit = await await ste.hunt(ActMnu.UPDATE_MENU, {});
            break;
        default:
            bit = await await ste.hunt(ActMnu.UPDATE_MENU, {});
            break;
    }
    return cpy;
};
exports.visageMenu = visageMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=visage-menu.buzz.js.map