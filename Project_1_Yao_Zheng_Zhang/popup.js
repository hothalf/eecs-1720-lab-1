window.addEventListener('load', (event) => {
    //Initialization////////////////////////////////////////////////////
    chrome.storage.sync.get(['configuration'], function(configuration) { 
        setUI(configuration["configuration"]);
    });


    document.addEventListener("DOMContentLoaded",function(){

        


    });
    
    document.getElementById("Change-Font").addEventListener("change", event =>{
        changeConfig("Change-Font", event.target.checked);
    });//Changes Font
    
    document.getElementById("Change-Colour").addEventListener("change", event =>{
        changeConfig("Change-Colour", event.target.checked);
    });//Changes Box Colour


    function restoreDefaultConfig(){
        const defaultConfiguration = {
            "configuration":{

                "Change_Font": false,
            }
        }

        sendToProgramJS(defaultConfiguration);

        setUI(defaultConfiguration["configuration"]);

        chrome.storage.sync.set({'configuration': defaultConfiguration["configuration"]}, function(){});
    }


}); //CLOSES WINDOW EVENT LISTENER


    