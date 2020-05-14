const millisecondsPerTenMin = 1000 * 60 * 5;
let tenMinAgo = (new Date()).getTime() - millisecondsPerTenMin; //Time for all time - 1 minute

//when you double click allow access to index.html page
//have user copy paste url(s) and sumbit
// on submit, save url(s) in chrome storage
//when user clicks on icon then retrieve url(s) from chrome storage
//and insert url(s) into newPage function
//Extension: opens multiple tabs

function browsingdata(){
  chrome.browsingData.remove({
    "since": tenMinAgo,
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
    "localStorage": false, // Set to true or true as per your requirement
    "pluginData": true, // Set to true or true as per your requirement
    "passwords": false, // Set to true or true as per your requirement
    "webSQL": true // Set to true or true as per your requirement
  }, function (){
      console.log("All data is Deleted...");
  });
}

function newPage(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: "https://slack.com/"});
});
};

chrome.browserAction.onClicked.addListener(browsingdata());
chrome.browserAction.onClicked.addListener(newPage);

