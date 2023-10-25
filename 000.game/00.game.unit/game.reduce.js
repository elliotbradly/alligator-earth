"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./game.action");
const game_model_1 = require("./game.model");
const Buzz = require("./game.buzzer");
function reducer(model = new game_model_1.GameModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_GAME:
            return Buzz.updateGame(clone(model), act.bale, state);
        case Act.INIT_GAME:
            return Buzz.initGame(clone(model), act.bale, state);
        case Act.OPEN_GAME:
            return Buzz.openGame(clone(model), act.bale, state);
        case Act.RUN_GAME:
            return Buzz.runGame(clone(model), act.bale, state);
        case Act.EDIT_GAME:
            return Buzz.editGame(clone(model), act.bale, state);
        case Act.PATCH_GAME:
            return Buzz.patchGame(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=game.reduce.js.map