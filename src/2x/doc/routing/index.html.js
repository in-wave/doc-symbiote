import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/2x/doc/routing/routing.md').toString();

export default await docPage(md, 'routing')
