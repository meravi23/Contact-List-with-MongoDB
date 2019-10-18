
var app = angular.module("app", []).controller('AppCtrl',
  function AppCtrl($scope, $http) {
    
    // creating route
    // and telling the browser what to do
    // when it recieves the json data from the server:
    $http.get('/contactlist').then(function (response) {
      console.log("I received the data from the server");
      $scope.contacts = response.data;
    });
  }
);