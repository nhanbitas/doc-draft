document.addEventListener("HTMLParsed",  () => {
    //Button inline loading
    const button = document.getElementById('btn-spinner');
    button.onclick = () => {
        button._instance.startAnimation();
        setTimeout(() => {
        button._instance.stopAnimation();
        }, 2500);
    };

   // Button inline loading default
   const buttonDefault = document.getElementById('btn-spinner-default');
   buttonDefault.onclick = () => {
     buttonDefault._instance.startAnimation();
     setTimeout(() => {
       buttonDefault._instance.stopAnimation();
     }, 2500);
   };

    // Starting loading with message
    const buttonStartAnimation1 = document.getElementById('btn-startanimation-1');
    buttonStartAnimation1.onclick = () => {
      buttonStartAnimation1._instance.startAnimation('Loading...');
    };
  
    const buttonStartAnimation2 = document.getElementById('btn-startanimation-2');
    buttonStartAnimation2.onclick = () => {
      buttonStartAnimation2._instance.startAnimation('Waiting...');
    };

    //Stop loading with status, message and delay
    const buttonStopAnimation1 = document.getElementById('btn-stopanimation-1');
    buttonStopAnimation1.onclick = () => {
      buttonStopAnimation1._instance.startAnimation();
  
      setTimeout(() => {
        buttonStopAnimation1._instance.stopAnimation('success', 'Success!');
      }, 2500);
    };
  
    const buttonStopAnimation2 = document.getElementById('btn-stopanimation-2');
    buttonStopAnimation2.onclick = () => {
      buttonStopAnimation2._instance.startAnimation();
  
      setTimeout(() => {
        buttonStopAnimation2._instance.stopAnimation('error', 'Please try again!', 3000);
      }, 2500);
    };
})