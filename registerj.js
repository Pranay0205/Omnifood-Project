
        $(document).ready(function() {
        $("#Register").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var rpassword = $("#rpassword").val();
        if (name == '' || email == '' || password == '') {
            alert("Please fill all fields...!!!!!!");
            $('input[type="text"],input[type="password"]').css("border", "2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
        } else if ((rpassword.length) < 8) {
        alert("Password should atleast 8 character in length...!!!!!!");
        } else {
        $.post("register.php", {
        name1: name,
        email2: email,
        rpassword1: rpassword
        }, function(data) {
        if (data == 'You have Successfully Registered.....') {
        $("form")[0].reset();
        }
        alert(data);
        });
        }
        });
        });
