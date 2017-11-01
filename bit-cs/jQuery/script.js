$(document).ready(function () {
    $("body").text("Hello world!");
})
$(document).ready(function(){
    $("body").html("Hello there!");
})
$(function(){
    $("li:first").css("text-decoration","underline");
    $("li:eq(1)").css("color","blue");
    $("li:eq(2)").css("background-color","red");
    $("ul").replaceWith("some text");
    $("div").text("this is new text");
    $("li.active").html('<p>This is special list item!</p>');
    })
$(function(){
    var li=$("li");
    li.text("some content");
    var li=$('<li>New content</li>');
})
$('ul').before('<p>List description paragraph</p>');
$('li.active').prepend('+ ');
var newListItem = $('<li>Newest list item</li>');


$('li:last').after(newListItem);
$("li.active").removeClass("active");

