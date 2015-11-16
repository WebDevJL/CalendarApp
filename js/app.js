//http://vanilla-js.com/
var content = document.getElementById("content");
var CalendarApp = { "data" : {}};


function LoadStorage() {
	localforage.setDriver([localforage.WEBSQL, localforage.INDEXEDDB, localforage.LOCALSTORAGE]);
}

function SaveDataToStorage(key, data) {
	return localforage.setItem(key, JSON.stringify(data));
}

function RunApp(key) {
	return localforage.getItem(key);
}

function ClearStorage(key) {
	localforage.removeItem(key);
}

function GenerateCalendarUI() {
	var target = document.getElementById("calendar");
}

function GenerateDayTypesUI() {
	var target = document.getElementById("dayTypes");
	var output = '<ul>';
	output += '<li><input id="newDayType" type="text" placeholder="Type a value" /><input id="saveDayType" type="button" value="Save" /></li>';
	if(CalendarApp.data.dayTypes !== null) {
		for (var i = 0; i < CalendarApp.data.dayTypes.length; i++) {
		output += '<li><input type="text" value="' + CalendarApp.data.dayTypes[i].name
			+ '" data-id="' +CalendarApp.data.dayTypes[i].id 
			+'" /></li>';
		};
	}
	output += '</ul>';
	target.innerHTML = output;
}

function RetrieveData() {
	var newDayType = document.getElementById("newDayType");
	var saveDayType = document.getElementById("saveDayType");
	saveDayType.addEventListener("click", function() {
		CalendarApp.data.dayTypes.push({
			"id": CalendarApp.data.dayTypes.length + 1,
			"name": newDayType.value});
		console.log(CalendarApp.data);
		SaveDataToStorage("calendarApp", CalendarApp);
	});
}
function GenerateSettingsUI() {
	var target = document.getElementById("settings");
}

LoadStorage();
//load the basic app structure in the storage
ClearStorage("calendarApp");
//SaveDataToStorage("calendarApp", calendarAppDefault);
//retrieve the app 
RunApp("calendarApp").then(function(data) {
	CalendarApp.data = data !== null ? JSON.parse(data) : calendarAppDefault;
 	console.log(CalendarApp.data);
 	GenerateCalendarUI();
 	GenerateDayTypesUI();
 	GenerateSettingsUI();
 	var defaultModule = document.getElementById(CalendarApp.data.settings.defaultModule);
 	defaultModule.style.display = "block";
 	RetrieveData();
});