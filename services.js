(function () {
  "use strict";
  angular
    .module('dinosaurs')
    .factory('DinosaursService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/dinosaurreview';
      var localDinosaurs = [
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
      var addDinosaur = function (newDinosaur) {
        $http.post(url, newDinosaur).then(function (res) {
          console.log(res);
        });
      };


      var getDinosaurs = function () {
        return $http.get(url);
      };

      return {
        createDinosaur: addDinosaur,
        getDinosaurs: getDinosaurs
      };

      .factory('LikeService', function ($http) {
            var url = 'http://tiny-tiny.herokuapp.com/collections/dinosaurreview';

            var getLikedDinosaurs = function () {
              return $http.get(url);
            };

            var addLikedDinosaur = function (dinosaur) {
              $http.post(url, dinosaur).success(function (res) {
                console.log(res);
              });
            };

            var getSingleDinosaur = function (dinosaurId) {
              return $http.get(url + '/' + dinosaurId);
            };

            var deleteLikedDinosaur = function (dinosaurId) {
              $http.delete(url + '/' + dinosaurId).then(function (res) {
                console.log(res);
              });
            };

            var updateLikedDinosaur = function (dinosaur) {
              $http.put(url + '/' + dinosaur._id, dinosaur).then(function (res) {
                console.log(res);
              });
            };

            return {
              getLikes: getLikedDinosaurs,
              getSingleDinosaur: getSingleDinosaur,
              deleteDinosaur: deleteLikedDinosaur,
              updateLikedDinosaur: updateLikedDinosaur,
              addLikedDinosaur: addLikedDinosaur
            };




    });
})();
