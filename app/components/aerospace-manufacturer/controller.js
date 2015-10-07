'use strict';

angular.module('webApplicationApp')
    .controller('AerospaceManufacturerController', ['$scope', 'AerospaceManufacturerService', '$routeParams', function($scope, aerospaceManufacturerService, $routeParams) {
      aerospaceManufacturerService.success(function(data) {
        console.log("->"+data[$routeParams.id]);
        $scope.detail = data[$routeParams.id];
      });
}]);