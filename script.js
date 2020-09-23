// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 //var password = generatePassword();
 //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  
generatePassword();

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Asking if you want to continue and how many numbers 

function generatePassword(){
   alert("hola 2");
   if (confirm("Do you want to continue Generating Password") == true){
     
    var n = prompt( "How many numbers would you like ? (must to have between 8 to 128 characters)");
    


    }
   else {
     alert("Thank you see you next time");    
   }

}





//esto es mio
//promts with question 
///function click(){
  //generateBtn.onClick=alert("hola");   

//}

//generatePassword(alert("holaa"));




//<input name="button2" type="button" 
//onclick='alert("ESTA ES EL ALERTA.")' value="Click Aquí para ver el ALERTA" />

