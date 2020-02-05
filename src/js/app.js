function countStartPage(target, final, start = 0, duration = 2, fps = 60) {
  duration = duration * 1000;
  if (fps > 60) {
    fps = 60;
  } else {
    fps = 1000 / fps;
  }
  target = document.getElementById(target);
  let curent = start;
  target.textContent = start;
  let piece = (final - start) / (duration / fps);

  function increment() {
    setTimeout(function() {
      curent = +curent + +piece;
      target.textContent = Math.round(curent);
      if (+target.textContent < final - piece) {
        increment();
      } else {
        target.textContent = final + "%";
      }
    }, fps);
  }
  increment();
}
countStartPage("target", 59);
countStartPage("target2", 70);
countStartPage("target3", 66);

// function smoothScroll(Element) {
//   Element = document.getElementById(Element);
//   let selectedPosX = 0;
//   let selectedPosY = 0;
//   if (Element != null) {
//     selectedPosX += Element.offsetLeft;
//     selectedPosY += Element.offsetTop;
//     Element = Element.offsetParent;
//   }
//   window.scrollTo(selectedPosX, selectedPosY);
// }
