$(document).ready(function (){
    $('.areacadastro').fadeToggle(0);
    $('.login__content').fadeIn(1500);
})

$('#btnEmail').click(function () {
    $('.arealogin--body').fadeToggle(0);
    $('.areacadastro').fadeToggle();
})