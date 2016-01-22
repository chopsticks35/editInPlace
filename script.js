angular.module("myApp",[]);

angular.module('myApp')
        .controller("myController",["$scope",function($scope){

	$scope.myName="Ti";
	$scope.myBirthday="May 22";
	$scope.myLocation="Denver";
            

	$scope.attributeArray = [];
	$scope.showIt =[true,true,true];

	$scope.mouseAway = function(num){

		$scope.showIt[num]=true;
	}

	$scope.click = function(num){
		$scope.fillTrue();
		$scope.showIt[num]=false;
	}

	$scope.fillTrue = function(){
		for (i=0;i<$scope.attributeArray.length;i++){
			$scope.showIt[i]=true;
		}
	}
    
//    $timeout(function(){
//        attributArray.push(){
//            myJob: "Yoga Teacher";
//        }
    
//    })
}])