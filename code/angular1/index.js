/**
 * Created by shaodahong on 2017/3/21.
 */

angular.module('app', [])
    .controller('appCtrl', ['$scope', function ($scope) {
        $scope.test = function () {
            $scope.changList = true;
        }

        $scope.show = true;
    }])
    .component('fileList', {
        template: '<div>文件信息</div>',
        controller: ['$scope', function ($scope) {

        }]
    })
    .directive('changList', [function () {
        return {
            restrict: 'A',
            link: function ($scope, $ele, $attrs) {
                $scope.$watch($attrs.changList, function (n, o) {
                    console.log('changList:watch', n, o);
                    if(n === true) {
                        $scope.$parent[$attrs.changList] = false;
                        console.log($attrs, $scope);
                    }
                })
            }
        }
    }])
