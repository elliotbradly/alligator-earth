"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContainer = exports.DELETE_CONTAINER = exports.RemoveContainer = exports.REMOVE_CONTAINER = exports.AddContainer = exports.ADD_CONTAINER = exports.SurfaceContainer = exports.SURFACE_CONTAINER = exports.CreateContainer = exports.CREATE_CONTAINER = exports.WriteContainer = exports.WRITE_CONTAINER = exports.ReadContainer = exports.READ_CONTAINER = exports.UpdateContainer = exports.UPDATE_CONTAINER = exports.InitContainer = exports.INIT_CONTAINER = void 0;
// Container actions
exports.INIT_CONTAINER = "[Container action] Init Container";
class InitContainer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_CONTAINER;
    }
}
exports.InitContainer = InitContainer;
exports.UPDATE_CONTAINER = "[Container action] Update Container";
class UpdateContainer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_CONTAINER;
    }
}
exports.UpdateContainer = UpdateContainer;
exports.READ_CONTAINER = "[Read action] Read Container";
class ReadContainer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_CONTAINER;
    }
}
exports.ReadContainer = ReadContainer;
exports.WRITE_CONTAINER = "[Write action] Write Container";
class WriteContainer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_CONTAINER;
    }
}
exports.WriteContainer = WriteContainer;
exports.CREATE_CONTAINER = "[Create action] Create Container";
class CreateContainer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_CONTAINER;
    }
}
exports.CreateContainer = CreateContainer;
exports.SURFACE_CONTAINER = "[Surface action] Surface Container";
class SurfaceContainer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SURFACE_CONTAINER;
    }
}
exports.SurfaceContainer = SurfaceContainer;
exports.ADD_CONTAINER = "[Add action] Add Container";
class AddContainer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.ADD_CONTAINER;
    }
}
exports.AddContainer = AddContainer;
exports.REMOVE_CONTAINER = "[Remove action] Remove Container";
class RemoveContainer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_CONTAINER;
    }
}
exports.RemoveContainer = RemoveContainer;
exports.DELETE_CONTAINER = "[Delete action] Delete Container";
class DeleteContainer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_CONTAINER;
    }
}
exports.DeleteContainer = DeleteContainer;
//# sourceMappingURL=container.action.js.map