import { app, BrowserWindow, Tray, Menu } from 'electron'
import vueDevtools from 'vue-devtools'
import electronDebug from 'electron-debug'
import path from 'path'
import url from 'url'
import electronLocalshortcut from 'electron-localshortcut'

export let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    frame: false,
    webPreferences: {
      nodeIntegrationInWorker: true
    }
  })
  mainWindow.loadURL(url.format({ pathname: path.join(__dirname, 'index.html') }))

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  const appIcon = new Tray(path.join(__dirname, 'd20.png'));
  const contextMenu = Menu.buildFromTemplate([
      {
          label: 'Show App', click: function () {
            mainWindow.show();
          }
      },
      {
          label: 'Quit', click: function () {
              app.isQuiting = true;
              app.quit();

          }
      }
  ])
  appIcon.setContextMenu(contextMenu)
  mainWindow.maximize()
  Menu.setApplicationMenu(null)

  electronLocalshortcut.register(mainWindow, 'CmdOrCtrl+Shift+I', () => {
    mainWindow.webContents.openDevTools()
  })

  electronLocalshortcut.register(mainWindow, 'CmdOrCtrl+R', () => {
    mainWindow.reload()
  })

  electronLocalshortcut.register(mainWindow, 'CmdOrCtrl+E', () => {
    mainWindow.webContents.send('alfred', {})
  })

  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('maximized', true)
  })

  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('maximized', false)
  })
}

export function init () {
  app.on('ready', () => {
    if (process.env.NODE_ENV !== 'production') {
      vueDevtools.install()
      electronDebug({showDevTools: false})
    }
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  })
};
