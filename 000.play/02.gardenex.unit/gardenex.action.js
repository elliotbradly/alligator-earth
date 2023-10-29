"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenGardenex = exports.OPEN_GARDENEX = exports.CloseGardenex = exports.CLOSE_GARDENEX = exports.UpdateGardenex = exports.UPDATE_GARDENEX = exports.InitGardenex = exports.INIT_GARDENEX = void 0;
// Gardenex actions
exports.INIT_GARDENEX = "[Gardenex action] Init Gardenex";
class InitGardenex {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_GARDENEX;
    }
}
exports.InitGardenex = InitGardenex;
exports.UPDATE_GARDENEX = "[Gardenex action] Update Gardenex";
class UpdateGardenex {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_GARDENEX;
    }
}
exports.UpdateGardenex = UpdateGardenex;
exports.CLOSE_GARDENEX = "[Close action] Close Gardenex";
class CloseGardenex {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOSE_GARDENEX;
    }
}
exports.CloseGardenex = CloseGardenex;
exports.OPEN_GARDENEX = "[Open action] Open Gardenex";
class OpenGardenex {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_GARDENEX;
    }
}
exports.OpenGardenex = OpenGardenex;
//# sourceMappingURL=gardenex.action.js.map