"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./time.action");
const time_model_1 = require("./time.model");
const Buzz = require("./time.buzzer");
function reducer(model = new time_model_1.TimeModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_TIME:
            return Buzz.updateTime(clone(model), act.bale, state);
        case Act.INIT_TIME:
            return Buzz.initTime(clone(model), act.bale, state);
        case Act.OPEN_TIME:
            return Buzz.openTime(clone(model), act.bale, state);
        case Act.RUN_TIME:
            return Buzz.runTime(clone(model), act.bale, state);
        case Act.EDIT_TIME:
            return Buzz.editTime(clone(model), act.bale, state);
        case Act.PATCH_TIME:
            return Buzz.patchTime(clone(model), act.bale, state);
        case Act.CLOUD_TIME:
            return Buzz.cloudTime(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=time.reduce.js.map