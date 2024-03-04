import logo from '../svg/logo/index.svg.js';

let items = [
  'start',
  'templates',
  'properties',
  'context',
  'list items',
  'flags',
  'lifecycle',
  'attributes',
  'pubSub',
  'styling',
  'routing'
];

/**
 * 
 * @param {String} menuItem 
 * @returns 
 */
export default function menu(menuItem) {
  return /*html*/ `
<nav>
  <a href="./"><div logo>${logo(90)}</div></a>
  ${items.map((fName) => {
    return /*html*/ `<a ${fName === menuItem ? 'current ': ''}sub href="./docs/${fName.replaceAll(' ', '_')}/">${fName}</a>`;
  }).join('')}
</nav>
  `;
} 