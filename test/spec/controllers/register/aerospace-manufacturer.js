'use strict';

describe('Controller: RegisterAerospaceManufacturerCtrl', function () {

  // load the controller's module
  beforeEach(module('webApplicationApp'));

  var RegisterAerospaceManufacturerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterAerospaceManufacturerCtrl = $controller('RegisterAerospaceManufacturerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegisterAerospaceManufacturerCtrl.awesomeThings.length).toBe(3);
  });
});
