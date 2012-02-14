/**
 * @author Marcelo Duende
 */


var myVideo = _V_("my_video_1");

function onComplete(){

	var myVideo1 = document.getElementsByTagName('video')[0];
	var videoPlaying = myVideo1.currentSrc;
	var ext = videoPlaying.substr(videoPlaying.lastIndexOf("."));
	myVideo1.src = 'video/eu'+ext;
		
	myVideo.load();
	myVideo.play();
	myVideo.removeEvent("ended", onComplete);
};

myVideo.addEvent("ended", onComplete);