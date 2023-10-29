"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./show.action");
const show_model_1 = require("./show.model");
const Buzz = require("./show.buzzer");
function reducer(model = new show_model_1.ShowModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_SHOW:
            return Buzz.updateShow(clone(model), act.bale, state);
        case Act.INIT_SHOW:
            return Buzz.initShow(clone(model), act.bale, state);
        case Act.READ_SHOW:
            return Buzz.readShow(clone(model), act.bale, state);
        case Act.WRITE_SHOW:
            return Buzz.writeShow(clone(model), act.bale, state);
        case Act.REMOVE_SHOW:
            return Buzz.removeShow(clone(model), act.bale, state);
        case Act.CREATE_SHOW:
            return Buzz.createShow(clone(model), act.bale, state);
        case Act.DELETE_SHOW:
            return Buzz.deleteShow(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=show.reduce.js.map