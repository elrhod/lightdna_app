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
      cordova.plugins.CordovaMqTTPlugin.connect({
        url:URLBrokerMQTT, //a public broker used for testing purposes only. Try using a self hosted broker for production.
        port:1883,
        clientId:"elrhod_teste",
        connectionTimeout:3000,
        willTopicConfig:{
            qos:0,
            retain:true,
            topic:"willtopic/device/android",
            payload:"mobile toggle"
        },
        username:"uname",
        password:'pass',
        keepAlive:60,
        success:function(s){
            console.log("Sucesso ao conectar no broker MQTT:"+URLBrokerMQTT);
            cordova.plugins.CordovaMqTTPlugin.subscribe({
               topic:"lights/+",
               qos:0,
              success:function(s){
                console.log("Inscrito em tópicos do servidor MQTT!");
              },
              error:function(e){
              }
            })
        },
        error:function(e){
            console.log("Erro ao conectar no broker MQTT:"+URLBrokerMQTT);
        },
        onConnectionLost:function (){
            console.log("Desconectado do broker MQTT:"+URLBrokerMQTT);
        }
      });
    });
    
    //New way to listen to topics
     cordova.plugins.CordovaMqTTPlugin.listen("/lights/+",function(payload,params){
      //Callback:- (If the user has published to /topic/room/hall)
      //payload : contains payload data
      //params : {singlewc:room,multiwc:hall}
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
  });

  $ionicPlatform.on('resume', function(){
    var URLBrokerMQTT = "tcp://10.10.10.1";
    $ionicPlatform.ready(function() {
      cordova.plugins.CordovaMqTTPlugin.connect({
        url:URLBrokerMQTT, //a public broker used for testing purposes only. Try using a self hosted broker for production.
        port:1883,
        clientId:"elrhod_teste",
        connectionTimeout:3000,
        willTopicConfig:{
            qos:0,
            retain:true,
            topic:"willtopic/device/android",
            payload:"mobile toggle"
        },
        username:"uname",
        password:'pass',
        keepAlive:60,
       success:function(s){
            console.log("Sucesso ao conectar no broker MQTT:"+URLBrokerMQTT);
            cordova.plugins.CordovaMqTTPlugin.subscribe({
               topic:"lights/+",
               qos:0,
              success:function(s){
                console.log("Inscrito em tópicos do servidor MQTT!");
              },
              error:function(e){
              }
            })
        },
        error:function(e){
            console.log("Erro ao conectar no broker MQTT:"+URLBrokerMQTT);
        },
        onConnectionLost:function (){
            console.log("Desconectado do broker MQTT:"+URLBrokerMQTT);
        }
      });
    });
  });


}

)