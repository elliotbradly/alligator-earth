"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./surface.action");
const surface_model_1 = require("./surface.model");
const Buzz = require("./surface.buzzer");
function reducer(model = new surface_model_1.SurfaceModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_SURFACE:
            return Buzz.updateSurface(clone(model), act.bale, state);
        case Act.INIT_SURFACE:
            return Buzz.initSurface(clone(model), act.bale, state);
        case Act.READ_SURFACE:
            return Buzz.readSurface(clone(model), act.bale, state);
        case Act.WRITE_SURFACE:
            return Buzz.writeSurface(clone(model), act.bale, state);
        case Act.CREATE_SURFACE:
            return Buzz.createSurface(clone(model), act.bale, state);
        case Act.DIMENSION_SURFACE:
            return Buzz.dimensionSurface(clone(model), act.bale, state);
        case Act.DELETE_SURFACE:
            return Buzz.deleteSurface(clone(model), act.bale, state);
        case Act.REMOVE_SURFACE:
            return Buzz.removeSurface(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=surface.reduce.js.map