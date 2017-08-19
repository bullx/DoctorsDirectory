
var app = angular.module('myApp',[]);
var data =[];
app.controller('AppCtrl',['$scope','$http',
    function ($scope,$http) {
        console.log("hello");

        var refresh = function () {
            $http.get('/contactlist').then(function (response) {
                console.log('got the data');

                $scope.contactlist = response.data;
                $scope.contact ={};
                data = $scope.contactlist;

               // console.log($scope.contactlist);

            });
        }
        refresh();


    }])


    app.controller("PanelController", function() {
        this.tab = 1;
        this.doctor= data;
        this.selectTab = function(setTab, doctor) {
            this.tab = setTab;
            this.doctor =doctor;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        }
    });