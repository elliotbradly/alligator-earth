"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./shade.action");
const shade_model_1 = require("./shade.model");
const Buzz = require("./shade.buzzer");
function reducer(model = new shade_model_1.ShadeModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_SHADE:
            return Buzz.updateShade(clone(model), act.bale, state);
        case Act.INIT_SHADE:
            return Buzz.initShade(clone(model), act.bale, state);
        case Act.OPEN_SHADE:
            return Buzz.openShade(clone(model), act.bale, state);
        case Act.BODY_SHADE:
            return Buzz.bodyShade(clone(model), act.bale, state);
        case Act.BROWSER_SHADE:
            return Buzz.browserShade(clone(model), act.bale, state);
        case Act.RUN_SHADE:
            return Buzz.runShade(clone(model), act.bale, state);
        case Act.EDIT_SHADE:
            return Buzz.editShade(clone(model), act.bale, state);
        case Act.PATCH_SHADE:
            return Buzz.patchShade(clone(model), act.bale, state);
        case Act.TEST_SHADE:
            return Buzz.testShade(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=shade.reduce.js.map