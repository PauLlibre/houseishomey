// const videoPlayers = document.querySelectorAll('.video-player');

// videoPlayers.forEach(function(player) {
//     player.muted = false; // Start with muted

//     player.addEventListener('click', function() {
//         player.style.border = '2px solid white'; // Add border style on click
//         player.play().catch(function(error) {
//             // Handle any errors with playing the video
//             console.log('Error playing video:', error);
//         });
//     });

//     player.addEventListener('mouseout', function() {
//         player.pause();
//         player.style.border = 'none'; // Remove border style when not hovering
//         player.currentTime = 0;
//     });
// });



// LOADER

// // Wait for all videos to load
// window.addEventListener('load', function() {
//     var videos = document.querySelectorAll('.video-player');
  
//     // Check if all videos are loaded
//     var allVideosLoaded = Array.from(videos).every(function(video) {
//       return video.readyState >= 4; // 4 indicates that the video has loaded
//     });
  
//     // If all videos are loaded, hide the loading container
//     if (allVideosLoaded) {
//       var loadingContainer = document.getElementById('loading-container');
//       loadingContainer.classList.add('loaded');
//     }
//   });
  
    

// Load the YouTube Player API asynchronously
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create an array to store the YouTube player instances
var players = [];

// Function to initialize YouTube players
function onYouTubePlayerAPIReady() {
  // Get all video player elements
  var videoPlayers = document.querySelectorAll('.video-player');

  // Iterate over each video player element
  videoPlayers.forEach(function(playerElement) {
    // Get the video ID from the data attribute
    var videoId = playerElement.dataset.videoId;

    // Create a new YouTube player instance
    var player = new YT.Player(playerElement, {
      videoId: videoId,
      playerVars: {
        controls: 0, // Hide controls
        rel: 0, // Hide related videos
        showinfo: 0, // Hide video information
        autoplay: 0,
        modestbranding: 1,
        iv_load_policy: 3, // Hide video annotations
        showuser: 0, // Hide video owner information
        disablekb: 1, // Disable keyboard controls
        loop: 1, // Loop the video
        playlist: videoId, // Set the video as a playlist to enable looping
        title: 0 // Hide video title
      }
    });

    // Store the player instance in the players array
    players.push(player);
  });
}
