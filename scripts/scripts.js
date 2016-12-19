/*
$("#pass1").blur(
    function(){
        getuser = $("#pass1").val();
        $("#resulpass").html(getuser);
    }
); //получение данных из формы
*/

$("#pswd1").blur(function(){
var sdsdsd = $("#pswd1").val();
$.ajax({
        type : "GET",
        url: "http://localhost/assets/templates/ZZZ24_project/test_page.php",
        data: {
            psw1 : sdsdsd
        },
        success: function(data){
            $("#testt").html(data);
        }
    });
$("#pswd1").val();
}
);