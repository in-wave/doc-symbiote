import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/2x/docs/context/context.md').toString();

export default await docPage(md, 'context')
