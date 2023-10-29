"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./loop.action");
const loop_model_1 = require("./loop.model");
const Buzz = require("./loop.buzzer");
function reducer(model = new loop_model_1.LoopModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_LOOP:
            return Buzz.updateLoop(clone(model), act.bale, state);
        case Act.INIT_LOOP:
            return Buzz.initLoop(clone(model), act.bale, state);
        case Act.REMOVE_LOOP:
            return Buzz.removeLoop(clone(model), act.bale, state);
        case Act.DELETE_LOOP:
            return Buzz.deleteLoop(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=loop.reduce.js.map