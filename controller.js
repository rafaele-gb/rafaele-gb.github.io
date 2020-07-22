var app = angular.module("rafael", []);
app.controller("ctrl", function($scope) {
  $scope.open1 = false;
  $scope.open2 = false;
  $scope.open3 = false;

  $scope.revealCard = function(cardNumber) {
    if (cardNumber == 1) {
      $scope.open1 = true;
      $scope.open2 = false;
      $scope.open3 = false;
    }

    if (cardNumber == 2) {
      $scope.open1 = false;
      $scope.open2 = true;
      $scope.open3 = false;
    }

    if (cardNumber == 3) {
      $scope.open1 = false;
      $scope.open2 = false;
      $scope.open3 = true;
    }
  }
});
