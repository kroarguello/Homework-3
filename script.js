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

//Asking if you want to continue and how many numbers and if between 8 and 128

function generatePassword(){
   
  if (confirm("Do you want to continue Generating Password") == true){
        var seguirNext=1;
        for (seguirNext=1;seguirNext < 3;seguirNext++){
           var sinum = prompt( "How many numbers would you like ? (must to have between 8 to 128 characters)");
          if(sinum != null && sinum != 0 ){
      
              if (sinum >= 8 && sinum <= 128){
                 alert("Your password will have " + sinum + " numbers");  
                 var silower = confirm("Do you want lower case ?");
                 var siupper = confirm("Do you want Upper case ?");
                 var sispecial = confirm("Do you want Special characters ?");
                 
                 seguirNext = 3;
              }
              else{
                 alert("Try again, should be a number between 8 and 128");
                 seguirNext = 1;
              }

           }
          else {
           alert("Try again, should be a number between 8 and 128");
           seguirNext = 1;
           }
       }

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

