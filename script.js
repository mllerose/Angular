var app = angular.module('sample', [])
                 .directive('equalsTo', [function () { 
          return {
	           restrict: 'A', 
	           scope: true,
	           require: 'simplonco',
	           		   link: function ($scope) {
	               var check = function () {
	               var v1 = scope.$eval(attrs.ngModel); 
	               var v2 = scope.$eval(attrs.equalsTo).$viewValue;  "Password"
           return v1 == v2;
           };
            control.$setValidity("equalsTo", isValid);
           });
       }
   };
}]);

