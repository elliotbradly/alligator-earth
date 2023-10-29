"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const shade_unit_1 = require("./00.shade.unit/shade.unit");
const visage_unit_1 = require("./01.visage.unit/visage.unit");
const surface_unit_1 = require("./02.surface.unit/surface.unit");
const container_unit_1 = require("./03.container.unit/container.unit");
const graphic_unit_1 = require("./04.graphic.unit/graphic.unit");
const text_unit_1 = require("./05.text.unit/text.unit");
const sprite_unit_1 = require("./06.sprite.unit/sprite.unit");
const hexagon_unit_1 = require("./07.hexagon.unit/hexagon.unit");
const focigon_unit_1 = require("./08.focigon.unit/focigon.unit");
const loop_unit_1 = require("./09.loop.unit/loop.unit");
const toon_unit_1 = require("./10.toon.unit/toon.unit");
const video_unit_1 = require("./11.video.unit/video.unit");
const frame_unit_1 = require("./12.frame.unit/frame.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const shade_model_1 = require("./00.shade.unit/shade.model");
const visage_model_1 = require("./01.visage.unit/visage.model");
const surface_model_1 = require("./02.surface.unit/surface.model");
const container_model_1 = require("./03.container.unit/container.model");
const graphic_model_1 = require("./04.graphic.unit/graphic.model");
const text_model_1 = require("./05.text.unit/text.model");
const sprite_model_1 = require("./06.sprite.unit/sprite.model");
const hexagon_model_1 = require("./07.hexagon.unit/hexagon.model");
const focigon_model_1 = require("./08.focigon.unit/focigon.model");
const loop_model_1 = require("./09.loop.unit/loop.model");
const toon_model_1 = require("./10.toon.unit/toon.model");
const video_model_1 = require("./11.video.unit/video.model");
const frame_model_1 = require("./12.frame.unit/frame.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [shade_unit_1.default, visage_unit_1.default, surface_unit_1.default, container_unit_1.default, graphic_unit_1.default, text_unit_1.default, sprite_unit_1.default, hexagon_unit_1.default, focigon_unit_1.default, loop_unit_1.default, toon_unit_1.default, video_unit_1.default, frame_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromShade = require("./00.shade.unit/shade.reduce");
const reduceFromVisage = require("./01.visage.unit/visage.reduce");
const reduceFromSurface = require("./02.surface.unit/surface.reduce");
const reduceFromContainer = require("./03.container.unit/container.reduce");
const reduceFromGraphic = require("./04.graphic.unit/graphic.reduce");
const reduceFromText = require("./05.text.unit/text.reduce");
const reduceFromSprite = require("./06.sprite.unit/sprite.reduce");
const reduceFromHexagon = require("./07.hexagon.unit/hexagon.reduce");
const reduceFromFocigon = require("./08.focigon.unit/focigon.reduce");
const reduceFromLoop = require("./09.loop.unit/loop.reduce");
const reduceFromToon = require("./10.toon.unit/toon.reduce");
const reduceFromVideo = require("./11.video.unit/video.reduce");
const reduceFromFrame = require("./12.frame.unit/frame.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    shade: reduceFromShade.reducer,
    visage: reduceFromVisage.reducer,
    surface: reduceFromSurface.reducer,
    container: reduceFromContainer.reducer,
    graphic: reduceFromGraphic.reducer,
    text: reduceFromText.reducer,
    sprite: reduceFromSprite.reducer,
    hexagon: reduceFromHexagon.reducer,
    focigon: reduceFromFocigon.reducer,
    loop: reduceFromLoop.reducer,
    toon: reduceFromToon.reducer,
    video: reduceFromVideo.reducer,
    frame: reduceFromFrame.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.shade = new shade_model_1.ShadeModel();
        this.visage = new visage_model_1.VisageModel();
        this.surface = new surface_model_1.SurfaceModel();
        this.container = new container_model_1.ContainerModel();
        this.graphic = new graphic_model_1.GraphicModel();
        this.text = new text_model_1.TextModel();
        this.sprite = new sprite_model_1.SpriteModel();
        this.hexagon = new hexagon_model_1.HexagonModel();
        this.focigon = new focigon_model_1.FocigonModel();
        this.loop = new loop_model_1.LoopModel();
        this.toon = new toon_model_1.ToonModel();
        this.video = new video_model_1.VideoModel();
        this.frame = new frame_model_1.FrameModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map