// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services'])

.run(function($ionicPlatform, $timeout) {
    $ionicPlatform.ready(function() {
     if (WifiWizard.isWifiEnabled(WifiEnOk, WifiNOTEn) === true) {
             console.log("Wifi IS Enabled.");
                 $timeout(conect_wifi, 3000);
         } else {
             console.log("Wifi NOT Enabled.");
             WifiWizard.setWifiEnabled(true, WifiEnabled, WifiEnabledfail);
             console.log("Wifi IS Enabled.");
                 $timeout(conect_wifi, 3000);
         }

         function conect_wifi(){ WifiWizard.connectNetwork("LightDNA", win, fail);       }

     function WifiNOTEn(){ console.log("Wifi Enable returned not OK...");    }

     function WifiEnOk(){ console.log("Wifi Enable Returned ok.");   }

     function WifiEnabled(){ console.log("SetWifiEnabled returned OK."); }

     function WifiEnabledfail(){ console.log("SetWifiEnabled returned Error.");}

     function win(){ console.log("Sucesso em conectar em LightDNA"); }

     function fail(){ console.log("Erro ao conectar em LightDNA"); 
         alert("Erro ao conectar em LightDNA!!!"); }
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

.service('Servconnection', function($ionicPlatform){
    var connection;

    $ionicPlatform.ready(function() {
        var connection = new window.plugins.mqtt({
            uri: 'ws://10.10.10.1:9001',
            keepAliveInterval: 120,
            clientId: 'Elrhod_test',
            reportConnectionStatus: true,
            reconnectDelay: [1000, 5000, 10000, -1] //three tries to reconnect will take place. If -1 met, then reconnect process will stop.
        })  
        // connection.onMessageArrived = eduardo;
    })

    connection = new window.plugins.mqtt({
        uri: 'ws://10.10.10.1:9001',
        keepAliveInterval: 120,
        clientId: 'Elrhod_test',
        reportConnectionStatus: true,
        reconnectDelay: [1000, 5000, 10000, -1] //three tries to reconnect will take place. If -1 met, then reconnect process will stop.
    })  


    this.connecta = function($connection){
        connection.connect();
        connection.on('connected', function () {
            connection.subscribe('eduardo', {qos: 0});
            console.log("Subscribed at toppic 'lights'.");
        })
    }

    // message = new Paho.MQTT.Message
    // connection.onMessageArrived = onMessageArrived(message);

    this.LigaTudo = function($connection){
            connection.publish('lights', 'W0001-100', {qos: 0, retained: true});
            console.log("Msg 'W0001-100' published at toppic 'lights'.");
    }

    this.DesligaTudo = function($connection){
            connection.publish('lights', 'W0001-000', {qos: 0, retained: true});
            console.log("Msg 'W0001-000' published at toppic 'lights'.");
    }


    this.connection.onMessageArrived = function eduardo(msg){
        alert("RECEBI ALGO!");
    }

    // function onMessageArrived(message) {
    //     console.log("onMessageArrived:"+message.payloadString);
    // }
});
