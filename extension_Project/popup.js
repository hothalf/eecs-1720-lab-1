window.addEventListener('load', (event) => {
    //Initialization////////////////////////////////////////////////////
    chrome.storage.sync.get(['configuration'], function(configuration) { 
        setUI(configuration["configuration"]);
    });


    document.addEventListener("DOMContentLoaded",function(){

        


    })

    