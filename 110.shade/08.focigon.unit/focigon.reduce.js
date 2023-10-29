"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./focigon.action");
const focigon_model_1 = require("./focigon.model");
const Buzz = require("./focigon.buzzer");
function reducer(model = new focigon_model_1.FocigonModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_FOCIGON:
            return Buzz.updateFocigon(clone(model), act.bale, state);
        case Act.INIT_FOCIGON:
            return Buzz.initFocigon(clone(model), act.bale, state);
        case Act.READ_FOCIGON:
            return Buzz.readFocigon(clone(model), act.bale, state);
        case Act.WRITE_FOCIGON:
            return Buzz.writeFocigon(clone(model), act.bale, state);
        case Act.REMOVE_FOCIGON:
            return Buzz.removeFocigon(clone(model), act.bale, state);
        case Act.CREATE_FOCIGON:
            return Buzz.createFocigon(clone(model), act.bale, state);
        case Act.DELETE_FOCIGON:
            return Buzz.deleteFocigon(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=focigon.reduce.js.map