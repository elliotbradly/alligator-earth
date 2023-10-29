"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestVisage = exports.NEST_VISAGE = exports.ListVisage = exports.LIST_VISAGE = exports.DeleteVisage = exports.DELETE_VISAGE = exports.ClearVisage = exports.CLEAR_VISAGE = exports.MainVisage = exports.MAIN_VISAGE = exports.MountVisage = exports.MOUNT_VISAGE = exports.ScreenVisage = exports.SCREEN_VISAGE = exports.DimensionVisage = exports.DIMENSION_VISAGE = exports.RenderVisage = exports.RENDER_VISAGE = exports.SizeVisage = exports.SIZE_VISAGE = exports.CreateVisage = exports.CREATE_VISAGE = exports.RemoveVisage = exports.REMOVE_VISAGE = exports.WriteVisage = exports.WRITE_VISAGE = exports.ReadVisage = exports.READ_VISAGE = exports.FullscreenVisage = exports.FULLSCREEN_VISAGE = exports.UpdateVisage = exports.UPDATE_VISAGE = exports.InitVisage = exports.INIT_VISAGE = void 0;
// Visage actions
exports.INIT_VISAGE = "[Visage action] Init Visage";
class InitVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_VISAGE;
    }
}
exports.InitVisage = InitVisage;
exports.UPDATE_VISAGE = "[Visage action] Update Visage";
class UpdateVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_VISAGE;
    }
}
exports.UpdateVisage = UpdateVisage;
exports.FULLSCREEN_VISAGE = "[Fullscreen action] Fullscreen Visage";
class FullscreenVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FULLSCREEN_VISAGE;
    }
}
exports.FullscreenVisage = FullscreenVisage;
exports.READ_VISAGE = "[Read action] Read Visage";
class ReadVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_VISAGE;
    }
}
exports.ReadVisage = ReadVisage;
exports.WRITE_VISAGE = "[Write action] Write Visage";
class WriteVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_VISAGE;
    }
}
exports.WriteVisage = WriteVisage;
exports.REMOVE_VISAGE = "[Write action] Remove Visage";
class RemoveVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_VISAGE;
    }
}
exports.RemoveVisage = RemoveVisage;
exports.CREATE_VISAGE = "[Create action] Create Visage";
class CreateVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_VISAGE;
    }
}
exports.CreateVisage = CreateVisage;
exports.SIZE_VISAGE = "[Size action] Size Visage";
class SizeVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SIZE_VISAGE;
    }
}
exports.SizeVisage = SizeVisage;
exports.RENDER_VISAGE = "[Render action] Render Visage";
class RenderVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RENDER_VISAGE;
    }
}
exports.RenderVisage = RenderVisage;
exports.DIMENSION_VISAGE = "[Dimension action] Dimension Visage";
class DimensionVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DIMENSION_VISAGE;
    }
}
exports.DimensionVisage = DimensionVisage;
exports.SCREEN_VISAGE = "[Screen action] Screen Visage";
class ScreenVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SCREEN_VISAGE;
    }
}
exports.ScreenVisage = ScreenVisage;
exports.MOUNT_VISAGE = "[Mount action] Mount Visage";
class MountVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.MOUNT_VISAGE;
    }
}
exports.MountVisage = MountVisage;
exports.MAIN_VISAGE = "[Main action] Main Visage";
class MainVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.MAIN_VISAGE;
    }
}
exports.MainVisage = MainVisage;
exports.CLEAR_VISAGE = "[Clear action] Clear Visage";
class ClearVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLEAR_VISAGE;
    }
}
exports.ClearVisage = ClearVisage;
exports.DELETE_VISAGE = "[Delete action] Delete Visage";
class DeleteVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_VISAGE;
    }
}
exports.DeleteVisage = DeleteVisage;
exports.LIST_VISAGE = "[List action] List Visage";
class ListVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_VISAGE;
    }
}
exports.ListVisage = ListVisage;
exports.NEST_VISAGE = "[Nest action] Nest Visage";
class NestVisage {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.NEST_VISAGE;
    }
}
exports.NestVisage = NestVisage;
//# sourceMappingURL=visage.action.js.map