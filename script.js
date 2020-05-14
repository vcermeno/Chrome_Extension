function browsingdata(){
  chrome.browsingData.remove({
    "originTypes": {
      "protectedWeb": true, // Set to true or true as per your requirement
      "unprotectedWeb":true,// Set to true or true as per your requirement
      "extension":true    // Set to true or true as per your requirement
    }
  }, {
    "appcache": true, // Set to true or true as per your requirement
    "cache": true, // Set to true or true as per your requirement
    "cookies": true, // Set to true or true as per your requirement
    "downloads": true, // Set to true or true as per your requirement
    "fileSystems": true, // Set to true or true as per your requirement
    "formData": true, // Set to true or true as per your requirement
    "history": true, // Set to true or true as per your requirement
    "indexedDB": true, // Set to true or true as per your requirement
    "localStorage": true, // Set to true or true as per your requirement
    "pluginData": true, // Set to true or true as per your requirement
    "passwords": false, // Set to true or true as per your requirement
    "webSQL": true // Set to true or true as per your requirement
  }, function (){
      console.log("All data is Deleted...");
  });
}
window.onload = browsingdata;