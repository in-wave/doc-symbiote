import head from './2x/tpl/head.htm.js';
import sections from './2x/home/sections.js';

export default /*html*/ `
<!DOCTYPE html>
<html lang="en">
${head(undefined, '<script src="./2x/js/index.js" type="module"></script>')}
<body>
  <card-el clr-1 logo>
    <img src="./svg/logo/index.svg" alt="Symbiote.js logo">
  </card-el>

  <a href="#new">
    <card-el triple>
      <div>
        <h2>Symbiote.js 2.2 is out now!</h2>
        <h3>What's new?</h3>
      </div>
    </card-el>
  </a>

  <a href="./2x/docs/get_started/">
    <card-el clr-2>Docs</card-el>
  </a>

  <a href="#philosophy">
    <card-el clr-5>Philosophy</card-el>
  </a>
  
  <a href="#live">
    <card-el double clr-2>Live example</card-el>
  </a>
  
  <a href="#lives">
    <card-el clr-4>Live coding</card-el>
  </a>

  <a href="#biome">
    <card-el>Biome</card-el>
  </a>

  <a href="https://github.com/in-wave/symbiote" target="_blank">
    <card-el clr-2>GitHub →</card-el>
  </a>

  ${sections}
</body>
</html>`;
