"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./visage.action");
const visage_model_1 = require("./visage.model");
const Buzz = require("./visage.buzzer");
function reducer(model = new visage_model_1.VisageModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_VISAGE:
            return Buzz.updateVisage(clone(model), act.bale, state);
        case Act.INIT_VISAGE:
            return Buzz.initVisage(clone(model), act.bale, state);
        case Act.FULLSCREEN_VISAGE:
            return Buzz.fullscreenVisage(clone(model), act.bale, state);
        case Act.READ_VISAGE:
            return Buzz.readVisage(clone(model), act.bale, state);
        case Act.WRITE_VISAGE:
            return Buzz.writeVisage(clone(model), act.bale, state);
        case Act.CREATE_VISAGE:
            return Buzz.createVisage(clone(model), act.bale, state);
        case Act.SIZE_VISAGE:
            return Buzz.sizeVisage(clone(model), act.bale, state);
        case Act.RENDER_VISAGE:
            return Buzz.renderVisage(clone(model), act.bale, state);
        case Act.DIMENSION_VISAGE:
            return Buzz.dimensionVisage(clone(model), act.bale, state);
        case Act.SCREEN_VISAGE:
            return Buzz.screenVisage(clone(model), act.bale, state);
        case Act.MOUNT_VISAGE:
            return Buzz.mountVisage(clone(model), act.bale, state);
        case Act.MAIN_VISAGE:
            return Buzz.mainVisage(clone(model), act.bale, state);
        case Act.CLEAR_VISAGE:
            return Buzz.clearVisage(clone(model), act.bale, state);
        case Act.DELETE_VISAGE:
            return Buzz.deleteVisage(clone(model), act.bale, state);
        case Act.LIST_VISAGE:
            return Buzz.listVisage(clone(model), act.bale, state);
        case Act.REMOVE_VISAGE:
            return Buzz.removeVisage(clone(model), act.bale, state);
        case Act.NEST_VISAGE:
            return Buzz.nestVisage(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=visage.reduce.js.map