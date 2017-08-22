"USE STRICT";
app.controller("customerCtrl", function($scope, $location,$routeParams,dbService,windowService,$rootScope,$route){

  var id = $routeParams.id

  $scope.closeWindow = function(){
    windowService.close();
  }
  $scope.minimizeWindow = function(){
    windowService.minimize();
  }

  $scope.showDetails = function(customer){
    $scope.customerDetails = customer
  }

  $scope.loadData = function(){
    dbService.runAsync("SELECT * FROM customers", function(data){
      $scope.customers = data;
      if (id) {
        $scope.showDetails(data.filter(customer => customer.id == id)[0]);
      }
      else{
        $scope.showDetails(data[0]);
      }
    });
  }



  $scope.loadData();

});
