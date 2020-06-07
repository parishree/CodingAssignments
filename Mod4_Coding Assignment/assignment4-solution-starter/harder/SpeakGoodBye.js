

(function (window) {
	
    var byeSpeaker = {};
    byeSpeaker.speakWord = "Good Bye";
    
    var speakWord = "Good Bye";

 byeSpeaker.speak= function (name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker=byeSpeaker;

})(window);