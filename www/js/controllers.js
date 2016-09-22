angular.module('app.controllers', [])
  

.controller('lightDNATesterCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
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
    connection.connect();
  }
})

.controller('listaDeDispositivosCtrl', ['$scope', '$timeout', '$stateParams','Servconnection', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $timeout, $stateParams, Servconnection) {
	$scope.botconectar = function() {

		Servconnection.connecta();

	}
 		
}])

.controller('testeGeralCtrl', ['$scope','$timeout', '$stateParams', 'Servconnection',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $timeout, $stateParams, Servconnection) {
	$scope.eduardo = "clique-me";
	var edu=0;
	$scope.ativa = function(){
		$scope.eduardo = "ativado";
		alert("olamiundo:"+edu);
		console.log("olamiundo:"+edu);
		    $timeout(fudeo, 3000);
	};

	function fudeo(){ $scope.eduardo = "fudeo";	}
	
	$scope.iniciarTeste = function(){
		Servconnection.LigaTudo();
		Servconnection.DesligaTudo();
	}
}])
   
.controller('testeUnitRioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}]);