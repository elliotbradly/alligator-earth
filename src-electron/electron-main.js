import { app, ipcMain, dialog, BrowserWindow } from 'electron'
import path from 'path'
import os from 'os'

// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

let mainWindow

const MQTT = require('async-mqtt');

const GAME =  require('./game')

//const PLAY = require('../000.play/index.js')
//const ActPly = require('../000.play/00.play.unit/play.action')

//const STORE = require('../001.store/index.js')
//const ActStr = require('../001.store/00.store.unit/store.action')

const SPACE = require('../002.space/index.js')
const ActSpc = require('../002.space/00.space.unit/space.action')
const ActMap = require('../002.space/03.hexmap.unit/hexmap.action')
const ActFoc = require('../002.space/01.focus.unit/focus.action')

//const EARTH = require('../011.earth/index.js')
//const ActErt = require('../011.earth/00.earth.unit/earth.action')

const aedes = require("aedes")();
const server = require("net").createServer(aedes.handle);
const port = 9011;
const wsPort = 8883;

const httpServer = require('http').createServer()
const ws = require('websocket-stream')
ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(wsPort, function () {
  console.log('Aedes MQTT-WS listening on port: ' + wsPort)
  aedes.publish({ topic: 'aedes/hello', payload: "I'm broker " + aedes.id })
});

server.listen(port, async () => {
  console.log("server started and listening on port ", port);
  //open(port)

  const local = 'mqtt://localhost:' + port;
  const localBit = { idx: 'local', src: local };

  //var bit = await STORE.hunt(ActStr.INIT_STORE, { val: 0, dat: MQTT, src: local })
  //console.log(JSON.stringify(bit))

  var bit = await SPACE.hunt(ActSpc.INIT_SPACE, { val: 0, dat: MQTT, src: local })
  console.log(JSON.stringify(bit))

  //var bit = await EARTH.hunt(ActErt.INIT_EARTH, { val: 0, dat: MQTT, src: local })
  //console.log(JSON.stringify(bit))

  //var bit = await PLAY.hunt(ActPly.INIT_PLAY, { val: 0, dat: MQTT, src: local });
  //console.log(JSON.stringify(bit))

});


async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({})
  if (!canceled) {
    return filePaths[0]
  }
}

async function openGame() {

  GAME.open( SPACE );

  //bit = await SPACE.hunt(ActFoc.WRITE_FOCUS, { foc: 'foc00' })
  //bit = await SPACE.hunt(ActFoc.WRITE_FOCUS, { foc: 'foc00' })

  //var bit = await PLAY.hunt(ActPly.OPEN_PLAY, { val: 0 })
  return {intBit:{idx:'game-opened'}}
}

async function shapeHexmap() {
  bit = await SPACE.hunt(ActMap.SHAPE_HEXMAP, { idx: 'hex00', dat: { frm: 'rectangle' } })
  return bit
}

async function createWindow() {

  ipcMain.handle('dialog:openFile', handleFileOpen)
  ipcMain.handle('game:openGame', openGame)

  ipcMain.handle('space:readHexmap', async ( evt, idx ) => {
    bit = await SPACE.hunt(ActMap.READ_HEXMAP, { idx })
    return JSON.stringify(bit)

  })

  ipcMain.handle('space:forwardFocus', async ( evt, idx ) => {
    bit = await SPACE.hunt(ActFoc.FORWARD_FOCUS, { idx })
    return JSON.stringify(bit)
  })

  ipcMain.handle('space:spinRightFocus', async ( evt, idx) => {
    bit = await SPACE.hunt(ActFoc.SPIN_RIGHT_FOCUS, { idx })
    return JSON.stringify(bit)
  })

  ipcMain.handle('space:spinLeftFocus', async ( evt, idx ) => {
    bit = await SPACE.hunt(ActFoc.SPIN_LEFT_FOCUS, { idx })
    return JSON.stringify(bit)
  })

  ipcMain.handle('space:readFocus', async (evt, idx) => {
    bit = await SPACE.hunt(ActFoc.READ_FOCUS, { idx })
    return JSON.stringify(bit)
  })



  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 600,
    height: 480,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  //mainWindow.setPosition(950, 250);
  //mainWindow.maximize();

  console.log("in the beginning...")

  // IPC listener
  ipcMain.on('electron-store-get', async (event, val) => {

    bit = await TIME.hunt(ActTme.INIT_TIME, { val: 0 })
    event.returnValue = JSON.stringify(bit);

  });
  ipcMain.on('electron-store-set', async (event, key, val) => {
    store.set('alligator', 0);
  });


  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
