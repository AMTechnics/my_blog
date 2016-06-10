var delete_button = document.getElementById('delete_button');

function are_you_sure(delete_url) {
    "use strict";
    var x, r = confirm("Press a button");
    
    if (r === true) {
        var link = document.createElement('a');
        link.href = delete_url;
        link.click();  
    } 
}

/*global confirm */

delete_button.onclick = function(){
    var delete_url = delete_button.getAttribute('data-attr-url');
    are_you_sure(delete_url)
    
};
                      
