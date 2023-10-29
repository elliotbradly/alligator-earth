"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestShade = exports.TEST_SHADE = exports.PatchShade = exports.PATCH_SHADE = exports.EditShade = exports.EDIT_SHADE = exports.RunShade = exports.RUN_SHADE = exports.BrowserShade = exports.BROWSER_SHADE = exports.BodyShade = exports.BODY_SHADE = exports.OpenShade = exports.OPEN_SHADE = exports.UpdateShade = exports.UPDATE_SHADE = exports.InitShade = exports.INIT_SHADE = void 0;
// Shade actions
exports.INIT_SHADE = "[Shade action] Init Shade";
class InitShade {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SHADE;
    }
}
exports.InitShade = InitShade;
exports.UPDATE_SHADE = "[Shade action] Update Shade";
class UpdateShade {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SHADE;
    }
}
exports.UpdateShade = UpdateShade;
exports.OPEN_SHADE = "[Open action] Open Shade";
class OpenShade {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_SHADE;
    }
}
exports.OpenShade = OpenShade;
exports.BODY_SHADE = "[Body action] Body Shade";
class BodyShade {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.BODY_SHADE;
    }
}
exports.BodyShade = BodyShade;
exports.BROWSER_SHADE = "[Browser action] Browser Shade";
class BrowserShade {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.BROWSER_SHADE;
    }
}
exports.BrowserShade = BrowserShade;
exports.RUN_SHADE = "[Run action] Run Shade";
class RunShade {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RUN_SHADE;
    }
}
exports.RunShade = RunShade;
exports.EDIT_SHADE = "[Edit action] Edit Shade";
class EditShade {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EDIT_SHADE;
    }
}
exports.EditShade = EditShade;
exports.PATCH_SHADE = "[Patch action] Patch Shade";
class PatchShade {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PATCH_SHADE;
    }
}
exports.PatchShade = PatchShade;
exports.TEST_SHADE = "[Test action] Test Shade";
class TestShade {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TEST_SHADE;
    }
}
exports.TestShade = TestShade;
//# sourceMappingURL=shade.action.js.map