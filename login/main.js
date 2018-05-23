/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function passVerification(field) {
    var passText = field.value;
    var checkedPass = document.getElementById("checkedPass");
    var checkedConPass = document.getElementById("checkedConPass");
    var underPassText = document.getElementById("passRequirements");
    var errorCleaner = document.getElementById("err");
    var stage = 0;

    var symbols = ["@", "-", "_", "*", "/", "[", "]", "#", "&", "%", "$", "£", "!", "|", "\\","?"];

    if(passText != ""){
        for(var i = 0; i < symbols.length; i++){
            if (passText.indexOf(symbols[i]) != -1) {
                underPassText.textContent = "";
                underPassText.hidden = true;

                checkedPass.className = "";
                checkedPass.style.color = "";

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

                    checkedPass.className = "";
                    checkedPass.style.color = "";
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
        checkedPass.className = "";
    }
    errorCleaner.textContent = "";
}

