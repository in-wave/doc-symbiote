import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/docs/list_items/list_items.md').toString();

export default await docPage(md, 'list items')

