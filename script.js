// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Validations if you want to continue and how many numbers and if between 8 and 128

function writePassword(){
   
  if (confirm("Do you want to continue Generating Password") == true){
        var seguirNext=1;
        for (seguirNext=1;seguirNext < 3;seguirNext++){
           var sinum = prompt( "How many numbers would you like ? (must to have between 8 to 128 characters)");
          if(sinum != null && sinum != 0 ){
      
              if (sinum >= 8 && sinum <= 128){
                 alert("Your password will have " + sinum + " characters");  
                 var silower = confirm("Do you want lower case ?");
                 var siupper = confirm("Do you want Upper case ?");
                 var sispecial = confirm("Do you want Special characters ?");
                generatePassword(sinum,silower,siupper,sispecial);
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

// Generate the random number/letter/special in combination 

function generatePassword(a,b,c,d){
  
 
  var palabra = ""
  for(var i=1; palabra.length <= (a-1);i++){

   var numberss = "0123456789";
   var x = Math.floor(Math.random()*numberss.length);
   var Rnumberss = numberss.charAt(x);
   var Rletterss = "";
   var RletterUss = "";
   var Rspecialss = "";
 
   if (b == true){
     var letterss = "abcdefghijklmnopqrstuvwxyz";
     var x = Math.floor(Math.random()*letterss.length);
     Rletterss = letterss.charAt(x);
   } 
      
   if (c == true){
     var letterUss = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var x = Math.floor(Math.random()*letterUss.length);
     RletterUss = letterUss.charAt(x);
   }
   
  if (d == true){
    var specialss = "!#$%&*?";
    var x = Math.floor(Math.random()*specialss.length);
    Rspecialss = specialss.charAt(x);

  } 

   palabra =palabra + Rnumberss + RletterUss + Rletterss + Rspecialss;
  
  }
//Password Generated with the number of the characters and printing in the HTML box 
palabra = palabra.slice(0,a); 
var passwordText = document.querySelector("#password");
passwordText.value = palabra;
  
}




