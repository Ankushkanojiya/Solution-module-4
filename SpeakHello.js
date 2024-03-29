var helloSpeaker = {};
helloSpeaker.speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
helloSpeaker.speak = function (name) {
  console.log(helloSpeaker.speakWord + " " + name);
  }
window.helloSpeaker = helloSpeaker;
})(window);
