"USE STRICT";
app.factory("windowService", function($http){
	return require('electron').remote.getCurrentWindow();
});
