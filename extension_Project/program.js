function isSearch(){
    const classname = document.getElementsByClassName("RNNXgb"); //Class present on one of the divs of the Google search bar.

    if(classname != undefined && classname != null)
        return true;
    else
        return false;
}

//current url
const url = window.location.href;

//Only run on Google domain.
if(url.includes(".google.") && isSearch()){
    //Initialization///////////////////////////////////////////////////////////

    let configuration = {
        "something" : false,

  
    };
    //Store defaults if nothing is stored.
    chrome.storage.sync.get(['configuration'], function(storedConfiguration) { 
        if('configuration' in storedConfiguration)
            configuration = storedConfiguration;
        else
            chrome.storage.sync.set({'configuration': configuration}, function(){});

        modifySearchResults(configuration["configuration"]);
    });
}


//Receive data from popup.js////////////////////////////////////////////

chrome.runtime.onMessage.addListener(receivedMessage);

function receivedMessage(message, sender, response){
    modifySearchResults(message["configuration"]);
}

function modifySearchResults(configuration){


    
}