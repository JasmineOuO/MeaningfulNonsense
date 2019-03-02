/* eslint-disable */
import './Particle.css';

export default function Particle(userConfig) {
  const config = {
    className: 'spring',
    fallSpeed: 1,
    minSize: 9,
    maxSize: 14,
    newOn: 1200,
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

  // Remove a particle
  const remove = (p) => {
    if (p.hasOwnProperty('remove')) {
      p.remove();
    } else if (p.parentNode !== null) {
      p.parentNode.removeChild(p);
    }
  };

  const createParticles = () => {
    // Disable animation on smaller screens 
    if(windowWidth >= 400) {
      setTimeout(() => getAnimationFrame(createParticles), config.newOn);
    }

    // Create the particle with the desired class
    const particle = document.createElement('div');
    particle.setAttribute('class', config.className);

    // Randomize animation and fall time of the particle
    const blowAnimation = config.blowAnimations[Math.floor(Math.random() * config.blowAnimations.length)];
    const swayAnimation = config.swayAnimations[Math.floor(Math.random() * config.swayAnimations.length)];
    const fallTime = (Math.round(windowHeight * 0.007) + Math.random() * 5) * config.fallSpeed;
    const animation = `fall ${fallTime}s linear 0s 1, ${blowAnimation} ${((fallTime > 30 ? fallTime : 30) - 20) + getRandomInt(0, 20)}s linear 0s infinite, ${swayAnimation} ${getRandomInt(2, 4)}s linear 0s infinite`;
    particle.style.animation = animation;
    particle.style.WebkitAnimation = animation;

    // Randomize particle size and positioning
    const size = `${getRandomInt(config.minSize, config.maxSize)}px`;
    particle.style.height = size;
    particle.style.width = size;
    particle.style.left = `${Math.random() * windowWidth - 100}px`;
    particle.style.marginTop = `${-((Math.random() * 20) + 15)}px`;

    // Append the particle to the body
    document.body.appendChild(particle);

    // Remove particles that reach the bottom of the page
    particle.addEventListener('animationend', () => remove(particle));
    particle.addEventListener('webkitAnimationEnd', () => remove(particle));

    // Remove particles that finish their horizontal float animation
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

  this.morph = function (newConfig) {
    Object.assign(config, newConfig);
  }

  this.doStart = function () {
    getAnimationFrame(createParticles);
  };

  return this;
}
