(function () {


  angular
    .module('fruits')
    .controller('MainController', function ($scope) {
      $scope.alertMe = function () {
      _.times(1000, function () {

        });
      };

    })
    .controller('FruitsController', function ($scope, FruitsService) {

      FruitsService.getFruits().success(function(fruits) {
        console.log(fruits);
        $scope.fruits = fruits;
      });



      $scope.reviewFruits = [
        {
          name: "Apple",
          image: "http://www.punchkart.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_2.jpg",
          description: "Crisp and delicious"
        },
        {
          name: "Banana",
          image: "http://saveourbones.saveour.netdna-cdn.com/wp-content/uploads/bananas.jpg",
          description: "Soft and sweet "
        }
      ];

      $scope.addFruit = function (newFruit) {
        console.log(newFruit);
        FruitsService.createFruit(newFruit);
      };

    });


})();
