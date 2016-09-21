// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    var URLBrokerMQTT = "tcp://10.10.10.1";
    $ionicPlatform.ready(function() {

    });
  });

  // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
  // for form inputs)
  if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.disableScroll(true);
  }
  if (window.StatusBar) {
    // org.apache.cordova.statusbar required
    StatusBar.styleDefault();
  }
})


.service('Servconnection', function(){
  this.connecta = function(){
    var connection = new window.plugins.mqtt({
        uri: 'ws://10.10.10.1:9001',
        keepAliveInterval: 120,
        clientId: 'Elrhod_test',
        reportConnectionStatus: true,
        reconnectDelay: [1000, 5000, 10000, -1] //three tries to reconnect will take place. If -1 met, then reconnect process will stop.
    });            
    connection.on('connected', function () {
        connection.subscribe('lights/+/status', {qos: 0});
        connection.publish('lights', 'W0001-100', {qos: 0, retained: true});
        connection.on('lights/+/status', function (value) {
          console.log('Yay! Value is: ' + value);
        });
    });
  }
})

