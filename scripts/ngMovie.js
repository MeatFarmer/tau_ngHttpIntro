console.log( 'js' );
// hook up NG
var myApp = angular.module( 'myApp', [] );

// create a controller
myApp.controller( 'MovieController', [ '$scope', '$http', function( $scope, $http ){
  console.log( 'NG' );

  $scope.getMovie = function(){
    console.log( 'searching for:', $scope.movieIn );
    // make http call to omdbapi
    var searchUrl = 'http://omdbapi.com/?s=' + $scope.movieIn;
    $http({
      method: 'GET',
      url: searchUrl
    }).then( function( response ){
      console.log( 'response:', response );
      $scope.searchResults = response.data.Search;
    })
  }; // end getMovie

  $scope.reMovie = function( movieIndex ){
    console.log( 'removieing:', movieIndex );
    $scope.searchResults.splice( movieIndex, 1 );
  }; // end reMovie
}]); // end controller
