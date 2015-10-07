'use strict';

describe('Controller: RegisterAerospacemanufacturerCtrl', function () {

  // load the controller's module
  beforeEach(module('webApplicationApp'));

  var RegisterAerospacemanufacturerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterAerospacemanufacturerCtrl = $controller('RegisterAerospacemanufacturerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegisterAerospacemanufacturerCtrl.awesomeThings.length).toBe(3);
  });
});
