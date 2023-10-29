"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFrame = exports.DELETE_FRAME = exports.CreateFrame = exports.CREATE_FRAME = exports.RemoveFrame = exports.REMOVE_FRAME = exports.WriteFrame = exports.WRITE_FRAME = exports.ReadFrame = exports.READ_FRAME = exports.UpdateFrame = exports.UPDATE_FRAME = exports.InitFrame = exports.INIT_FRAME = void 0;
// Frame actions
exports.INIT_FRAME = "[Frame action] Init Frame";
class InitFrame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_FRAME;
    }
}
exports.InitFrame = InitFrame;
exports.UPDATE_FRAME = "[Frame action] Update Frame";
class UpdateFrame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_FRAME;
    }
}
exports.UpdateFrame = UpdateFrame;
exports.READ_FRAME = "[Read action] Read Frame";
class ReadFrame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_FRAME;
    }
}
exports.ReadFrame = ReadFrame;
exports.WRITE_FRAME = "[Write action] Write Frame";
class WriteFrame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_FRAME;
    }
}
exports.WriteFrame = WriteFrame;
exports.REMOVE_FRAME = "[Remove action] Remove Frame";
class RemoveFrame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_FRAME;
    }
}
exports.RemoveFrame = RemoveFrame;
exports.CREATE_FRAME = "[Create action] Create Frame";
class CreateFrame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_FRAME;
    }
}
exports.CreateFrame = CreateFrame;
exports.DELETE_FRAME = "[Delete action] Delete Frame";
class DeleteFrame {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_FRAME;
    }
}
exports.DeleteFrame = DeleteFrame;
//# sourceMappingURL=frame.action.js.map