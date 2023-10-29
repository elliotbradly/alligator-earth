"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./gardenex.action");
const gardenex_model_1 = require("./gardenex.model");
const Buzz = require("./gardenex.buzzer");
function reducer(model = new gardenex_model_1.GardenexModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_GARDENEX:
            return Buzz.updateGardenex(clone(model), act.bale, state);
        case Act.INIT_GARDENEX:
            return Buzz.initGardenex(clone(model), act.bale, state);
        case Act.CLOSE_GARDENEX:
            return Buzz.closeGardenex(clone(model), act.bale, state);
        case Act.OPEN_GARDENEX:
            return Buzz.openGardenex(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=gardenex.reduce.js.map