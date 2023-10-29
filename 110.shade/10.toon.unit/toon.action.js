"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateToon = exports.UPDATE_TOON = exports.InitToon = exports.INIT_TOON = void 0;
// Toon actions
exports.INIT_TOON = "[Toon action] Init Toon";
class InitToon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_TOON;
    }
}
exports.InitToon = InitToon;
exports.UPDATE_TOON = "[Toon action] Update Toon";
class UpdateToon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_TOON;
    }
}
exports.UpdateToon = UpdateToon;
//# sourceMappingURL=toon.action.js.map