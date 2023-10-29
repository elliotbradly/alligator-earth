"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./frame.action");
const frame_model_1 = require("./frame.model");
const Buzz = require("./frame.buzzer");
function reducer(model = new frame_model_1.FrameModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_FRAME:
            return Buzz.updateFrame(clone(model), act.bale, state);
        case Act.INIT_FRAME:
            return Buzz.initFrame(clone(model), act.bale, state);
        case Act.READ_FRAME:
            return Buzz.readFrame(clone(model), act.bale, state);
        case Act.WRITE_FRAME:
            return Buzz.writeFrame(clone(model), act.bale, state);
        case Act.REMOVE_FRAME:
            return Buzz.removeFrame(clone(model), act.bale, state);
        case Act.CREATE_FRAME:
            return Buzz.createFrame(clone(model), act.bale, state);
        case Act.DELETE_FRAME:
            return Buzz.deleteFrame(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=frame.reduce.js.map