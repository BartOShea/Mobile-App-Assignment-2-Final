//create module called myApp, no dependencies and name the controller "toDoListController. Anonymous function kicks off passing in scope parameter meaning variables are now shared from model to view"
angular.module("myApp",[]).controller("toDoListController",function($scope) {
    //array of names and descriptions
    var listArray = [
      {name:'John', description:'Build module'},
      {name:'Paul', description:'Build Controller'},
      {name:'Mick', description:'Build Form'}
    ];
    //array is added to scope
    $scope.listArray = listArray;
    //anonymous function kicked off automatically to push user input to the array
    $scope.addListItem = function(){
    $scope.listArray.push(

        {
            name: $scope.listName,//take the newly added name in scope and assign it to name in array
            description: $scope.listDescription //take the newly added description in scope and assign it to name in array
        }
      );
    //blank name and description text fields for next entry
    $scope.listName = "";
    $scope.listDescription = "";
  }
  // below code to remove table row was sourced from http://vitalflux.com/angularjs-addingremoving-table-rows-dynamically/
  $scope.remove = function(name){
          //declare negative number as index so records cannot be deleted in error
          var index = -1;
          //evaluate the expression
          var comArr = eval( $scope.listArray );
          //loop through until index matches index of name
          for( var i = 0; i < comArr.length; i++ ) {
                if( comArr[i].name === name ) {
                    index = i;
                    break;
                 }
          }
          //validation that index found
          if( index === -1 ) {
               alert( "Something gone wrong" );
          }
          //splice function to remove the required row
          $scope.listArray.splice( index, 1 );
       };
  });
