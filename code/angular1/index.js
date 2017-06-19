/**
 * Created by shaodahong on 2017/3/21.
 */

angular.module('app', [])
    .controller('appCtrl', ['$q', '$scope', function ($q, $scope) {

        var defer = $q.defer();
        $scope.post = function () {
            console.log('post');
            return defer.promise.then(function(res) {
                console.log('res', res);
            })
        }

        $scope.reject = function () {
            console.log('reject');
            defer.reject('false');
            return defer.promise;
        }

        $scope.resolve = function () {
            console.log('resolve');
            defer.resolve('true');
            return defer.promise;
        }
    }])
