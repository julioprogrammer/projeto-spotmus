$(document).ready(function (){
    $('.areacadastro').fadeToggle(0);
    $('.login__content').fadeIn(1500);
    $('#menu').fadeIn(0);
    $('.recomend').addClass('jump-bounce');
    $('header nav').addClass('enter-down-bounce');
    $('footer .controls').addClass('enter-up-bounce');
    $('.capa__img span').addClass('rotate-flip-down');
    // $('.social__icons').addClass('flip-left-bounce');
    // $('.play__button').addClass('rotate-flip');
})

// $('.card').hover(function () {
//     $('.capa__img span').addClass('rotate-flip-down');},
//     function () {
//         $('.capa__img span').removeClass('rotate-flip-down');
//     }
// )

$('.play__button').hover(function () {
    $(this).addClass('dance');
},
    function () {
    $(this).removeClass('dance');
})

$('#btnEmail').click(function () {
    $('.arealogin--body').fadeToggle(0);
    $('.areacadastro').fadeToggle();
})

$("#btnMenu").sideNav();

// $('#btnMenu').click(function (){
//   $("#menu").animate({width:'toggle'},350);
// })

$('#foo').slider()
.on('slide', function(ev){
    $('#bar').val(ev.value);
})

$('#sound').slider()
    .on('slide', function(ev){
        $('#bar').val(ev.value);
    })