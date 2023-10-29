"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./toon.action");
const toon_model_1 = require("./toon.model");
const Buzz = require("./toon.buzzer");
function reducer(model = new toon_model_1.ToonModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_TOON:
            return Buzz.updateToon(clone(model), act.bale, state);
        case Act.INIT_TOON:
            return Buzz.initToon(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=toon.reduce.js.map