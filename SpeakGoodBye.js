(function(window){
    var byeSpeaker = {};
    byeSpeaker.speakWord = "Good Bye";
 
 // STEP 8: Rewrite the 'speak' function such that it is attached to the
 // byeSpeaker object instead of being a standalone function.
 // See Lecture 52, part 2
    byeSpeaker.speak = function (name) {
     console.log(byeSpeaker.speakWord + " " + name);
   }
   window.byeSpeaker =byeSpeaker;
 })(window);
 