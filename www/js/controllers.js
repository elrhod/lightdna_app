angular.module('app.controllers', [])
  

.controller('lightDNATesterCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

.controller('listaDeDispositivosCtrl', ['$scope', '$timeout', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $timeout, $stateParams) {
  $scope.conectar = function() {
 	if (WifiWizard.isWifiEnabled(WifiEnOk, WifiNOTEn) === true) {
 		console.log("Wifi IS Enabled.");
 			$timeout(conect_wifi, 3000);
 	} else {
 		console.log("Wifi NOT Enabled.");
 		WifiWizard.setWifiEnabled(true, WifiEnabled, WifiEnabledfail);
 		console.log("Wifi IS Enabled.");
 			$timeout(conect_wifi, 3000);
 		// inserir delay
 	//	$timeout(WifiWizard.connectNetwork("LightDNA", win, fail), 3000); 
 	}

 	function conect_wifi(){
 		WifiWizard.connectNetwork("LightDNA", win, fail);	
 	}

	function WifiNOTEn(){ console.log("Wifi Enable returned not OK...");	}

	function WifiEnOk(){ console.log("Wifi Enable Returned ok.");	}

	function WifiEnabled(){	console.log("SetWifiEnabled returned OK.");	}

	function WifiEnabledfail(){	console.log("SetWifiEnabled returned Error.");}

	function win(){	console.log("Sucesso em conectar em LightDNA"); }

	function fail(){ console.log("Erro ao conectar em LightDNA");  }

  }
}])

.controller('testeGeralCtrl', ['$scope','$timeout', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $timeout, $stateParams) {
	$scope.eduardo = "clique-me";
	var edu=0;
	$scope.ativa = function(){
		$scope.eduardo = "ativado";
		alert("olamiundo:"+edu);
		console.log("olamiundo:"+edu);
		    $timeout(fudeo, 3000);
	};

	function fudeo(){ $scope.eduardo = "fudeo";	}
	
	var URLBrokerMQTT = "tcp://10.10.10.1";
	$scope.iniciarTeste = function(){
		cordova.plugins.CordovaMqTTPlugin.publish({
	       topic:"lights",
	       payload:"W0001-100",
	       qos:0,
	       retain:false,
	      success:function(s){
	        console.log("Sucesso ao publicar no broker MQTT:"+URLBrokerMQTT);
	      },
	      error:function(e){
	        console.log("Erro ao publicar no broker MQTT:"+URLBrokerMQTT);
	      }
	    });

	    cordova.plugins.CordovaMqTTPlugin.publish({
	       topic:"lights",
	       payload:"W0001-000",
	       qos:0,
	       retain:false,
	      success:function(s){
	        console.log("Sucesso ao publicar no broker MQTT:"+URLBrokerMQTT);
	      },
	      error:function(e){
	        console.log("Erro ao publicar no broker MQTT:"+URLBrokerMQTT);
	      }
	    });
	    console.log("Teste Finalizado!");
	}

}])
   
.controller('testeUnitRioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    