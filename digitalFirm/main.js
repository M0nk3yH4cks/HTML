console.log("Debug Started");

function emailVerification(field){
    var checkedValue = document.getElementById("checkedTest");
    console.log(field.value);
    var emailText = field.value;
    
    if(emailText != "")
    if(emailText.substring(0,emailText.indexOf("@") != ""))
    switch (emailText.substring(emailText.indexOf("@"),)) {
        case "@gmail.com":
            console.log("passed");  
            checkedValue.className = "fa fa-check";  
            checkedValue.style.color = "green";        
            break;

        case "@hotmail.it":
            console.log("passed");  
            checkedValue.className = "fa fa-check";  
            checkedValue.style.color = "green";               
            break;

        case "@outlook.com":
            console.log("passed");       
            checkedValue.className = "fa fa-check";  
            checkedValue.style.color = "green";          
            break;  

        case "@outlook.it":
            console.log("passed"); 
            checkedValue.className = "fa fa-check";  
            checkedValue.style.color = "green";                
            break;   

        case "@yahoo.it":
            console.log("passed");    
            checkedValue.className = "fa fa-check";  
            checkedValue.style.color = "green";             
            break;      

        default:
        checkedValue.className = "fa fa-times";
        checkedValue.style.color = "red";
        console.log("Not Passed");        
            break;
    }
    else {
        checkedValue.className = "fa fa-times";
        checkedValue.style.color = "red";
    }
    
}

function passVerification(field) {
    var passText = field.value;
    var underPassText = document.getElementById("passRequirements");

    var symbols = ["@", "-", "_", "*", "/", "[", "]", "#", "&", "%", "$", "£", "!", "|", "\\","?"];

    for(var i = 0; i < symbols.length; i++){
        if (passText.indexOf(symbols[i]) != -1) {
            underPassText.hidden = true;
            console.log("Found Symbol");
            break;
        } else {
            underPassText.textContent = "Insert at least one symbol";
            underPassText.hidden = false;
            console.log("Insert Symbols");
        }
    };
}