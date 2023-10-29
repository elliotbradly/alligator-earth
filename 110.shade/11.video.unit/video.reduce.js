"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./video.action");
const video_model_1 = require("./video.model");
const Buzz = require("./video.buzzer");
function reducer(model = new video_model_1.VideoModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_VIDEO:
            return Buzz.updateVideo(clone(model), act.bale, state);
        case Act.INIT_VIDEO:
            return Buzz.initVideo(clone(model), act.bale, state);
        case Act.REMOVE_VIDEO:
            return Buzz.removeVideo(clone(model), act.bale, state);
        case Act.DELETE_VIDEO:
            return Buzz.deleteVideo(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=video.reduce.js.map