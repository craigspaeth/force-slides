// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: 500,
    width: 700,
    videoId: 'u8qgehH3kEQ',
    playerVars: {
      controls: 0,
      showinfo: 0
    },
    events: {
      'onReady': play
    }
  });
}

var play = function(event) {
  player.mute();
  player.seekTo(13);
  player.playVideo();
  player.clearVideo();
  setTimeout(play, 12000);
}