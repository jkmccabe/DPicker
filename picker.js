var myApp = angular.module('myApp', []);

myApp.directive('myDatepicker', function ($parse) {
    return function (scope, element, attrs, controller) {
        var ngModel = $parse(attrs.ngModel);
        $(function(){
            element.datepicker({
                showOn:"both",
                changeYear:true,
                changeMonth:true,
                dateFormat:'yy-mm-dd',
                maxDate: new Date(),
                yearRange: '1920:2012',
                onSelect:function (dateText, inst) {
                    scope.$apply(function(scope){
                        // Change binded variable
                        ngModel.assign(scope, dateText);
                    });
                }
            });
        });
    }
});


function MyCtrl($scope) {

    $scope.userInfo = {
        person: {
            mDate: '1967-10-07'
        }
    };

}
