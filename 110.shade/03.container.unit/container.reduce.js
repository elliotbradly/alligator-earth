"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./container.action");
const container_model_1 = require("./container.model");
const Buzz = require("./container.buzzer");
function reducer(model = new container_model_1.ContainerModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_CONTAINER:
            return Buzz.updateContainer(clone(model), act.bale, state);
        case Act.INIT_CONTAINER:
            return Buzz.initContainer(clone(model), act.bale, state);
        case Act.READ_CONTAINER:
            return Buzz.readContainer(clone(model), act.bale, state);
        case Act.WRITE_CONTAINER:
            return Buzz.writeContainer(clone(model), act.bale, state);
        case Act.CREATE_CONTAINER:
            return Buzz.createContainer(clone(model), act.bale, state);
        case Act.SURFACE_CONTAINER:
            return Buzz.surfaceContainer(clone(model), act.bale, state);
        case Act.ADD_CONTAINER:
            return Buzz.addContainer(clone(model), act.bale, state);
        case Act.REMOVE_CONTAINER:
            return Buzz.removeContainer(clone(model), act.bale, state);
        case Act.DELETE_CONTAINER:
            return Buzz.deleteContainer(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=container.reduce.js.map