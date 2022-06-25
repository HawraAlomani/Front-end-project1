
// let information = document.getElementsByClassName("alert-copy");
// for (let i = 0; i < information.length; i++) {
//   information[i].style.color = '#46413b';
// }


// function to copy quotes
//id click1 <a>
//id quote1 <p>
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

