"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVideo = exports.DELETE_VIDEO = exports.RemoveVideo = exports.REMOVE_VIDEO = exports.UpdateVideo = exports.UPDATE_VIDEO = exports.InitVideo = exports.INIT_VIDEO = void 0;
// Video actions
exports.INIT_VIDEO = "[Video action] Init Video";
class InitVideo {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_VIDEO;
    }
}
exports.InitVideo = InitVideo;
exports.UPDATE_VIDEO = "[Video action] Update Video";
class UpdateVideo {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_VIDEO;
    }
}
exports.UpdateVideo = UpdateVideo;
exports.REMOVE_VIDEO = "[Replace action] Replace Video";
class RemoveVideo {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_VIDEO;
    }
}
exports.RemoveVideo = RemoveVideo;
exports.DELETE_VIDEO = "[Delete action] Delete Video";
class DeleteVideo {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_VIDEO;
    }
}
exports.DeleteVideo = DeleteVideo;
//# sourceMappingURL=video.action.js.map