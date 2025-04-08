// /*Leticia Martinez 04-08-25-->
//<!--Adapted from htttps://javascript30.com/JS + CSS Clock

/*changed quarySelector method to a getElementById in this section */ 
const secondHand = document.getElementById('second-hand');
const minsHand = document.getElementById('min-hand');
const hourHand = document.getElementById('hour-hand');
const digitalTime = document.getElementById('digitalTime');
function setDate() {
  const now = new Date();


  /* change back-ticks, to  the style.transform to seconds, mins and hour*/ 
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

/* added functionality to display the digital time with an am or pm suffix*/
let suffix = "";
if ( hour < 12 ) {
    suffix = "am";
    }
    else {
        suffix = "pm";
    }
/*added digital time*/ 
    digitalTime.textContent = hour + ":" + mins + ":" + seconds + " " + suffix;

}
setInterval(setDate, 1000);

setDate();

