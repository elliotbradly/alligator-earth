"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchStore = exports.PATCH_STORE = exports.EditStore = exports.EDIT_STORE = exports.RunStore = exports.RUN_STORE = exports.OpenStore = exports.OPEN_STORE = exports.UpdateStore = exports.UPDATE_STORE = exports.InitStore = exports.INIT_STORE = void 0;
exports.INIT_STORE = "[Store action] Init Store";
class InitStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_STORE;
    }
}
exports.InitStore = InitStore;
exports.UPDATE_STORE = "[Store action] Update Store";
class UpdateStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_STORE;
    }
}
exports.UpdateStore = UpdateStore;
exports.OPEN_STORE = "[Open action] Open Store";
class OpenStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_STORE;
    }
}
exports.OpenStore = OpenStore;
exports.RUN_STORE = "[Run action] Run Store";
class RunStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RUN_STORE;
    }
}
exports.RunStore = RunStore;
exports.EDIT_STORE = "[Edit action] Edit Store";
class EditStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EDIT_STORE;
    }
}
exports.EditStore = EditStore;
exports.PATCH_STORE = "[Patch action] Patch Store";
class PatchStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PATCH_STORE;
    }
}
exports.PatchStore = PatchStore;
//# sourceMappingURL=store.action.js.map