"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchGame = exports.PATCH_GAME = exports.EditGame = exports.EDIT_GAME = exports.RunGame = exports.RUN_GAME = exports.OpenGame = exports.OPEN_GAME = exports.UpdateGame = exports.UPDATE_GAME = exports.InitGame = exports.INIT_GAME = void 0;
exports.INIT_GAME = "[Game action] Init Game";
class InitGame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_GAME;
    }
}
exports.InitGame = InitGame;
exports.UPDATE_GAME = "[Game action] Update Game";
class UpdateGame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_GAME;
    }
}
exports.UpdateGame = UpdateGame;
exports.OPEN_GAME = "[Open action] Open Game";
class OpenGame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_GAME;
    }
}
exports.OpenGame = OpenGame;
exports.RUN_GAME = "[Run action] Run Game";
class RunGame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RUN_GAME;
    }
}
exports.RunGame = RunGame;
exports.EDIT_GAME = "[Edit action] Edit Game";
class EditGame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EDIT_GAME;
    }
}
exports.EditGame = EditGame;
exports.PATCH_GAME = "[Patch action] Patch Game";
class PatchGame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PATCH_GAME;
    }
}
exports.PatchGame = PatchGame;
//# sourceMappingURL=game.action.js.map