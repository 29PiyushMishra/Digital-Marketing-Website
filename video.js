var mediaVideoSelector = document.querySelectorAll('.js-video-play-pause'); //video
var MediaVideoplayWrapper = document.querySelectorAll('.js-video-play-wrapper'); // wrapper for video/button
 
// looping through each item
for (var i = 0; i < MediaVideoplayWrapper.length; i++) {
   
  //hide original video controls, as we we're making a custom play button.
  mediaVideoSelector[i].removeAttribute('controls');
  
  //event listener triggered when wrapper clicked
  MediaVideoplayWrapper[i].addEventListener("click", function(e) {
    
        var selectedParent = e.currentTarget;
        var selectedChildVideo = selectedParent.querySelector('.js-video-play-pause'); //selected video
        var selectedChildButton = selectedParent.querySelector('.js-video-play-icon'); //selected play button
           
        //play pause video when wrapper clicked
        if(selectedChildVideo.paused) {
          selectedParent.setAttribute('data-icon','u');
          selectedChildVideo.play();
         
          selectedChildButton.style.display = "none"; // hide play button
        } else {
          selectedParent.setAttribute('data-icon','P');
          selectedChildVideo.pause();
   
          selectedChildButton.style.display = "block"; // show play button  
        }

  });
  
}  

