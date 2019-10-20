var app = angular.module("app", []).controller('AppCtrl',
  function AppCtrl($scope, $http) {

    let refresh = function () {
      // creating route
      // and telling the browser what to do
      // when it recieves the json data from the server:
      $http.get('/contactlist').then(function (response) {
        console.log("I received the data from the server");
        $scope.contacts = response.data;
        // clearing input fields:
        $scope.contact = null;
      });
    };

    refresh();

    $scope.addContact = function () {
      $scope.contact._id = null; // this way whenever a new contact is added it is always assigned a new id by the database
      console.log($scope.contact);
      // sending the input data to the server:
      $http.post('contactlist', $scope.contact).then(function(res) {
        console.log(res);
        refresh();
      });
    };

    $scope.remove = function(id) {
      console.log(id);
      $http.delete('/contactlist/' + id).then(function(res) {
        refresh();
      });
    }

    $scope.edit = function(id) {
      console.log(id);
      $http.get('/contactlist/' + id).then(function(res) {
        $scope.contact = res.data;
      });
    };

    $scope.update = function() {
      console.log($scope.contact._id);
      // sending $scope.contact to the server (second argument):
      $http.put('/contactlist/' + $scope.contact._id, $scope.contact)
      .then(function(res){
        refresh();
      });
    };

    $scope.clear = function() {
      $scope.contact = null;
    }
    
  }
);