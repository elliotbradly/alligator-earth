"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLoop = exports.DELETE_LOOP = exports.RemoveLoop = exports.REMOVE_LOOP = exports.UpdateLoop = exports.UPDATE_LOOP = exports.InitLoop = exports.INIT_LOOP = void 0;
// Loop actions
exports.INIT_LOOP = "[Loop action] Init Loop";
class InitLoop {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_LOOP;
    }
}
exports.InitLoop = InitLoop;
exports.UPDATE_LOOP = "[Loop action] Update Loop";
class UpdateLoop {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_LOOP;
    }
}
exports.UpdateLoop = UpdateLoop;
exports.REMOVE_LOOP = "[Replace action] Remove Loop";
class RemoveLoop {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_LOOP;
    }
}
exports.RemoveLoop = RemoveLoop;
exports.DELETE_LOOP = "[Delete action] Delete Loop";
class DeleteLoop {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_LOOP;
    }
}
exports.DeleteLoop = DeleteLoop;
//# sourceMappingURL=loop.action.js.map