angular.module('myApp', []);

angular.module('myApp')
        
        .controller('myController', ['$scope', function($scope) {
            $scope.visible = true;
            $scope.inputHide = function(){
            $scope.visible = !$scope.visible;
           }
        }])