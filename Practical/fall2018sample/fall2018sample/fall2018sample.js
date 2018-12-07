/* Don't use <script> tags in a linked js file! */

// JS Menu
$(".menuitem").click(function () {
    $(this).next(".submenu").toggle(250);
});

// Ajax Content

let Content = ("content1.txt");

  $("#choose-content").val(Content);
  $("#content").load(Content);
  
  $("#choose-content").change(function () {
      Content = $(this).val();
      $("#content").load(Content);
  });
