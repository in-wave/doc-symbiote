import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/docs/attributes/attributes.md').toString();

export default await docPage(md, 'attributes')
