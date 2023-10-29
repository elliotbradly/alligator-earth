"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFocigon = exports.DELETE_FOCIGON = exports.CreateFocigon = exports.CREATE_FOCIGON = exports.RemoveFocigon = exports.REMOVE_FOCIGON = exports.WriteFocigon = exports.WRITE_FOCIGON = exports.ReadFocigon = exports.READ_FOCIGON = exports.UpdateFocigon = exports.UPDATE_FOCIGON = exports.InitFocigon = exports.INIT_FOCIGON = void 0;
// Focigon actions
exports.INIT_FOCIGON = "[Focigon action] Init Focigon";
class InitFocigon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_FOCIGON;
    }
}
exports.InitFocigon = InitFocigon;
exports.UPDATE_FOCIGON = "[Focigon action] Update Focigon";
class UpdateFocigon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_FOCIGON;
    }
}
exports.UpdateFocigon = UpdateFocigon;
exports.READ_FOCIGON = "[Read action] Read Focigon";
class ReadFocigon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_FOCIGON;
    }
}
exports.ReadFocigon = ReadFocigon;
exports.WRITE_FOCIGON = "[Write action] Write Focigon";
class WriteFocigon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_FOCIGON;
    }
}
exports.WriteFocigon = WriteFocigon;
exports.REMOVE_FOCIGON = "[Remove action] Remove Focigon";
class RemoveFocigon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_FOCIGON;
    }
}
exports.RemoveFocigon = RemoveFocigon;
exports.CREATE_FOCIGON = "[Create action] Create Focigon";
class CreateFocigon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_FOCIGON;
    }
}
exports.CreateFocigon = CreateFocigon;
exports.DELETE_FOCIGON = "[Delete action] Delete Focigon";
class DeleteFocigon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_FOCIGON;
    }
}
exports.DeleteFocigon = DeleteFocigon;
//# sourceMappingURL=focigon.action.js.map