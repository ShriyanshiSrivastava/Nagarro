$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var Error=true;
    var password_error=true;
    var confirm_password_error=true;

    $('#username').keyup(function(){
        username_validation();
    });
    function username_validation()
    {
        var username_val=$('#username').val();
        if(username_val.length==''){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username cannot be empty');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }
        if(username_val.length<7){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username should have 4 charaters');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }
    }
    $('#password').keyup(function(){
        password_validation();
    });
    function password_validation()
    {
        var password_val=$('#password').val();
        if(password_val.length==''){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password cannot be empty');
            $('#passwordvalidation').css('color','red');
            password_error=false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();

        }
        if(password_val.length<4){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Username should have 4 charaters');
            $('#passwordvalidation').css('color','red');
            password_error=false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();

        }
    }

        $('#confirmpassword').keyup(function(){
            confirm_password();
        });
        function confirm_password(){
            var confirm_password_val=$('#confirmpassword').val();
            var password_val=$('#password').val();
            if(password_val!=confirm_password_val){
                $('#confirmpasswordvalidation').show();
                $('#confirmpasswordvalidation').html('password not  matched');
                $('#confirmpasswordvalidation').css('color', 'red');
                confirm_password_error=false;
                return false;
            }
            else{
                $('#confirmpasswordvalidation').hide();
            }
        }

        $('#submitvalidation').click(function(){
            username_validation();
            password_validation();
            confirm_password();
            if(Error==true && password_error==true && confirm_password_error==true){
                return true;
            }
            else{
                return false;
            }
        });
        

    
});