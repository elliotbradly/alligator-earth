"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSurface = exports.DELETE_SURFACE = exports.DimensionSurface = exports.DIMENSION_SURFACE = exports.CreateSurface = exports.CREATE_SURFACE = exports.RemoveSurface = exports.REMOVE_SURFACE = exports.WriteSurface = exports.WRITE_SURFACE = exports.ReadSurface = exports.READ_SURFACE = exports.UpdateSurface = exports.UPDATE_SURFACE = exports.InitSurface = exports.INIT_SURFACE = void 0;
// Surface actions
exports.INIT_SURFACE = "[Surface action] Init Surface";
class InitSurface {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SURFACE;
    }
}
exports.InitSurface = InitSurface;
exports.UPDATE_SURFACE = "[Surface action] Update Surface";
class UpdateSurface {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SURFACE;
    }
}
exports.UpdateSurface = UpdateSurface;
exports.READ_SURFACE = "[Read action] Read Surface";
class ReadSurface {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_SURFACE;
    }
}
exports.ReadSurface = ReadSurface;
exports.WRITE_SURFACE = "[Write action] Write Surface";
class WriteSurface {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_SURFACE;
    }
}
exports.WriteSurface = WriteSurface;
exports.REMOVE_SURFACE = "[Write action] Remove Surface";
class RemoveSurface {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_SURFACE;
    }
}
exports.RemoveSurface = RemoveSurface;
exports.CREATE_SURFACE = "[Create action] Create Surface";
class CreateSurface {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_SURFACE;
    }
}
exports.CreateSurface = CreateSurface;
exports.DIMENSION_SURFACE = "[Dimension action] Dimension Surface";
class DimensionSurface {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DIMENSION_SURFACE;
    }
}
exports.DimensionSurface = DimensionSurface;
exports.DELETE_SURFACE = "[Delete action] Delete Surface";
class DeleteSurface {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_SURFACE;
    }
}
exports.DeleteSurface = DeleteSurface;
//# sourceMappingURL=surface.action.js.map