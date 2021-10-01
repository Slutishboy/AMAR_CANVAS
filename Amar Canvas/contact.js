function check(){
    let x= document.forms["myForm"]["cvv"].value;
    if((x<100)||(x>999)){
        console.log(x);
        alert("Invalid CVV");
        return false;
    }
    let y= document.forms["myForm"]["Cnumber"].value;
    if((y<1000000000000000)||(y> 9999999999999999)){
        console.log(y);
        alert("Invalid Card Number");
        return false;
    }
    else{
        alert("Payment sucessfull");
       
        window.location.href='index.html';
       
    }
    
}