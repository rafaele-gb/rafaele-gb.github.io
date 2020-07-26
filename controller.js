/* about-me cards */
var app = angular.module("Javascript", []);
app.controller("ctrl", function($scope) {
  $scope.open1 = false;
  $scope.open2 = false;
  $scope.open3 = false;
  $scope.open4 = false;

  $scope.content = true;
  $scope.photoNum = 0;

  $scope.revealCard = function(cardNumber) {
    if (cardNumber == 1) {
      $scope.open1 = true;
      $scope.open2 = false;
      $scope.open3 = false;
      $scope.open4 = false;
    }

    if (cardNumber == 2) {
      $scope.open1 = false;
      $scope.open2 = true;
      $scope.open3 = false;
      $scope.open4 = false;
    }

    if (cardNumber == 3) {
      $scope.open1 = false;
      $scope.open2 = false;
      $scope.open3 = true;
      $scope.open4 = false;
    }

    if (cardNumber == 4) {
      $scope.open1 = false;
      $scope.open2 = false;
      $scope.open3 = false;
      $scope.open4 = true;
    }
  }

  $scope.openCarousel = function(photoNumber){
    $scope.content = false;
    $scope.photoNum = photoNumber;
  }
});
