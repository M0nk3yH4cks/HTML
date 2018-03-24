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
    var checkedPass = document.getElementById("checkedPass");
    var checkedConPass = document.getElementById("checkedConPass");
    var underPassText = document.getElementById("passRequirements");
    var stage = 0;

    var symbols = ["@", "-", "_", "*", "/", "[", "]", "#", "&", "%", "$", "£", "!", "|", "\\","?"];

    if(passText != ""){
        for(var i = 0; i < symbols.length; i++){
            if (passText.indexOf(symbols[i]) != -1) {
                underPassText.textContent = "";
                underPassText.hidden = true;

                checkedPass.className = "fa fa-check";
                checkedPass.style.color = "green";

                stage = 0;
                console.log("Found Symbol");
                break;
            } else {
                underPassText.textContent = "Insert at least one symbol. ";

                checkedPass.className = "fa fa-times";
                checkedPass.style.color = "red";

                underPassText.hidden = false;
                stage = 1;
                console.log("Insert Symbols");
            }
        };

        var symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

        for(var i = 0; i < symbols.length; i++){
            if (passText.indexOf(symbols[i]) != -1) {
                if(stage == 1){
                    underPassText.textContent == "Insert at least one symbol. ";

                    checkedPass.className = "fa fa-times";
                    checkedPass.style.color = "red";
                }else{
                    stage = 0;
                    underPassText.textContent = "";
                    underPassText.hidden = true;

                    checkedPass.className = "fa fa-check";
                    checkedPass.style.color = "green";
                }            
                console.log("Found Number");
                break;
            } else {
                if(i == symbols.length -1){
                    underPassText.textContent += "Insert at least one number. ";
                    underPassText.hidden = false;

                    checkedPass.className = "fa fa-times";
                    checkedPass.style.color = "red";

                    stage = 2;
                }
                console.log("Insert Number");
            }
        };
    }else{
        underPassText.textContent = "";
        underPassText.hidden = true;
    }
}

function repassVerification(field) {
    var passText = field.value;
    var originalPassText = document.getElementById("passField").value;

    if(passText != ""){
        if(passText != originalPassText){
            document.getElementById("passMatching").textContent = "Passwords are differents";
            document.getElementById("passMatching").hidden = false;
    
            checkedConPass.className = "fa fa-times";
            checkedConPass.style.color = "red";
        }else{
            document.getElementById("passMatching").textContent = "";
            document.getElementById("passMatching").hidden = true;
    
            checkedConPass.className = "fa fa-check";
            checkedConPass.style.color = "green";
        }
    }
}