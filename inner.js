window.addEventListener('resize', resizeHandler);

function resizeHandler(event) {
  const w = innerWidth;
  const h = innerHeight;

  document.querySelector('.value-width').innerHTML = `横幅は ${w}px です`;
  document.querySelector('.value-height').innerHTML = `高さは ${h}px です`;
}