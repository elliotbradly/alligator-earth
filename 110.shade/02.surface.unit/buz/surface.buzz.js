"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dimensionSurface = exports.deleteSurface = exports.createSurface = exports.removeSurface = exports.writeSurface = exports.readSurface = exports.updateSurface = exports.initSurface = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActFce = require("../../02.surface.unit/surface.action");
var bit, val, idx, dex, lst, dat;
const initSurface = (cpy, bal, ste) => {
    return cpy;
};
exports.initSurface = initSurface;
const updateSurface = async (cpy, bal, ste) => {
    var idx = bal.idx;
    bit = await ste.hunt(ActFce.READ_SURFACE, { idx: bal.idx });
    dat = bit.fceBit.dat;
    var app = dat.bit;
    if (app == null)
        return bal.slv({ fceBit: { idx: "error-update-surface" } });
    app.renderer.resize(dat.width, dat.height);
    return cpy;
};
exports.updateSurface = updateSurface;
const readSurface = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'fce00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActFce.CREATE_SURFACE });
    if (slv != null)
        slv({ fceBit: { idx: "read-surface", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readSurface = readSurface;
const writeSurface = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActFce.CREATE_SURFACE });
    ste.hunt(ActFce.UPDATE_SURFACE, { idx: bal.idx });
    if (bal.slv != null)
        bal.slv({ fceBit: { idx: "write-surface", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeSurface = writeSurface;
const removeSurface = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-create-visage", dat: {} } });
    //gotcha-- making sure that the src is present on the collect bale once caused a tremendous issue
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFce.DELETE_SURFACE });
    if (bal.slv != null)
        bal.slv({ fceBit: { idx: "remove-surface", dat: bit.clcBit } });
    return cpy;
};
exports.removeSurface = removeSurface;
const createSurface = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.dat.src };
    if (bal.dat.width == null)
        bal.dat.width = 1280;
    if (bal.dat.height == null)
        bal.dat.height = 720;
    dat.width = bal.dat.width;
    dat.height = bal.dat.height;
    var surface = document.getElementById(bal.dat.src);
    if (surface == null) {
        surface = document.createElement("canvas");
        surface.id = dat.idx;
        var body = document.body;
        //something here needs to change
        //need to get the body with out an id
        if (body != null)
            body.appendChild(surface);
    }
    if (surface == null)
        throw new Error("surface not present for pixi");
    if (dat.clr == null)
        dat.clr = "0xFFFFFF";
    var options = {
        width: dat.width,
        height: dat.height,
        view: surface,
        transparent: false,
        backgroundColor: parseInt('0xFF00FF', 16),
        //backgroundColor: parseInt(bal.clr, 16),
        forceCanvas: true,
        antialias: true,
    };
    var app;
    //PIXI.Renderer.registerPlugin("interaction", InteractionManager);
    try {
        app = new PIXI.Application(options);
    }
    catch (e) {
        if (e != "TypeError: Cannot redefine property: ticker") {
            console.log("errr " + e);
            app = { stage: { addChild: () => { } } };
        }
    }
    //dat.dex = cpy.surfaceList.length;
    //dat.parent = surface.parentElement;
    //dat.canvas = surface as HTMLCanvasElement;
    dat.bit = app;
    //bit = await ste.hunt(ActCan.WRITE_CONTAINER, { idx: cpy.stageContainerIDX })
    //var container = bit.canBit.dat.can
    //app.stage.addChild(container)
    //now give me a container
    //cpy.surfaceBits[bal.idx] = bal.dex;
    //cpy.surfaceBitList.push(bal);
    //cpy.surfaceNow = bal.idx;
    //console.log("creation bale " + JSON.stringify(bale));
    //cpy.surfaces[bal.idx] = cpy.surfaceList.length;
    //cpy.surfaceList.push(app);
    //cpy.canvases[bal.idx] = cpy.canvasList.length;
    //cpy.canvasList.push(surface);
    //cpy.nowApp = app;
    //cpy.nowCanvas = surface;
    //debugger
    //if (Boolean(bale.fit) == true) {
    //    ste.dispatch({ type: Act.RESIZE_SURFACE, bale });
    //}
    if (bal.slv != null)
        return bal.slv({ fceBit: { idx: "create-surface", dat } });
    return cpy;
};
exports.createSurface = createSurface;
const deleteSurface = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFce.READ_SURFACE, { idx: bal.idx });
    dat = bit.fceBit.dat;
    var app = dat.bit;
    app.destroy();
    if (bal.slv != null)
        return bal.slv({ fceBit: { idx: "delete-surface", dat } });
    return cpy;
};
exports.deleteSurface = deleteSurface;
const dimensionSurface = async (cpy, bal, ste) => {
    var idx = bal.idx;
    bit = await ste.hunt(ActFce.READ_SURFACE, { idx: bal.idx });
    if (bal.slv != null)
        return bal.slv({ fceBit: { idx: "dimension-surface", dat: bal.dat } });
    return cpy;
};
exports.dimensionSurface = dimensionSurface;
const PIXI = require("pixi.js-legacy");
//# sourceMappingURL=surface.buzz.js.map