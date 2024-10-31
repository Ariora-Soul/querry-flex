//This script tells page speed i think. In the future i'll made this by myslef!

var loadTime =
  window.performance.timing.domContentLoadedEventEnd -
  window.performance.timing.navigationStart;

console.log(window.performance);
