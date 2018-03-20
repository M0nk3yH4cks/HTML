console.log("Debug Started");

function emailVerification(field){
    console.log(field.value);
    var emailText = field.value;

    switch (emailText.substring(emailText.indexOf("@"),)) {
        case "@gmail.com":
            console.log("passed");            
            break;

        case "@hotmail.it":
            console.log("passed");            
            break;

        case "@outlook.com":
            console.log("passed");            
            break;  

        case "@outlook.it":
            console.log("passed");            
            break;   

        case "@yahoo.it":
            console.log("passed");            
            break;      

        default:
        console.log("Not Passed");        
            break;
    }
    
}