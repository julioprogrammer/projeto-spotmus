$(document).ready(function (){
    $('.areacadastro').fadeToggle(0);
    $('.login__content').fadeIn(1500);
    $('#menu').fadeIn(0);
})

$('#btnEmail').click(function () {
    $('.arealogin--body').fadeToggle(0);
    $('.areacadastro').fadeToggle();
})

$('#btnMenu').click(function (){
  $("#menu").animate({width:'toggle'},350);
})

$('#foo').slider()
    .on('slide', function(ev){
        $('#bar').val(ev.value);
    });