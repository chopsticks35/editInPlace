angular.module('myApp', []);

angular.module('myApp')
        
        .controller('myController', ['$scope', function($scope) {
            $scope.inputHide = function($event){
            $scope.hide = true;
                console.log('in function');
           }
        }])