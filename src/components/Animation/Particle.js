/* eslint-disable */
import './Particle.css';

export default function Particle(userConfig) {
  const config = {
    className: 'spring',
    fallSpeed: 1,
    minSize: 9,
    maxSize: 14,
    newOn: 300,
    blowAnimations: ['blow-soft-left', 'blow-medium-left', 'blow-hard-left', 'blow-soft-right', 'blow-medium-right', 'blow-hard-right'],
    swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8'],
  };
  Object.assign(config, userConfig);

  function timeoutShim(callback) {
    setTimeout(callback, config.newOn);
  }

  const animationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || timeoutShim;

  const getAnimationFrame = animationFrame ? function () {
    return animationFrame.apply(window, arguments);
  } : null;

  let windowHeight = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
  let windowWidth = document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth;

  window.addEventListener('resize', () => {
    windowHeight = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
    windowWidth = document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth;
  });

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const remove = (obj) => {
    if (obj.hasOwnProperty('remove')) {
      obj.remove();
    } else if (obj.parentNode !== null) {
      obj.parentNode.removeChild(obj);
    }
  };

  const createParticles = () => {
    setTimeout(() => { getAnimationFrame(createParticles); }, config.newOn);

    const particle = document.createElement('div');
    particle.setAttribute('class', config.className);

    const blowAnimation = config.blowAnimations[Math.floor(Math.random() * config.blowAnimations.length)];
    const swayAnimation = config.swayAnimations[Math.floor(Math.random() * config.swayAnimations.length)];
    const fallTime = (Math.round(windowHeight * 0.007) + Math.random() * 5) * config.fallSpeed;
    const animation = `fall ${fallTime}s linear 0s 1, ${blowAnimation} ${((fallTime > 30 ? fallTime : 30) - 20) + getRandomInt(0, 20)}s linear 0s infinite, ${swayAnimation} ${getRandomInt(2, 4)}s linear 0s infinite`;
    particle.style.animation = animation;
    particle.style.WebkitAnimation = animation;

    const size = `${getRandomInt(config.minSize, config.maxSize)}px`;
    particle.style.height = size;
    particle.style.width = size;
    particle.style.left = `${Math.random() * windowWidth - 100}px`;
    particle.style.marginTop = `${-((Math.random() * 20) + 15)}px`;

    document.body.appendChild(particle);

    particle.addEventListener('animationend', () => {
      remove(particle);
    });
    particle.addEventListener('webkitAnimationEnd', () => {
      remove(particle);
    });

    particle.addEventListener('animationiteration', (event) => {
      if (config.blowAnimations.indexOf(event.animationName) !== -1) {
        remove(particle);
      }
    });
    particle.addEventListener('webkitAnimationIteration', (event) => {
      if (config.blowAnimations.indexOf(event.animationName) !== -1) {
        remove(particle);
      }
    });
  };

  this.doStart = function () {
    createParticles();
  };

  return this;
}
