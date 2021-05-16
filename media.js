const rectAngle = document.querySelector('.rectangle');
const mediaQueryList = matchMedia('(min-width: 600px)');

mediaQueryList.addListener(onMediaQueryChange);


function onMediaQueryChange(mediaQueryList) {
  if (mediaQueryList.matches === true) {
    rectAngle.classList.add('big-size');
    console.log('ウィンドウサイズが600pxを超えました');
  } else {
    rectAngle.classList.remove('big-size');
    console.log('ウィンドウサイズが600pxを下回りました');
  }
}

onMediaQueryChange(mediaQueryList);