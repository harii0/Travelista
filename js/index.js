// button onclick functions

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });
//  SIGN UP/LOGIN FORM 
function toggleSignup(){
  document.getElementById("login-toggle").style.backgroundColor="#fff";
   document.getElementById("login-toggle").style.color="#222";
   document.getElementById("signup-toggle").style.backgroundColor="#3075C6";
   document.getElementById("signup-toggle").style.color="#fff";
   document.getElementById("login-form").style.display="none";
   document.getElementById("signup-form").style.display="block";
}

function toggleLogin(){
   document.getElementById("login-toggle").style.backgroundColor="#3075C6";
   document.getElementById("login-toggle").style.color="#fff";
   document.getElementById("signup-toggle").style.backgroundColor="#fff";
   document.getElementById("signup-toggle").style.color="#222";
   document.getElementById("signup-form").style.display="none";
   document.getElementById("login-form").style.display="block";
}
// ALERT
