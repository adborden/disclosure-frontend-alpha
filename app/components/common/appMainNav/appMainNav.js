(function() {
  'use strict';

  //var searchInNavbarModule = require('./searchInNavbar/searchInNavbar');
  //var appMainNavModule = require('./appMainNav');
  var appMainNavDirective = require('./appMainNavDirective');
  var AppMainNavController = require('./AppMainNavController');

  module.exports = angular.module('appMainNavModule',
    [
      //'searchInNavbarModule'
    ])
    .directive('appMainNav', appMainNavDirective)
    .controller('AppMainNavController', AppMainNavController);

})();