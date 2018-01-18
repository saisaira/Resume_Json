function validate()
{
   if( document.StudentRegistration.name.value == "" )
   {
     alert( "Please provide your Name!" );
     document.StudentRegistration.name.focus() ;
     return false;
   }
   return true;
 }
 function validate()
 {
 if( document.StudentRegistration.phno.value == "" ||
          isNaN( document.StudentRegistration.phno.value) ||
          document.StudentRegistration.phno.value.length != 10 )
  {
    alert( "Please provide a Mobile No in the format 123." );
    document.StudentRegistration.phno.focus() ;
    return false;
  }
  return true ;
 }
 function validate()
 {
 var email = document.StudentRegistration.email.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ))
 {
     alert("Please enter correct email ID")
     document.StudentRegistration.email.focus() ;
     return false;
 }
 return true;
}
