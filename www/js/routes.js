angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('lightDNATester.listaDeDispositivos', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listaDeDispositivos.html',
        controller: 'listaDeDispositivosCtrl'
      }
    }
  })

  .state('lightDNATester.testeGeral', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/testeGeral.html',
        controller: 'testeGeralCtrl'
      }
    }
  })

  .state('lightDNATester.testeUnitRio', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/testeUnitRio.html',
        controller: 'testeUnitRioCtrl'
      }
    }
  })

  .state('lightDNATester', {
    url: '/side-menu21',
    templateUrl: 'templates/lightDNATester.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});