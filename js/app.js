//http://vanilla-js.com/
var content = document.getElementById("content");

function init() {
	localforage.setDriver([localforage.WEBSQL, localforage.INDEXEDDB, localforage.LOCALSTORAGE]);
}
function save(key, data) {
	return localforage.setItem(key, JSON.stringify(data));
}
function retrieve(key) {
	return localforage.getItem(key);
}

init();
//load the basic app structure in the storage
save("calendarApp", calendarApp);
//retrieve the app 
retrieve("calendarApp").then(function(data) {
	content.innerHTML = data;
});