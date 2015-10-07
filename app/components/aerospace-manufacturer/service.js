// https://www.mocky.io/v2/561474d70f00008a09a30f7d
// https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json


            
/*
angular.module('webApplicationApp')
    .factory('AerospaceManufacturerService', ['$http', function($http) {
      console.log('vai fazer o get');
      return $http({
                method: 'JSONP',
                url: 'https://www.mocky.io/v2/561474d70f00008a09a30f7d'
             })
             .then(function(greeting) {
                console.log('Success: ' + greeting);
                return greeting;
        }, function(reason) {
                console.log('Failed: ' + reason);
                return reason;
        });
}]);
*/


angular.module('webApplicationApp')
    .factory('photos', ['$http', function($http) {
      return $http.get({
                method: 'JSONP',
                url: 'https://www.mocky.io/v2/561474d70f00008a09a30f7d'
             })
             .success(function(data) {
               console.log('Success: ' + data);
               return data;
             })
             .error(function(reason) {
               console.log('Failed: ' + reason);
               return reason;
             });
}]);
