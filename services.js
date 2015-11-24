(function () {
  "use strict";
  angular
    .module('fruits')
    .factory('FruitsService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/fruitreview';

      var addFruit = function (newFruit) {
        $http.post(url, newFruit).then(function (res) {
          console.log(res);
        });
      };

      var getFruits = function () {
        return $http.get(url);
      };

      return {
        createFruit: addFruit,
        getFruits: getFruits
      };

    });
})();
