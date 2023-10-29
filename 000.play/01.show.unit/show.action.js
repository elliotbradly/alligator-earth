"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteShow = exports.DELETE_SHOW = exports.CreateShow = exports.CREATE_SHOW = exports.RemoveShow = exports.REMOVE_SHOW = exports.WriteShow = exports.WRITE_SHOW = exports.ReadShow = exports.READ_SHOW = exports.UpdateShow = exports.UPDATE_SHOW = exports.InitShow = exports.INIT_SHOW = void 0;
// Show actions
exports.INIT_SHOW = "[Show action] Init Show";
class InitShow {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SHOW;
    }
}
exports.InitShow = InitShow;
exports.UPDATE_SHOW = "[Show action] Update Show";
class UpdateShow {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SHOW;
    }
}
exports.UpdateShow = UpdateShow;
exports.READ_SHOW = "[Read action] Read Show";
class ReadShow {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_SHOW;
    }
}
exports.ReadShow = ReadShow;
exports.WRITE_SHOW = "[Write action] Write Show";
class WriteShow {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_SHOW;
    }
}
exports.WriteShow = WriteShow;
exports.REMOVE_SHOW = "[Remove action] Remove Show";
class RemoveShow {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_SHOW;
    }
}
exports.RemoveShow = RemoveShow;
exports.CREATE_SHOW = "[Create action] Create Show";
class CreateShow {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_SHOW;
    }
}
exports.CreateShow = CreateShow;
exports.DELETE_SHOW = "[Delete action] Delete Show";
class DeleteShow {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_SHOW;
    }
}
exports.DeleteShow = DeleteShow;
//# sourceMappingURL=show.action.js.map