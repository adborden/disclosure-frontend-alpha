(function () {
  'use strict';
  
  window.angular = require('angular');
  window.jQuery = require('jquery');
  window._ = require('lodash');
  window.d3 = require('d3');
  window.c3 = require('./vendor/noNpm/c3/c3');
  
  // require('./vendor/vendor');
  require('./components/common/core/core');
  require('./components/homePageModule/homePage');
  require('./components/appMainModule/appMain');
  
  var appInit = require('./appInit');
  var appRoutes = require('./appRoutes');
  var appConfig = require('./appConfig');
  var appConstants = require('./appConstants');
  var appDirective = require('./appDirective');
  
  module.exports = angular.module('campaignFinanceApp', [
      'coreModules',
      'homePageModule',
      'appMainModule'
    ])
    .config(appRoutes)
    .config(appConfig)
    .constant('version', require('../package.json').version)
    .constant('CONSTANTS', appConstants)
    .run(appInit)
    .directive('campaignFinanceApp', appDirective);
    
})();

