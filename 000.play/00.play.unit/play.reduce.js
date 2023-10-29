"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./play.action");
const play_model_1 = require("./play.model");
const Buzz = require("./play.buzzer");
function reducer(model = new play_model_1.PlayModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_PLAY:
            return Buzz.updatePlay(clone(model), act.bale, state);
        case Act.INIT_PLAY:
            return Buzz.initPlay(clone(model), act.bale, state);
        case Act.OPEN_PLAY:
            return Buzz.openPlay(clone(model), act.bale, state);
        case Act.RUN_PLAY:
            return Buzz.runPlay(clone(model), act.bale, state);
        case Act.EDIT_PLAY:
            return Buzz.editPlay(clone(model), act.bale, state);
        case Act.PATCH_PLAY:
            return Buzz.patchPlay(clone(model), act.bale, state);
        case Act.START_PLAY:
            return Buzz.startPlay(clone(model), act.bale, state);
        case Act.READ_PLAY:
            return Buzz.readPlay(clone(model), act.bale, state);
        case Act.WRITE_PLAY:
            return Buzz.writePlay(clone(model), act.bale, state);
        case Act.REMOVE_PLAY:
            return Buzz.removePlay(clone(model), act.bale, state);
        case Act.CREATE_PLAY:
            return Buzz.createPlay(clone(model), act.bale, state);
        case Act.DELETE_PLAY:
            return Buzz.deletePlay(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=play.reduce.js.map