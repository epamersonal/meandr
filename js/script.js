function validate() {
      
  if( document.myForm.firstname.value == "" ) {
     alert( "Пожалуйста, укажите Ваше имя!" );
     document.myForm.firstname.focus() ;
     return false;
  } 
  else if ( document.myForm.email.value == ""  ) {
    alert( "Пожалуйста, укажите Ваш email!" );
    document.myForm.email.focus() ;
    return false;
  } 
  else if ( document.myForm.phone.value == ""  ) {
    alert( "Пожалуйста, укажите Ваш телефон!" );
    document.myForm.phone.focus() ;
    return false;
  } 
  else if ( document.myForm.message.value == ""  ) {
      alert( "Пожалуйста, оставьте Ваше сообщение!" );
      document.myForm.message.focus() ;
      return false;
  }
  return( true );
}