var electron = require('electron');
var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    'min-width': 900,
    'min-height': 700,
    frame: false
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
