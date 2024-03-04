import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/2x/doc/start/start.md').toString();

export default await docPage(md, 'start')

