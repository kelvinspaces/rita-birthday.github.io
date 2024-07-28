$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });
});
// loadAudioFile('music/1.mp3');
var audioMyWife = document.getElementById("audioMyWife");
var audioLuLu = document.getElementById("audioLuLu");
var audioLuLu2 = document.getElementById("audioLuLu2");
var audioXiaoYa = document.getElementById("audioXiaoYa");
var audioMeng = document.getElementById("audioMeng");
var audioRan = document.getElementById("audioRan");

$(document).on('click', '#playMyWife', function(){
    stopAudio();
	audioMyWife.play();
});

$(document).on('click', '#playLuLu', function(){
    stopAudio();
	audioLuLu.play();
});

$(document).on('click', '#playLuLu2', function(){
    stopAudio();
	audioLuLu2.play();
});

$(document).on('click', '#playXiaoYa', function(){
    stopAudio();
	audioXiaoYa.play();
});

$(document).on('click', '#playMeng', function(){
    stopAudio();
	audioMeng.play();
});

$(document).on('click', '#playRan', function(){
    stopAudio();
	audioRan.play();
});

function stopAudio(){
    $('audio').each(function(){
        this.pause();
        this.currentTime = 0;
    });

    $('video').each(function(){
        this.pause();
        this.currentTime = 0;
    });
}