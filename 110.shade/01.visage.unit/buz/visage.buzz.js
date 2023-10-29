"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestVisage = exports.listVisage = exports.clearVisage = exports.mainVisage = exports.fullscreenVisage = exports.dimensionVisage = exports.renderVisage = exports.sizeVisage = exports.deleteVisage = exports.createVisage = exports.removeVisage = exports.writeVisage = exports.readVisage = exports.screenVisage = exports.mountVisage = exports.updateVisage = exports.initVisage = void 0;
const ActVsg = require("../../01.visage.unit/visage.action");
const ActCol = require("../../97.collect.unit/collect.action");
const ActFce = require("../../02.surface.unit/surface.action");
const ActCan = require("../../03.container.unit/container.action");
const ActGph = require("../../04.graphic.unit/graphic.action");
const ActTxt = require("../../05.text.unit/text.action");
const ActSpr = require("../../06.sprite.unit/sprite.action");
const ActHex = require("../../07.hexagon.unit/hexagon.action");
const ActVid = require("../../11.video.unit/video.action");
const ActLop = require("../../09.loop.unit/loop.action");
var bit, val, idx, dex, lst, dat;
const initVisage = (cpy, bal, ste) => {
    return cpy;
};
exports.initVisage = initVisage;
const updateVisage = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActVsg.READ_VISAGE, { idx: bal.idx });
    var dat = bit.vsgBit.dat;
    var fceBit = await ste.hunt(ActFce.WRITE_SURFACE, { idx: dat.idx, dat: { src: dat.src, width: dat.width, height: dat.height } });
    if (bal.slv != null)
        bal.slv({ vsgBit: { idx: "update-visage", dat } });
    return cpy;
};
exports.updateVisage = updateVisage;
const mountVisage = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-size-visage", dat: {} } });
    if (bal.dat != null)
        bal.dat = { width: bal.dat.width, height: bal.dat.height };
    else
        bal.dat = { width: null, height: null };
    bal.dat.typ = VISAGE.MOUNT_FULL;
    if (bal.dat.height != null)
        bal.dat.typ = VISAGE.MOUNT_HEIGHT;
    if (bal.dat.width != null)
        bal.dat.typ = VISAGE.MOUNT_WIDTH;
    if ((bal.dat.height != null) && (bal.dat.width != null))
        bal.dat.typ = VISAGE.MOUNT_PART;
    bal.dat.typ;
    bit = await ste.hunt(ActVsg.WRITE_VISAGE, { idx: bal.idx, src: bal.src, dat: bal.dat });
    if (bal.slv != null)
        bal.slv({ vsgBit: { idx: "mount-visage", dat: bit.vsgBit.dat } });
    return cpy;
};
exports.mountVisage = mountVisage;
const screenVisage = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActVsg.WRITE_VISAGE, { idx: bal.idx, dat: { typ: VISAGE.SCREEN } });
    if (bal.slv != null)
        bal.slv({ vsgBit: { idx: "sreen-visage", dat: bit.vsgBit.dat } });
    return cpy;
};
exports.screenVisage = screenVisage;
const readVisage = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'vsg00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActVsg.CREATE_VISAGE });
    if (slv != null)
        slv({ vsgBit: { idx: "read-visage", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readVisage = readVisage;
const writeVisage = async (cpy, bal, ste) => {
    //gotcha-- making sure that the src is present on the collect bale once caused a tremendous issue
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActVsg.CREATE_VISAGE });
    ste.hunt(ActVsg.UPDATE_VISAGE, { idx: bal.idx });
    if (bal.slv != null)
        bal.slv({ vsgBit: { idx: "write-visage", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeVisage = writeVisage;
const removeVisage = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-create-visage", dat: {} } });
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActVsg.DELETE_VISAGE });
    if (bal.slv != null)
        bal.slv({ vsgBit: { idx: "remove-visage", dat: bit.clcBit } });
    return cpy;
};
exports.removeVisage = removeVisage;
const createVisage = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-create-visage", dat: {} } });
    var dat = { idx: bal.idx, src: bal.src, typ: bal.dat.typ };
    var canvas = document.getElementById(dat.src);
    if (canvas == null) {
        canvas = document.createElement("canvas");
        canvas.id = dat.src;
        var body = document.body;
        if (body != null)
            body.appendChild(canvas);
    }
    dat.bit = canvas;
    dat.parent = dat.bit.parentElement;
    dat.height = bal.dat.height;
    dat.width = bal.dat.width;
    dat.canLst = [];
    dat.gphLst = [];
    dat.txtLst = [];
    dat.sprLst = [];
    dat.hexLst = [];
    dat.vidLst = [];
    dat.lopLst = [];
    dat.tonLst = [];
    bit = await ste.hunt(ActVsg.SIZE_VISAGE, { dat });
    dat;
    if (bal.slv != null)
        return bal.slv({ vsgBit: { idx: "create-visage", dat } });
    return cpy;
};
exports.createVisage = createVisage;
const deleteVisage = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-size-visage", dat: {} } });
    bit = await ste.hunt(ActVsg.READ_VISAGE, { idx: bal.idx });
    var dat = bit.vsgBit.dat;
    //remove each type inside a visage
    dat.canLst.forEach(async (a) => ste.hunt(ActCan.REMOVE_CONTAINER, { idx: a }));
    dat.gphLst.forEach(async (a) => ste.hunt(ActGph.REMOVE_GRAPHIC, { idx: a }));
    dat.txtLst.forEach(async (a) => ste.hunt(ActTxt.REMOVE_TEXT, { idx: a }));
    dat.sprLst.forEach(async (a) => ste.hunt(ActSpr.REMOVE_SPRITE, { idx: a }));
    dat.hexLst.forEach(async (a) => ste.hunt(ActHex.REMOVE_HEXAGON, { idx: a }));
    dat.vidLst.forEach(async (a) => ste.hunt(ActVid.REMOVE_VIDEO, { idx: a }));
    dat.lopLst.forEach(async (a) => ste.hunt(ActLop.REMOVE_LOOP, { idx: a }));
    var fceBit = await ste.hunt(ActFce.REMOVE_SURFACE, { idx: dat.idx, dat: { src: dat.src } });
    const canvas = dat.bit;
    if (canvas == null)
        return bal.slv({ fceBit: { idx: "error-delete-visage", dat: {} } });
    const context = canvas.getContext('2d');
    if (context == null)
        return bal.slv({ fceBit: { idx: "error-delete-visage", dat: {} } });
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    if (bal.slv != null)
        return bal.slv({ vsgBit: { idx: "delete-visage", dat } });
    return cpy;
};
exports.deleteVisage = deleteVisage;
const sizeVisage = async (cpy, bal, ste) => {
    var dat = bal.dat;
    var w, h;
    dat.typ;
    switch (dat.typ) {
        case VISAGE.MOUNT_FULL:
            var body = document.body, html = document.documentElement;
            var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            var calcHeight = 0;
            bit = await ste.hunt(ActCol.FETCH_COLLECT, { val: 0, bit: ActVsg.CREATE_VISAGE });
            var clcLst = bit.clcBit.dat.bitList;
            clcLst.forEach((a) => {
                if (a.typ != VISAGE.MOUNT_HEIGHT)
                    return;
                calcHeight += a.height;
            });
            h = height - calcHeight - 5;
            w = dat.parent.clientWidth;
            break;
        case VISAGE.MOUNT_PART:
            w = dat.width;
            h = dat.height;
            break;
        case VISAGE.MOUNT_HEIGHT:
            w = dat.parent.clientWidth;
            h = dat.height;
            break;
        case VISAGE.MOUNT_WIDTH:
            w = dat.width;
            h = dat.parent.clientHeight;
            break;
    }
    const vw = Math.max(w || 0);
    const vh = Math.max(h || 0);
    dat.width = vw;
    dat.height = vh;
    console.log("width " + vw + ' :: height ' + vh);
    if (bal.slv != null)
        return bal.slv({ vsgBit: { idx: "size-visage", dat } });
};
exports.sizeVisage = sizeVisage;
const renderVisage = (cpy, bal, ste) => {
    var canvas = document.getElementById(bal.idx);
    var pngUrl = canvas['toDataURL']("image/png");
    var dat = pngUrl;
    var base64Data = dat.replace(/^data:image\/png;base64,/, "");
    var FS = require('fs-extra');
    FS.ensureDirSync('./frame/');
    dex = FS.readdirSync('./frame').length;
    idx = String(dex).padStart(6, '0');
    var fin = './frame/' + idx + '.png';
    FS.writeFile(fin, base64Data, 'base64', function (err) {
        console.log('writing ' + fin);
        if (bal.slv != null)
            bal.slv({ vsgBit: { idx: "render-visage", dat } });
    });
    return cpy;
};
exports.renderVisage = renderVisage;
const dimensionVisage = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-size-visage", dat: {} } });
    bit = await ste.hunt(ActCol.FETCH_COLLECT, { val: 0, bit: ActVsg.CREATE_VISAGE });
    var clcLst = bit.clcBit.dat.bitList;
    clcLst.forEach((a) => {
        (0, exports.sizeVisage)(cpy, { idx: a.idx, typ: a.typ, dat: a }, ste);
        var height = a.height;
        var width = a.width;
        ste.hunt(ActVsg.WRITE_VISAGE, { idx: a.idx, dat: { width, height } });
    });
    return cpy;
};
exports.dimensionVisage = dimensionVisage;
const fullscreenVisage = async (cpy, bal, ste) => {
    //if (bal.src == null) bal.src = VISAGE.FULL_SCREEN
    //you might need this
    //canvas {
    //    position: absolute;
    //   top: 0;
    //   left: 0;
    //   margin: 0;
    //   padding: 0;
    //   display: block;
    // }
    bit = await ste.hunt(ActVsg.WRITE_VISAGE, { idx: bal.idx, src: bal.src });
    if (bal.slv != null)
        bal.slv({ stgBit: { idx: bal.idx } });
    return cpy;
};
exports.fullscreenVisage = fullscreenVisage;
const mainVisage = (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-size-visage", dat: {} } });
    const { ipcRenderer } = require('electron');
    ipcRenderer.on('update-resize', (_event, value) => {
        setTimeout(() => {
            if (bal.slv != null)
                bal.slv({ vsgBit: { idx: "size-visage" } });
        }, 33);
    });
    ipcRenderer.send('resize-me-please', bal.dat.w, bal.dat.h);
    //bit = await ste.hunt(ActVsg.FULLSCREEN_VISAGE, { src: VISAGE.FULL_SCREEN })
    return cpy;
};
exports.mainVisage = mainVisage;
const clearVisage = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActVsg.READ_VISAGE, { idx: bal.idx });
    var dat = bit.vsgBit.dat;
    return cpy;
};
exports.clearVisage = clearVisage;
//get a list of all the visages here 
const listVisage = async (cpy, bal, ste) => {
    if (typeof window != "object")
        return bal.slv({ fceBit: { idx: "error-create-visage", dat: {} } });
    dat = null;
    bit = await ste.hunt(ActCol.FETCH_COLLECT, { val: 0, bit: ActVsg.CREATE_VISAGE });
    if (bit.clcBit.dat == null)
        lst = [];
    else
        dat = bit.clcBit.dat;
    if (dat != null) {
        dat.bitList.forEach((a) => {
            lst = [];
            lst.push((a.idx));
        });
        lst;
    }
    if (bal.slv != null)
        bal.slv({ vsgBit: { idx: 'list-visage', lst } });
    return cpy;
};
exports.listVisage = listVisage;
const nestVisage = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActVsg.READ_VISAGE, { idx: bal.src });
    var dat = bit.vsgBit.dat;
    switch (bal.dat.typ) {
        case SHADE.CONTAINER:
            dat.canLst.push(bal.dat.idx);
            break;
        case SHADE.GRAPHIC:
            dat.gphLst.push(bal.dat.idx);
            break;
        case SHADE.SPRITE:
            dat.sprLst.push(bal.dat.idx);
            break;
        case SHADE.TEXT:
            dat.txtLst.push(bal.dat.idx);
        case SHADE.HEXAGON:
            dat.hexLst.push(bal.dat.idx);
            break;
        case SHADE.VIDEO:
            dat.vidLst.push(bal.dat.idx);
            break;
        case SHADE.LOOP:
            dat.lopLst.push(bal.dat.idx);
            break;
    }
    bit = await ste.hunt(ActVsg.WRITE_VISAGE, { idx: bal.src, dat });
    if (bal.slv != null)
        bal.slv({ vsgBit: { idx: 'nest-visage' } });
    return cpy;
};
exports.nestVisage = nestVisage;
const VISAGE = require("../../val/visage");
const SHADE = require("../../val/shade");
//# sourceMappingURL=visage.buzz.js.map