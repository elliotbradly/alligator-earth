"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlay = exports.DELETE_PLAY = exports.CreatePlay = exports.CREATE_PLAY = exports.RemovePlay = exports.REMOVE_PLAY = exports.WritePlay = exports.WRITE_PLAY = exports.ReadPlay = exports.READ_PLAY = exports.StartPlay = exports.START_PLAY = exports.PatchPlay = exports.PATCH_PLAY = exports.EditPlay = exports.EDIT_PLAY = exports.RunPlay = exports.RUN_PLAY = exports.OpenPlay = exports.OPEN_PLAY = exports.UpdatePlay = exports.UPDATE_PLAY = exports.InitPlay = exports.INIT_PLAY = void 0;
exports.INIT_PLAY = "[Play action] Init Play";
class InitPlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_PLAY;
    }
}
exports.InitPlay = InitPlay;
exports.UPDATE_PLAY = "[Play action] Update Play";
class UpdatePlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_PLAY;
    }
}
exports.UpdatePlay = UpdatePlay;
exports.OPEN_PLAY = "[Open action] Open Play";
class OpenPlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_PLAY;
    }
}
exports.OpenPlay = OpenPlay;
exports.RUN_PLAY = "[Run action] Run Play";
class RunPlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RUN_PLAY;
    }
}
exports.RunPlay = RunPlay;
exports.EDIT_PLAY = "[Edit action] Edit Play";
class EditPlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EDIT_PLAY;
    }
}
exports.EditPlay = EditPlay;
exports.PATCH_PLAY = "[Patch action] Patch Play";
class PatchPlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PATCH_PLAY;
    }
}
exports.PatchPlay = PatchPlay;
exports.START_PLAY = "[Start action] Start Play";
class StartPlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.START_PLAY;
    }
}
exports.StartPlay = StartPlay;
exports.READ_PLAY = "[Read action] Read Play";
class ReadPlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_PLAY;
    }
}
exports.ReadPlay = ReadPlay;
exports.WRITE_PLAY = "[Write action] Write Play";
class WritePlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_PLAY;
    }
}
exports.WritePlay = WritePlay;
exports.REMOVE_PLAY = "[Remove action] Remove Play";
class RemovePlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_PLAY;
    }
}
exports.RemovePlay = RemovePlay;
exports.CREATE_PLAY = "[Create action] Create Play";
class CreatePlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_PLAY;
    }
}
exports.CreatePlay = CreatePlay;
exports.DELETE_PLAY = "[Delete action] Delete Play";
class DeletePlay {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_PLAY;
    }
}
exports.DeletePlay = DeletePlay;
//# sourceMappingURL=play.action.js.map