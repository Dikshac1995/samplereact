function inquiryformValidate()
{
//    var flag = true;
   // if (fNameValidate() == false) return false;
   // if (lNameValidate() == false) return false;
   // if (phoneValidate() == false) return false;
   // if (officeValidate() == false) return false;
   // if (emailValidation() == false) return false;
   // if (passwordValidation() == false) return false;
   // if (conPasswordValidation() == false) return false;
   
   // if (birthdayValidation() == false) return false;
   // if (radiobuttonValidation() == false) return false;
   // if (checkboxValidation() == false) return false;
   // if (aboutValidation() == false) return false;
   if ((fNameValidate() == false)&& (lNameValidate() == false) && (phoneValidate() == false)
       && (officeValidate() == false) &&  (emailValidation() == false) && (passwordValidation() == false)
       && (conPasswordValidation() == false)&& (birthdayValidation() == false) && (radiobuttonValidation() == false)
       && (checkboxValidation() == false) && (aboutValidation() == false))
   return false;

}

// validation for fname

function fNameValidate()

{   
var firstName = document.getElementById('firstname').value;

if (firstName == "")
 {
   document.getElementById("fname").style.display = "table";
   document.getElementById("fname").innerHTML = "This field is required";
   return false;

}
else
{
   document.getElementById("fname").style.display = "none";
   return true;

}
}
//validation for lname

function lNameValidate()

{   
var lastName = document.getElementById('lastname').value;

if (lastName == "") {
   document.getElementById("lname").style.display = "table";
   document.getElementById("lname").innerHTML = "This field is required";
   return false;

}
else{
   document.getElementById("lname").style.display = "none";
   return true;

}
}

function phoneValidate()
{

var phoneNo = document.getElementById('phoneNo').value;
if (phoneNo == "") 
{
   document.getElementById("phoneno").style.display = "table";
   document.getElementById("phoneno").innerHTML = "This is required";
   return false;
}
        
else if (isNaN(phoneNo)) 
{
    document.getElementById("phoneno").style.display = "table";
    document.getElementById("phoneno").innerHTML = "phoneNo must be numeric";
    return false;
}
        
else  if (phoneNo.length != 10)
 {
    document.getElementById("phoneno").style.display = "table";
    document.getElementById("phoneno").innerHTML = "phoneNo must be 10 digit number";
    return false;
 } 
 else
 {
    document.getElementById("phoneno").style.display = "none";
    flag = true;
 }
}


//validation for office no
 function officeValidate()
 {
    var officeNo = document.getElementById("officeNO").value;
       if (officeNo == "") {
          document.getElementById("officeno").style.display = "table";
          document.getElementById("officeno").innerHTML = "This is required";
          return false;
       }
      
          else if (isNaN(officeNo)) {
            document.getElementById("officeno").style.display = "table";
            document.getElementById("officeno").innerHTML = "officeNo must be numeric";
            return false;
         }
         else
         {
           document.getElementById("officeno").style.display = "none";
           return  true;
        }  
 }

 //validation for email
 function  emailValidation()
 {
   var email = document.getElementById("emailId").value;

   if (email == "") 
   {
      document.getElementById("emailid").style.display = "table";
      document.getElementById("emailid").innerHTML = "This field is required";
      return false;
   } 
   else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)) 
    {
      document.getElementById("emailid").style.display = "table";
      document.getElementById("emailid").innerHTML ="email is invalid";
      return false;
    }
    else
    {
   document.getElementById("emailid").style.display = "none";
   return  true;
    }
 
}
// validation for password
function  passwordValidation()
 {
   var password = document.getElementById("passWord").value;

   if (password == "") 
   {
      document.getElementById("password").style.display = "table";
      document.getElementById("password").innerHTML = "This field is required";
      return false;
   } 
   else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)) 
   {
      document.getElementById("password").style.display = "table";
      document.getElementById("password").innerHTML ="password is invalid";
      return false;
   }
   else
    {
   document.getElementById("password").style.display = "none";
   return  true;
    }
 
}

// validation for conform password

 function conPasswordValidation()
 {

    var conpassword = document.getElementById("conPassword").value;  
    var password = document.getElementById("passWord").value;
    if (conpassword == "") {
        document.getElementById("cpass").style.display = "table";
        document.getElementById("cpass").innerHTML = " This  is required ";
        return false;
     }
     else if (conpassword != password) {
        document.getElementById("cpass").style.display = "table";
        document.getElementById("cpass").innerHTML = "password  don't match";
        return false;
     }
     else
     {
       document.getElementById("cpass").style.display = "none";
       return  true;
     }
 }

 // validation forn BDay
 function birthdayValidation()
 {
 var mm = document.myForm.month.value;
 var dd = document.myForm.day.value;
 var yyyy = document.myForm.year.value;

 var dateobj = new Date(yyyy, mm, dd);
 var datecurrent = new Date();

 if (mm == -1 || dd == 0 || yyyy == 0) {
    // alert("Please select a valid date.");
    document.getElementById("DOB").style.display = "table";
    document.getElementById("DOB").innerHTML = "please select valid date";
    return false;
 } 
 else 
 {
    var year = datecurrent.getFullYear() - dateobj.getFullYear();
    var mon = datecurrent.getMonth() - dateobj.getMonth();
    var age = year + " ." + mon + "";
    document.getElementById("DOB").style.display= "none";
    document.getElementById("age").value = age;

    return true;
 }
}

//validation for radiobutton
function radiobuttonValidation()
{
var radio= document.getElementsByName("radio");
if (radio[0].checked == true|| radio[1].checked ==true )
 {  document.getElementById("radioerror").style.display = "none";
    return true;
   

} else 
{

   document.getElementById("radioerror").style.display = "table";
   document.getElementById('radioerror').innerHTML = "Select Gender";
   return false;
}

// var flag = false;
// var i=0;
// while(!flag && i>radio.length)
// {
//    if (radio[i].checked) flag = true;
//    i++;
// }
// if (!flag)
// { alert("Must check some option!");
//     return flag;
// }

// else
// {

//    document.getElementsById("radio1").style.display= "none";
// }


}


 // validation for checkbox
 function checkboxValidation()
 {
   var checkBox1= document.getElementById('checkbox_sample18').checked;
   var checkBox2= document.getElementById('checkbox_sample19').checked;
   var checkBox3= document.getElementById('checkbox_sample20').checked;

   if((checkBox1=="")&& (checkBox2=="")&& (checkBox3==""))
   {
      document.getElementById("interest").style.display = "table";
      document.getElementById("interest").innerHTML = "This is Required";
      return false;
   }
   else
   {
       document.getElementById("interest").style.display = "none";
       return  true;
   }
 }

 // validation for about us 
 function aboutValidation()
 {
    var about = document.getElementById("aboutYou").value;  
    if (about == "") 
    {
        document.getElementById("aboutu").style.display = "table";
        document.getElementById("aboutu").innerHTML = "This is Required";
        return false;
     } 
     else if (about.length > 50)
      {
        document.getElementById("aboutu").style.display = "table";
        document.getElementById("aboutu").innerHTML = "Only  Max 50 charcter";
  
        return false;
     }
     else
     {
       document.getElementById("aboutu").style.display = "none";
       return  true;
     }

 }



