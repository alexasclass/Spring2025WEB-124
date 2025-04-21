//Leticia Martinez 04-20-2025 -->
// adapted from http://javascript30.com -->
 //including CSS and JS -->


function playSound(e) { //I replace window.addEventListener('keydown', with this line

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if (!audio) return;//stop the function from running all toguetder
  audio.currentTime = 0;// Rewind the audio to start.
  audio.play();
  key.classList.add('playing');
}


function removeTransition(e) {
  // Skip if not transform.
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');// Removes the 'playing' class after the transition ends
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 
window.addEventListener('keydown', playSound);//I change this line tu the line
//to the botton
   