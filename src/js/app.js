// Add your code here
function countStartPage(target, final, start = 0, duration = 2, fps = 60) {
  duration = duration * 1000;
  if (fps > 60) {
    fps = 60;
  } else {
    fps = 1000 / fps;
  }
  var target = document.getElementById(target);
  var curent = start;
  target.textContent = start;
  var piece = (final - start) / (duration / fps);

  function increment() {
    setTimeout(function() {
      curent = +curent + +piece;
      target.textContent = Math.round(curent);
      if (+target.textContent < final - piece) {
        increment();
      } else {
        target.textContent = final;
      }
    }, fps);
  }
  increment();
}
countStartPage("target", 500, 200, 5, 24);
countStartPage("target2", 1000);
countStartPage("target3", 1500);
