import head from '../tpl/head.htm.js';
import { md2html, folders } from '../../../lib/index.js';
import menu from './menu.js';

/**
 * 
 * @param {String} mdTxt
 * @param {Number} menuIdx
 * @param {Object<string, string>} meta 
 * @returns 
 */
export async function docPage(mdTxt, menuIdx, meta) {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    ${head('../../../')}
    <body style="display:block">
      <layout-el>
        ${menu(menuIdx)}
        <article>${await md2html(mdTxt)}</article>
      </layout-el>
    </body>
    </html>
  `;
}