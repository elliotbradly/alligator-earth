"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testShade = exports.patchShade = exports.editShade = exports.bodyShade = exports.updateShade = exports.browserShade = exports.runShade = exports.openShade = exports.initShade = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActShd = require("../../00.shade.unit/shade.action");
const ActVsg = require("../../01.visage.unit/visage.action");
const ActSrf = require("../../02.surface.unit/surface.action");
const ActCan = require("../../03.container.unit/container.action");
const ActGph = require("../../04.graphic.unit/graphic.action");
const ActTxt = require("../../05.text.unit/text.action");
const ActSpr = require("../../06.sprite.unit/sprite.action");
const ActHex = require("../../07.hexagon.unit/hexagon.action");
const ActVid = require("../../11.video.unit/video.action");
const ActTun = require("../../10.toon.unit/toon.action");
const ActSpc = require("../../act/space.action");
const ActVrt = require("../../act/vurt.action");
const ActDsk = require("../../act/disk.action");
var SHADE = global.SHADE;
var SPACE = global.SPACE;
var bit, val, idx, dex, lst, dat;
const initShade = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActShd, ActVsg, ActSrf, ActCan, ActGph, ActTxt, ActSpr, ActHex, ActVid, ActTun], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    ste.bus(ActSpc.READY_SPACE, {});
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-shade" } });
    return cpy;
};
exports.initShade = initShade;
const openShade = async (cpy, bal, ste) => {
    //we need to move a whole directory over
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' });
    bit = await ste.hunt(ActShd.RUN_SHADE, {});
    const open = require('open');
    var loc = './vrt.opn.bat';
    bit = await open(loc);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ shdBit: { idx: "open-shade" } });
    }, 33);
    return cpy;
};
exports.openShade = openShade;
const runShade = async (cpy, bal, ste) => {
    const open = require('open');
    var loc = './vrt.gil.bat';
    bit = await open(loc);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ shdBit: { idx: "run-shade" } });
    });
    return cpy;
};
exports.runShade = runShade;
const browserShade = async (cpy, bal, ste) => {
    const open = require('open');
    var loc = 'http://localhost:3333/';
    bit = await open(loc);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ shdBit: { idx: "browser-shade" } });
    }, 33);
    return cpy;
};
exports.browserShade = browserShade;
const updateShade = async (cpy, bal, ste) => {
    const { exec } = require('child_process');
    exec('tsc -b 110.shade', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        process.chdir("../999.vurt");
        bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "110.shade" });
        process.chdir("../110.shade");
        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/110.shade.js' });
        var shade = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/110.shade.js', dat: shade });
        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' });
        var html = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' });
        var index = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index });
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html });
        bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' });
        setTimeout(() => {
            if (bal.slv != null)
                bal.slv({ shdBit: { idx: "update-shade" } });
        }, 3);
    });
    return cpy;
};
exports.updateShade = updateShade;
const bodyShade = (cpy, bal, ste) => {
    var gel = bal.dat;
    var out = [];
    bal.src.split("\n").forEach((a, b) => {
        if (a.includes('//') == true)
            return;
        var doTCompiled = doT.template(a);
        var outLine = doTCompiled(gel);
        out.push(outLine);
    });
    if (bal.slv != null)
        bal.slv({ shdBit: { idx: "update-shade", src: bal.src, dat: out.join('\n') } });
    return cpy;
};
exports.bodyShade = bodyShade;
const editShade = async (cpy, bal, ste) => {
    const { exec } = require('child_process');
    process.chdir("../../studio/");
    exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        process.chdir("../packages/110.shade");
        if (bal.slv != null)
            bal.slv({ symBit: { idx: "edit-symbol", dat: {} } });
    });
    return cpy;
};
exports.editShade = editShade;
const patchShade = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.COPY_DISK, { src: '../gillisse/src', idx: './source' });
    if (bal.slv != null)
        bal.slv({ symBit: { idx: "edit-symbol", dat: {} } });
    return cpy;
};
exports.patchShade = patchShade;
const testShade = async (cpy, bal, ste) => {
    //bit = await ste.hunt( ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.fmeBit.dat });
    bit = await ste.hunt(ActGph.WRITE_GRAPHIC, { idx: 'gph00', src: 'vsg00' });
    bit = await ste.hunt(ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });
    bit = await ste.hunt(ActGph.WRITE_GRAPHIC, { idx: 'gph01', src: 'vsg00' });
    bit = await ste.hunt(ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });
    const response = await fetch("./dat/hexmap/000.json");
    const jsonData = await response.json();
    bit = await ste.hunt(ActHex.WRITE_HEXAGON, { idx: 'hex00', src: 'vsg00', dat: { map: jsonData } });
    debugger;
    //bit = await SHADE.hunt(SHADE.ActTxt.WRITE_TEXT, { idx: 'txt00', src: 'vsg00', dat: { txt: "feel the love", y: 100 } });
    //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.txtBit.dat });
    //bit = await SHADE.hunt(SHADE.ActTxt.WRITE_TEXT, { idx: 'txt01', src: 'vsg00', dat: { txt: "thank you", y: 110 } });
    //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.txtBit.dat });
    //bit = await SHADE.hunt(SHADE.ActTxt.WRITE_TEXT, { idx: 'txt02', src: 'vsg00', dat: { txt: "looks really nice", y: 120 } });
    //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.txtBit.dat });
    //bit = await SHADE.hunt(SHADE.ActSpr.WRITE_SPRITE, { idx: 'spr00', src: 'vsg00', dat: { src: "./img/000.png", y: 130 } });
    //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.sprBit.dat });
    //bit = await SPACE.hunt(SPACE.ActMap.WRITE_HEXMAP, { idx: 'map00', dat: { gph: 'gph00' } });
    //var hexmap = bit.mapBit.dat;
    //bit = await SPACE.hunt(SPACE.ActFoc.WRITE_FOCUS, { idx: 'foc00', dat: { gph: 'gph01' } });
    //bit = await ste.hunt( ActFcg.WRITE_FOCIGON, { idx: 'fcg01', src: 'vsg00', dat: {dat:bit.focBit.dat}   });
    if (bal.slv != null)
        bal.slv({ symBit: { idx: "test-shade", dat: {} } });
    return cpy;
};
exports.testShade = testShade;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const doT = require("dot");
//# sourceMappingURL=shade.buzz.js.map