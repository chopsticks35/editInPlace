angular.module('myApp', []);

angular.module('myApp')
        
        .controller('myController', ['$scope', function($scope) {
            
            $scope.textBox1 = "Well dismally insect aboard raccoon a next contrary the blankly goodness that freely opposite coincidental alas much wherever dear masochistically save spun whimpered and hello a inside this froze had."
            
            $scope.showText1 = true
            
            $scope.clickText = function(event, which) {
			if(which === 'first') {
				$scope.showText1 = !$scope.showText1
				$scope.showInput1 = !$scope.showInput1
		          }   
            }
            
            $scope.showInput1 = false
                
            $scope.switchDisplay = function(event, which) {
			     if(which === 'first') {
				    $scope.showInput1 = !$scope.showInput1
				    $scope.showText1 = !$scope.showText1
				    $scope.textBox1 = $scope.newText1
			     }
            }
        }])