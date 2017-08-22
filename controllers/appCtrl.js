"USE STRICT";
app.controller("appCtrl", function($scope, $location, dbService){
  $scope.hightlightActiveMenu = function (path) {
  return ($location.path().substr(0, path.length) === path) ? 'activeNav' : '';
}
});
