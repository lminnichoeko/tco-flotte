'use strict';

import angular from 'angular';

export default angular.module('oekoFlotteApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .constant('demoScenario', require('../../server/config/demo'))
  .constant('printMode', /PhantomJS/.test(window.navigator.userAgent))
  .name;
