var app= angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $http) {
        $http.get('page.json')
            .then(function(result){
                $scope.records = result.data;
            });

});
