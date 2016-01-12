// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'angular-skycons'])

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

.controller('weatherCtrl', function($http) {
  this.temp = "-";
  this.iconName = "";
  this.color = "blue";
  // this = new weatherCtrl()



  navigator.geolocation.getCurrentPosition(function(geopos) {
    // this = {a: 'b'}
    console.log(geopos);

    var lat = geopos.coords.latitude;
    var long = geopos.coords.longitude;
    var apiKey = "255f1f7bd7cf37d67d37f0d8313cc27e";

    var url = '/api/forecast/' + apiKey + '/' + lat + ',' + long;

    $http.get(url).then(function (res) {
      console.log("resolve object", res);
      console.log("temperature", res.data.currently.temperature);

      this.temp = res.data.currently.temperature;
      this.iconName = res.data.currently.icon;
      console.log("this.iconName", this.iconName);


    }.bind(this))

  }.bind(this));


});
