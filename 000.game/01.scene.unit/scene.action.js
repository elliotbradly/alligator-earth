"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceScene = exports.SPACE_SCENE = exports.PrologueScene = exports.PROLOGUE_SCENE = exports.TitleScene = exports.TITLE_SCENE = exports.HuntScene = exports.HUNT_SCENE = exports.UpdateScene = exports.UPDATE_SCENE = exports.InitScene = exports.INIT_SCENE = void 0;
// Scene actions
exports.INIT_SCENE = "[Scene action] Init Scene";
class InitScene {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SCENE;
    }
}
exports.InitScene = InitScene;
exports.UPDATE_SCENE = "[Scene action] Update Scene";
class UpdateScene {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SCENE;
    }
}
exports.UpdateScene = UpdateScene;
exports.HUNT_SCENE = "[Hunt action] Hunt Scene";
class HuntScene {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.HUNT_SCENE;
    }
}
exports.HuntScene = HuntScene;
exports.TITLE_SCENE = "[Title action] Title Scene";
class TitleScene {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TITLE_SCENE;
    }
}
exports.TitleScene = TitleScene;
exports.PROLOGUE_SCENE = "[Prologue action] Prologue Scene";
class PrologueScene {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PROLOGUE_SCENE;
    }
}
exports.PrologueScene = PrologueScene;
exports.SPACE_SCENE = "[Space action] Space Scene";
class SpaceScene {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SPACE_SCENE;
    }
}
exports.SpaceScene = SpaceScene;
//# sourceMappingURL=scene.action.js.map