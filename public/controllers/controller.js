
var app = angular.module("app", []).controller('AppCtrl',
  function AppCtrl($scope, $http) {
    
    $http.get('/contactlist') // creating route

    person1 = {
      name: 'Merav',
      email: "merav@gmail.com",
      phone: "054-555-5555"
    };

    person2 = {
      name: 'John',
      email: "john@hotmail.com",
      phone: "052-222-2222"
    };

    person3 = {
      name: 'Jane',
      email: "jane@yahoo.com",
      phone: "053-333-3333"
    };

    var contactList = [person1, person2, person3];
    $scope.contacts = contactList;

  }
);