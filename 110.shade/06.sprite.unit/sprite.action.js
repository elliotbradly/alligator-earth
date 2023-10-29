"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSprite = exports.DELETE_SPRITE = exports.RemoveSprite = exports.REMOVE_SPRITE = exports.CreateSprite = exports.CREATE_SPRITE = exports.WriteSprite = exports.WRITE_SPRITE = exports.ReadSprite = exports.READ_SPRITE = exports.UpdateSprite = exports.UPDATE_SPRITE = exports.InitSprite = exports.INIT_SPRITE = void 0;
// Sprite actions
exports.INIT_SPRITE = "[Sprite action] Init Sprite";
class InitSprite {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SPRITE;
    }
}
exports.InitSprite = InitSprite;
exports.UPDATE_SPRITE = "[Sprite action] Update Sprite";
class UpdateSprite {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SPRITE;
    }
}
exports.UpdateSprite = UpdateSprite;
exports.READ_SPRITE = "[Read action] Read Sprite";
class ReadSprite {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_SPRITE;
    }
}
exports.ReadSprite = ReadSprite;
exports.WRITE_SPRITE = "[Write action] Write Sprite";
class WriteSprite {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_SPRITE;
    }
}
exports.WriteSprite = WriteSprite;
exports.CREATE_SPRITE = "[Creatt action] Creatt Sprite";
class CreateSprite {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_SPRITE;
    }
}
exports.CreateSprite = CreateSprite;
exports.REMOVE_SPRITE = "[Remove action] Remove Sprite";
class RemoveSprite {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_SPRITE;
    }
}
exports.RemoveSprite = RemoveSprite;
exports.DELETE_SPRITE = "[Delete action] Delete Sprite";
class DeleteSprite {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_SPRITE;
    }
}
exports.DeleteSprite = DeleteSprite;
//# sourceMappingURL=sprite.action.js.map