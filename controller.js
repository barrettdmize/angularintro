(function () {


  angular
    .module('dinosaurs')
    .controller('MainController', function ($scope) {
      $scope.alertMe = function () {
      _.times(1000, function () {

        });
      };

    })
    .controller('DinosaursController', function ($scope, DinosaursService) {

      DinosaursService.getDinosaurs().success(function(dinosaurs) {
        console.log(dinosaurs);
        $scope.reviewDinosaurs = dinosaurs;
      });



      $scope.reviewDinosaurs = [
        {
          name: "Raptor",
          image: "http://g01.s.alicdn.com/kf/HTB16kssIXXXXXXzXFXXq6xXFXXX3/Raptor-for-Jurassic-Park-Animatronic-Dinosaurs.jpg_200x200.jpg",
          description: "Smart and cuddly",
          review: '',
          rating: '?',
          price: '$20,000'


        },
        {
          name: "T-rex",
          image: "http://t00.deviantart.net/VnTnMr2J_tziIk2ZZ4XPpT6JEPA=/300x200/filters:fixed_height(100,100):origin()/pre05/2c52/th/pre/i/2015/113/8/b/angry_t_rex_by_thesmily-d5ulcwk.jpg",
          description: "Definitely for the pet owner with plenty of space ",
          review: '',
          rating: '?',
          price: '$50,000',
        }
      ];

      $scope.addDinosaur = function (newDinosaur) {
        console.log(newDinosaur);
        DinosaursService.createDinosaur(newDinosaur);
      };

    });
    ////////////////The LIKE or add to cart section
    angular
        .module('dinosaurs')
        .controller('MainController', function ($scope) {

        })
        .controller('DinosaursController', function ($scope, DinosaurService, LikeService, $routeParams) {

          DinosaurService.getDinosaurData().then(function (dinosaurs) {

            $scope.dinosaurs = dinosaurs;
          });
          LikeService.getLikes().success(function (likedDinosaurs) {
            $scope.likedDinosaurs = likedDinosaurs;
          });
          $scope.likeDinosaur = function (dinosaur) {
            LikeService.addLikedDinosaur(dinosaur);
          };
          if($routeParams.likeDinosaurId) {
          LikeService.getSingleDinosaur($routeParams.likeDinosaurId).success(function (likedDinosaur) {
            $scope.likedDinosaur = likedDinosaur;
            console.log('likedDinosaur: ',$scope.likedDinosaur);
          });
        }

           DinosaurService.getSingleDinosaur($routeParams.dinosaurId).success(function (dinosaur) {
             $scope.singleDinosaur = dinosaur;
           });
           console.log('single', $scope.singleDinosaur);

    })();

})();
