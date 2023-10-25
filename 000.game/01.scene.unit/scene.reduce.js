"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./scene.action");
const scene_model_1 = require("./scene.model");
const Buzz = require("./scene.buzzer");
function reducer(model = new scene_model_1.SceneModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_SCENE:
            return Buzz.updateScene(clone(model), act.bale, state);
        case Act.INIT_SCENE:
            return Buzz.initScene(clone(model), act.bale, state);
        case Act.HUNT_SCENE:
            return Buzz.huntScene(clone(model), act.bale, state);
        case Act.TITLE_SCENE:
            return Buzz.titleScene(clone(model), act.bale, state);
        case Act.PROLOGUE_SCENE:
            return Buzz.prologueScene(clone(model), act.bale, state);
        case Act.SPACE_SCENE:
            return Buzz.spaceScene(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=scene.reduce.js.map