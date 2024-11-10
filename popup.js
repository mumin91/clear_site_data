document.getElementById('clearButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const currentUrl = new URL(tabs[0].url);
      const siteUrl = currentUrl.origin;
  
      // Show a message while data deletion is in process
      alert('Clearing site data...'); 
  
      chrome.browsingData.remove({
        "origins": [siteUrl]
      }, {
        "cacheStorage": true,
        "cache": true,
        "cookies": true,
        "fileSystems": true,
        "indexedDB": true,
        "localStorage": true,
        "webSQL": true,
        "serviceWorkers": true
      }, function() {
        alert('Site data cleared successfully!');
        window.close(); 
      });
    });
  });