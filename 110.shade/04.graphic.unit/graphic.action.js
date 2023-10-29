"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGraphic = exports.DELETE_GRAPHIC = exports.RemoveGraphic = exports.REMOVE_GRAPHIC = exports.CreateGraphic = exports.CREATE_GRAPHIC = exports.WriteGraphic = exports.WRITE_GRAPHIC = exports.ReadGraphic = exports.READ_GRAPHIC = exports.UpdateGraphic = exports.UPDATE_GRAPHIC = exports.InitGraphic = exports.INIT_GRAPHIC = void 0;
// Graphic actions
exports.INIT_GRAPHIC = "[Graphic action] Init Graphic";
class InitGraphic {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_GRAPHIC;
    }
}
exports.InitGraphic = InitGraphic;
exports.UPDATE_GRAPHIC = "[Graphic action] Update Graphic";
class UpdateGraphic {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_GRAPHIC;
    }
}
exports.UpdateGraphic = UpdateGraphic;
exports.READ_GRAPHIC = "[Read action] Read Graphic";
class ReadGraphic {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_GRAPHIC;
    }
}
exports.ReadGraphic = ReadGraphic;
exports.WRITE_GRAPHIC = "[Write action] Write Graphic";
class WriteGraphic {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_GRAPHIC;
    }
}
exports.WriteGraphic = WriteGraphic;
exports.CREATE_GRAPHIC = "[Create action] Create Graphic";
class CreateGraphic {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_GRAPHIC;
    }
}
exports.CreateGraphic = CreateGraphic;
exports.REMOVE_GRAPHIC = "[Remove action] Remove Graphic";
class RemoveGraphic {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_GRAPHIC;
    }
}
exports.RemoveGraphic = RemoveGraphic;
exports.DELETE_GRAPHIC = "[Delete action] Delete Graphic";
class DeleteGraphic {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_GRAPHIC;
    }
}
exports.DeleteGraphic = DeleteGraphic;
//# sourceMappingURL=graphic.action.js.map