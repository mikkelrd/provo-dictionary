angular
  .module('provoDictionary', ['firebase'])
  .constant('$firebase', {
    url: 'https://provodictionary.firebaseio.com'
  })
  .controller('mainCtrl', function($scope, mainSrvc){
    $scope.data = mainSrvc.data;
    $scope.addWord = function(newEntry){
      mainSrvc.addWord(newEntry);
      $scope.newEntry.term = $scope.newEntry.def = '';
      $scope.submitSuccess = true;
    };
    $scope.addReq = function(newReq){
      mainSrvc.addReq(newReq);
      $scope.newReq = '';
      $scope.submitSuccess = true;
    };
  })
  .service('mainSrvc', function($firebase, $firebaseArray){
    var fbRef = new Firebase($firebase.url);
    this.data = $firebaseArray(fbRef.child('entries'));
    this.addWord = function(newEntry){
      fbRef.child('entriesPending').push(newEntry);
    };
    this.addReq = function(newReq){
      fbRef.child('requestsPending').push(newReq);
    };
  });





//zoobie, state street, univ ave, center street, univ pkwy,
//promieses, callbacks, on, once
//search (search fb, add to front-end array which is still filtered by search term), clear search
//sort by search/click frequency counter
