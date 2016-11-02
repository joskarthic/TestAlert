angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("ExampleController", function($scope) {
 alert("Test");
    $scope.confirmDialog = function() {
        navigator.notification.confirm("Checkout this confirmation dialog", function(buttonIndex) {
            switch(buttonIndex) {
                case 1:
                    alert("Decline Pressed");
                    break;
                case 2:
                    alert("Accept Pressed");
                    break;
               
            }
        }, "Our Title", [ "Decline", "Accept" ]);
		// Beep twice!
navigator.notification.beep(2);
    }
 
});