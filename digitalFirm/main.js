console.log("Debug Started");

function emailVerification(field){
    var checkedValue = document.getElementById("checkedTest");
    console.log(field.value);
    var emailText = field.value;

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