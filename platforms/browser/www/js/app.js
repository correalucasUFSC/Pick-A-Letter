'use strict';

angular.module('myApp', [])
	.controller('myController', ['$scope', function myController($scope) {

		$scope.letraSelecionada = '?';

		$scope.desabilitado = false;

		let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
		'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

		const alfabetoEstatico = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
		'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

		let removeLetraDoAlfabeto = function(letra) {
			for(let index in alfabeto){
				if(letra === alfabeto[index]){
					alfabeto.splice(index, 1);
				}
			}
		}

		$scope.resetaAlfabeto = () =>{
			alfabeto = alfabetoEstatico.slice();
			$scope.letraSelecionada = '?';
			$scope.desabilitado = false;
		}

		$scope.escolheLetra = () =>{
			console.log("estatico", alfabetoEstatico);
			let letra = alfabeto[Math.floor(Math.random()*alfabeto.length)];
			removeLetraDoAlfabeto(letra);
			$scope.letraSelecionada = letra;

			if(alfabeto.length === 0){
				$scope.desabilitado = true;
				return;
			}
		}



}]);