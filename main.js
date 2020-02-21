//===== EMAIL FORM =====
var form = document.querySelector(".signUpForm"); //get form from HTML
var email = document.querySelector('input[type="em"]'); //get only email; [type="em"] not [type="email"] as it uses browser's prompts (to prevent default behavior)
var checkEmail = email => {
  //check with RegEx
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); //email to String & lower case
};
form.addEventListener("submit", e => {
  e.preventDefault(); //stops initial behavior for submit button as it doesn't send to server
  if (email.value.trim() === "") {
    //if email value is empty
    email.classList.add("input-error"); //adds CSS class to input to style 'error' red border & add exclamation point
    email.nextElementSibling.style.display = "block"; //displays div.error-msg "Email cannot be empty" as it has display:none;
    document.querySelector(".error-email").style.display = "none"; //removes div.error-email 'Whoops, make sure it's an email' as it has deisplay:none;
  } else if (email.value.trim() != "" && !checkEmail(email.value.trim())) {
    //if email's value (removes whitespace from both sides of a string) HAS VALUE but has FALSe with RegEx
    email.nextElementSibling.style.display = "none"; // removes div.error-msg "Email cannot be empty"
    email.classList.add("input-error"); ///adds CSS class to input to style 'error'red border & add exclamation point
    document.querySelector(".error-email").style.display = "block"; //displays div.error-email 'Whoops, make sure it's an email' as it has display:none;
  } else if (email.value.trim() != "" && checkEmail(email.value.trim())) {
    //if all OK
    email.nextElementSibling.style.display = "none"; // removes div.error-msg "Email cannot be empty"
    email.classList.remove("input-error"); //remomes CSS 'error' red border & exclamation point styles
    document.querySelector(".error-email").style.display = "none"; //removes div.error-email 'Whoops, make sure it's an email' as it has deisplay:none;
  }
});
//===== EMAIL FORM END =====

//============ Toggleable Tabs ==============
function openSlide(evt, slideName) {
  //Declare all variables
  var i, tabcontent, tablinks;

  //Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  //Get all elements with class="tablinks" and remove the class 'active'
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  //Show the current tab, and add an 'active' class to the button that opened the tab
  document.getElementById(slideName).style.display = "flex";
  evt.currentTarget.className += " active";
}
