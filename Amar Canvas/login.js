// login.js
function func(){
    var x=document.getElementById("myForm").elements[0].value;
    var y=document.getElementById("myForm").elements[1].value;
    // alert(x);
    console.log(x);
    var h=document.getElementById("home");
    if((x==="SOHOM" )&&(y==="@Sohom69"))
    { 
        // h.click();
         alert("Successfully Logged in");
        //  var bt=document.getElementById('insert');
        //  var button =document.createElement('a');
        //  var text=document.createTextNode('Home');
        //  button.appendChild(text);
         
        //  bt.appendChild(button);
        // //  bt.classList.add("btn btn-dark btn-lg");
        // bt.firstChild.className+= "btn btn-dark btn-lg";
        // bt.firstChild.style.color="#fff";
        // bt.firstChild.setAttribute("onclick","location.href='index.html';");
        window.location.href='index.html';
       }
       else{
        //  h.click();
           alert("INVALID USER-ID OR PASSWORD");
          return false;
       }
    
      
}
function home(){
    console.log("sugsiuargyieugh");
  document.getElementById('home').click();
 
}