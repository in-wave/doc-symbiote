import tpl from '../tpl/live.htm.js';
import head from '../tpl/head.htm.js';
import { applyData } from '@jam-do/jam-tools/iso/applyData.js';

/**
 * 
 * @param {{title: String, folder: String}} data 
 */
export function getDoc(data) {
  let pageContent = /*html*/ `
    <live-code
      html="../lives/${data.folder}/index.html"
      js="../lives/${data.folder}/index.js"
      css="../lives/${data.folder}/index.css">
    </live-code>
  `;

  return applyData(tpl, {
    HEAD: head('../../../'),
    CONTENT: pageContent,
  });
}