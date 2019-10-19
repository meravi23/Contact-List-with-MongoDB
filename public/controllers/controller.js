
var app = angular.module("app", []).controller('AppCtrl',
  function AppCtrl($scope, $http) {
    
    // creating route
    // and telling the browser what to do
    // when it recieves the json data from the server:
    $http.get('/contactlist').then(function (response) {
      console.log("I received the data from the server");
      $scope.contacts = response.data;
    });

    $scope.addContact = function(){
      console.log($scope.contact);
      // sending the input data to the server:
      $http.post('contactlist', $scope.contact);
    }

  }
);