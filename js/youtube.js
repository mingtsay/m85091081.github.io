						var tag = document.createElement('script');
						tag.src = "https://www.youtube.com/player_api";
						var firstScriptTag = document.getElementsByTagName('script')[0];
						firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
						// Replace the 'ytplayer' element with an <iframe> and
						// YouTube player after the API code downloads.
						var player;
						function onYouTubePlayerAPIReady() {
						player = new YT.Player('ytplayer', {
						height: '390',
						width: '840' ,
						 playerVars: 
						 {
							 listType:'playlist',
							 list: 'PLM7YdZJVHQ2pOtUbZu3y2WqRj5SKZHcLH',
							 autoplay:1
							
							}

    					});
  						}
