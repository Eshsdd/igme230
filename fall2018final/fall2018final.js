
/* JS/JQ Navbar */
$(".mainmenu").click(function () {
    $(this).next(".submenu").slideToggle("slow");
});


// Ajax Content


let Content = ("article0.txt")
$(":radio").val(Content);
$("article").load(Content);

$(":radio").change(function () {
    Content = $(this).val();
    $("article").load(Content);
});

//bonus
let num = 0;
$("#clickme").click( function(){
    num++;
    $("#count").html(num);
  });