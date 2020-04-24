function validateEmail(email1){
  mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if(text.email.email1.value.match(mailformat)){
      alert("You have entered a valid email address!");    //The pop up alert for a valid email address
      document.form1.text1.focus();
      console.log("TRUE");
      return true;
      }else{
      alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
      document.form1.text1.focus();
      console.log("F");
      return false;
      }
  }
