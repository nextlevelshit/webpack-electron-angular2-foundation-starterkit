var app = require('app'); 

// browser-window creates a native window
var BrowserWindow = require('browser-window');
var mainWindow = null;

// Do not close at OSX, just put hide window
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  // Initialize the window to your specified dimensions
  mainWindow = new BrowserWindow({ width: 1200, height: 900 });
  // Tell Electron where to load the entry point from
  mainWindow.loadURL('file://' + __dirname + '/browser.html');
  // Open the devtools.
  mainWindow.openDevTools();
  // Clear out the main window when the app is closed
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});