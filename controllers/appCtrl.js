"USE STRICT";
app.controller("appCtrl", function($scope, $location, dbService, windowService){

  $scope.toggleMaximizeWindowIcon = "mdi mdi-window-maximize";
  windowService.unmaximize();


  $scope.hightlightActiveMenu = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'activeNav' : '';
  }

  $scope.closeWindow = function(){
    windowService.close();
  }
  $scope.toggleMaximizeWindow = function(){
    if (windowService.isMaximized()) {
      windowService.unmaximize();
      $scope.toggleMaximizeWindowIcon = "mdi mdi-window-maximize";
    }
    else{
      windowService.maximize();
      $scope.toggleMaximizeWindowIcon = "mdi mdi-window-restore";
    }
  }
  $scope.minimizeWindow = function(){
    windowService.minimize();

  }

});
