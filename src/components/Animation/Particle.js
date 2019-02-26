/*eslint-disable*/
import './Particle.css';

export default function Particle(userOptions) {
  const particle = {
    blowAnimations: ['blow-soft-left', 'blow-medium-left', 'blow-hard-left', 'blow-soft-right', 'blow-medium-right', 'blow-hard-right'],
    className: 'spring',
    fallSpeed: 1,
    maxSize: 14,
    minSize: 9,
    newOn: 300,
    swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8'],
    excludeMobile: true
  }

  const isIE= navigator.userAgent.match(/msie/i);
  const isIE6= navigator.userAgent.match(/msie 6/i);
  const isMobile= navigator.userAgent.match(/mobile|opera m(ob|in)/i);
  const isBackCompatIE= (isIE && document.compatMode === 'BackCompat');
  const windowHeight= document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
  const windowWidth= (document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth) - (!isIE ? 8 : 0);
    
  const docFrag = document.createDocumentFragment();

  const features = () => {
    var getAnimationFrame;

    const timeoutShim = callback => {
      window.setTimeout(callback, 1000/20);
    }

    var _animationFrame = (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        timeoutShim);

    // apply to window, avoid "illegal invocation" errors in Chrome
    getAnimationFrame = _animationFrame ? () => {
      return _animationFrame.apply(window, arguments);
    } : null;

    var testDiv;

    testDiv = document.createElement('div');

    function has(prop) {

      // test for feature support
      var result = testDiv.style[prop];
      return (result !== undefined ? prop : null);

    }

    // note local scope.
    var localFeatures = {

      transform: {
        ie:  has('-ms-transform'),
        moz: has('MozTransform'),
        opera: has('OTransform'),
        webkit: has('webkitTransform'),
        w3: has('transform'),
        prop: null // the normalized property value
      },

      getAnimationFrame: getAnimationFrame

    };

    localFeatures.transform.prop = (
      localFeatures.transform.w3 ||
      localFeatures.transform.moz ||
      localFeatures.transform.webkit ||
      localFeatures.transform.ie ||
      localFeatures.transform.opera
    );

    testDiv = null;

    return localFeatures;
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (callback, element) => {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(() => {
              callback(currTime + timeToCall);
          },
          timeToCall);
      lastTime = currTime + timeToCall;

      return id;
    };
  }


  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const createParticles = () => {
    window.setTimeout(() => {
      window.requestAnimationFrame(createParticles);
    }, particle.newOn);
    const o = document.createElement('div');
    const blowAnimation = particle.blowAnimations[Math.floor(Math.random() * particle.blowAnimations.length)];
    const swayAnimation = particle.swayAnimations[Math.floor(Math.random() * particle.swayAnimations.length)];
    const fallTime = (Math.round(windowHeight * 0.007) + Math.random() * 5) * particle.fallSpeed;
    const animation = 'fall ' + fallTime + 's linear 0s 1' + ', ' +
      blowAnimation + ' ' + (((fallTime > 30 ? fallTime : 30) - 20) + getRandomInt(0, 20)) + 's linear 0s infinite' + ', ' +
      swayAnimation + ' ' + getRandomInt(2, 4) + 's linear 0s infinite';
    o.style.animation = animation;
    o.style.WebkitAnimation = animation;
    const size = getRandomInt(particle.minSize, particle.maxSize) + "px";
    o.style.height = size;
    o.style.width = size;
    o.style.left = Math.random() * windowWidth - 100 + "px";
    o.style.marginTop = -((Math.random() * 20) + 15) + "px";
    o.setAttribute('class', 'spring');

    document.body.appendChild(o);
  }

  this.doStart = function() {
    if (!particle.excludeMobile || !isMobile) {
      createParticles();
    }
  }

  return this;
}