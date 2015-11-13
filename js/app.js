//http://vanilla-js.com/
var content = document.getElementById("content");
var CalendarApp = angular.module('CalendarApp', []);
CalendarApp.factory('CalendarApp', function () {
	var data = {};
});

CalendarApp.controller('CalendarController', function($scope) {

});
CalendarApp.controller('DayTypeController', function($scope) {

});
CalendarApp.controller('SettingsController', function($scope) {

});
CalendarApp.controller('SaveMyDataController', function($scope) {

});

function init() {
	localforage.setDriver([localforage.WEBSQL, localforage.INDEXEDDB, localforage.LOCALSTORAGE]);
}

function save(key, data) {
	return localforage.setItem(key, JSON.stringify(data));
}

function runApp(key) {
	return localforage.getItem(key);
}

init();
//load the basic app structure in the storage
save("calendarApp", calendarApp);
//retrieve the app 
runApp("calendarApp").then(function(data) {
	CalendarApp.data = JSON.parse(data);
 	console.log(CalendarApp.data);
});