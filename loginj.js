$(document).ready(function(){
    $("#Login").click(function(){
    var email = $("#username").val();
    var password = $("#password").val();
    // Checking for blank fields.
    if( email =='' || password ==''){
    $('input[type="text"],input[type="password"]').css("border","2px solid red");
    $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
    alert("Please fill all fields...!!!!!!");
    }else {
    $.post("login.php",{ email1: email, password1:password},
    function(data) {
    if(data=='Invalid Email.......') {
    $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
    $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 3px red"});
    alert(data);
    }else if(data=='Email or Password is wrong...!!!!'){
    $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
    alert(data);
    } else if(data=='Successfully Logged in...'){
        window.location="http://localhost/Omnifood-Project-master/index.html"
    //$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #3FBF3F"});
    alert(data);
    } else{
    alert(data);
    }
    });
    }   
    });
    });
    
