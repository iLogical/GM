'use strict'

import { app, protocol, BrowserWindow, Menu } from 'electron'
import electronLocalshortcut from 'electron-localshortcut'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'

const isDevelopment = process.env.NODE_ENV !== 'production'

let win
protocol.registerStandardSchemes(['app'], { secure: true })
function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false
  })

  if (isDevelopment || process.env.IS_TEST) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })
  win.maximize()
  Menu.setApplicationMenu(null)

  electronLocalshortcut.register(win, 'CmdOrCtrl+Shift+I', () => {
    win.webContents.openDevTools()
  })

  electronLocalshortcut.register(win, 'CmdOrCtrl+R', () => {
    win.reload()
  })

  electronLocalshortcut.register(win, 'CmdOrCtrl+E', () => {
    win.webContents.send('alfred', {})
  })

  win.on('maximize', () => {
    win.webContents.send('maximized', true)
  })

  win.on('unmaximize', () => {
    win.webContents.send('maximized', false)
  })
}
export function init () {
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })

  app.on('ready', async () => {
    if (isDevelopment && !process.env.IS_TEST) {
      await installVueDevtools()
    }
    createWindow()
  })

  if (isDevelopment) {
    if (process.platform === 'win32') {
      process.on('message', data => {
        if (data === 'graceful-exit') {
          app.quit()
        }
      })
    } else {
      process.on('SIGTERM', () => {
        app.quit()
      })
    }
  }
}
