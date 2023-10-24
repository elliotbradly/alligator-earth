"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudTime = exports.CLOUD_TIME = exports.PatchTime = exports.PATCH_TIME = exports.EditTime = exports.EDIT_TIME = exports.RunTime = exports.RUN_TIME = exports.OpenTime = exports.OPEN_TIME = exports.UpdateTime = exports.UPDATE_TIME = exports.InitTime = exports.INIT_TIME = void 0;
exports.INIT_TIME = "[Time action] Init Time";
class InitTime {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_TIME;
    }
}
exports.InitTime = InitTime;
exports.UPDATE_TIME = "[Time action] Update Time";
class UpdateTime {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_TIME;
    }
}
exports.UpdateTime = UpdateTime;
exports.OPEN_TIME = "[Open action] Open Time";
class OpenTime {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_TIME;
    }
}
exports.OpenTime = OpenTime;
exports.RUN_TIME = "[Run action] Run Time";
class RunTime {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RUN_TIME;
    }
}
exports.RunTime = RunTime;
exports.EDIT_TIME = "[Edit action] Edit Time";
class EditTime {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EDIT_TIME;
    }
}
exports.EditTime = EditTime;
exports.PATCH_TIME = "[Patch action] Patch Time";
class PatchTime {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PATCH_TIME;
    }
}
exports.PatchTime = PatchTime;
exports.CLOUD_TIME = "[Cloud action] Cloud Time";
class CloudTime {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOUD_TIME;
    }
}
exports.CloudTime = CloudTime;
//# sourceMappingURL=time.action.js.map