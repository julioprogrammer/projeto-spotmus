$(function() {
    // Definir playlist
    // Aqui criamos a playlist apenas se ela não existir.
    if (typeof playlist === 'undefined') {
        var playlist = [
            {
                title:"RPG Call of Cthulhu 1",
                artist:"Jovem Nerd",
                mp3:"songs/nerdcast_549_RPG_cthulhu_1.mp3",
                poster: "https://jovemnerd.com.br/wp-content/uploads/2017/01/template-virine-NC-maior-1210x544.jpg"
            },
            {
                title:"RPG Cyberpunk 1: O grande assalto",
                artist:"Jovem Nerd",
                mp3:"songs/nerdcast_395_RPG_cyberpunk_1.mp3",
                poster: "https://jovemnerd.com.br/wp-content/uploads/NC395_SUPER_VITRINE1-1210x544.jpg"
            },
            {
                title:"Especial RPG – O Bruxo, a Princesa e o Dragão",
                artist:"Jovem Nerd",
                mp3:"songs/nerdcast_251_especial_rpg.mp3",
                poster: "https://jovemnerd.com.br/wp-content/uploads/podcast_251_tit.jpg"
            },
            {
                title:"Especial RPG – O Duque, a Rosa e o Beholder",
                artist:"Jovem Nerd",
                mp3:"songs/nerdcast_291_especial_rpg_2.mp3",
                poster: "https://jovemnerd.com.br/wp-content/uploads/Sem-T%C3%ADtulo-19-1210x544.jpg"
            },
            {
                title:"Especial RPG – O Corvo, a Periguete e o Bucentauro",
                artist:"Jovem Nerd",
                mp3:"songs/nerdcast_341_especial_rpg_3.mp3",
                poster: "https://jovemnerd.com.br/wp-content/uploads/destaque_podcast_RPG3.jpeg"
            }
        ];
    }

    // Variável auxiliar para controlarmos a posição atual dentro da playlist
    var currentTrack = 0;

    // Variável auxiliar para ajudar a controlar a função "next"
    var numTracks = playlist.length;

    // Controles para next e prev
    $('.player-next').click(function() {
        player.playNext();
    });

    $('.player-prev').click(function() {
        player.playPrevious();
    });

    // Criar o player
    player = $(".player").jPlayer({
        ready: function () {
            // Executar a primeira música da playlist
            // Se não quiser autoplay, remova estas linhas
            exibirPlayList();
            player.jPlayer("setMedia", playlist[currentTrack]);
            // player.playCurrent();
        },
        ended: function() {
            // Quando terminar de tocar uma música, ir para a próxima
            playListProximo();
        },
        play: function(){
            // Quando começar a tocar, escrever o nome da faixa sendo executada
            play();
        },
        swfPath: 'js/plugins/jplayer/',
        supplied: "mp3",
        cssSelectorAncestor: "",
        cssSelector: {
            play: '.player-play',
            pause: ".player-pause",
            stop: ".player-stop",
            seekBar: ".player-timeline",
            playBar: ".player-timeline-control",
            volumeBar: '.jp-volume-bar',
            volumeBarValue: '.jp-volume-bar-value',
        },
        size: {
            width: "1px",
            height: "1px"
        }
    });

    player.playNext = function() {
        playListProximo();
    };
    player.playPrevious = function() {
        playListAnterior();
    };
    player.playCurrent = function() {
        player.jPlayer("setMedia", playlist[currentTrack]).jPlayer("play");
    };

    // Método interno de montagem e exibição da playlist
    function exibirPlayList() {
        $(".content #recomend").empty();
        for (i=0; i < playlist.length; i++) {
            var listItem = "";
            if(i == 0){
                listItem += "<h2>Recomendado para você</h2>";
            }
            listItem +=
                "<div class='card col-md-4'>" +
                    "<div class='capa__img'>" +
                        "<img src='"+playlist[i].poster+"'/>" +
                        "<span>"+playlist[i].title+"</span>" +
                    "</div>";
            listItem +=
                "<div class='social__icons'>" +
                    "<span class='facebook__icon--color'><i class='fa fa-facebook' aria-hidden='true'></i></span>" +
                    "<span class='google__icon--color'><i class='fa fa-google-plus' aria-hidden='true'></i></span>" +
                    "<span class='twitter__icon--color'><i class='fa fa-twitter' aria-hidden='true'></i></span>" +
                "</div>";
            listItem +=
                "<div class='play__button'>" +
                    "<span id='jplayer_playlist_item_"+i+"' class='play__button--active'>" +
                        "<i class='fa fa-play' aria-hidden='true'></i>" +
                    "</span>" +
                "</div>";
            $(".content #recomend").append(listItem);
            $("#jplayer_playlist_item_"+i).data("index", i).click(function() {
                var index = $(this).data("index");
                if (currentTrack != index) {
                    mudarPlayList(index);
                } else {
                    $(".player").jPlayer("play");
                }
                $(this).blur();
                return false;
            });
            $("#jplayer_playlist_get_mp3_"+i).data("index", i).click(function() {
                var index = $(this).data("index");
                $("#jplayer_playlist_item_"+index).trigger("click");
                $(this).blur();
                return false;
            });
        }
    }

    function mudarPlayList(index) {
        currentTrack = index;
        var title = "";
        title = truncateString(playlist[currentTrack].title, 16);
        player.jPlayer("setMedia", playlist[currentTrack]).jPlayer("play");
        $('#titulo').text(title);
        $('#artista').text(playlist[currentTrack].artist);
        $('#capa').attr('src',playlist[currentTrack].poster);
    }

    // Executa a próxima faixa
    function playListProximo() {
        var index = (currentTrack+1 < playlist.length) ? currentTrack + 1 : 0;
        mudarPlayList(index);
    }
    // Executa a faixa anterior
    function playListAnterior() {
        var index = (currentTrack-1 >= 0) ? currentTrack-1 : playlist.length-1;
        mudarPlayList(index);
    }

    function play () {
        var title = "";
        title = truncateString(playlist[currentTrack].title, 16);
        $('#titulo').text(title);
        $('#artista').text(playlist[currentTrack].artist);
        $('#capa').attr('src',playlist[currentTrack].poster);
    }

    function truncateString(str, num) {
        return str.length > num ?
            str.slice(0, num > 3 ? num - 3 : num) + "..." :
            str;
    }

});